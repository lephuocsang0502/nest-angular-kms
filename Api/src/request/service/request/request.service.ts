import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from } from 'rxjs';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import slugify from 'slugify';
import { RequestEntryEntity } from 'src/request/model/request-entry.entity';
import { RequestEntry } from 'src/request/model/request-entry.interface';
import { User } from 'src/user/models/user.interface';
import { UserService } from 'src/user/service/user.service';
import { Repository } from 'typeorm';

@Injectable()
export class RequestService {

    constructor(
        @InjectRepository(RequestEntryEntity) private readonly requestRepository: Repository<RequestEntryEntity>,
        private userService:UserService
    ){}

    create(user: User, requestEntry: RequestEntry): Observable<RequestEntry> {
        requestEntry.author = user;
        console.log(requestEntry);
        return this.generateSlug(requestEntry.spokeCo).pipe(
            switchMap((slug: string) => {
                requestEntry.slug = slug;
                return from(this.requestRepository.save(requestEntry));
            })
        )
    }

    generateSlug(spokeCo:string): Observable<string>{
        return of(slugify(spokeCo));
    }


    findAll(): Observable<RequestEntry[]> {
        return from(this.requestRepository.find({relations: ['author']}));
    }

    findOne(id: number): Observable<RequestEntry> {
        return from(this.requestRepository.findOne({id}, {relations: ['author']}));
    }

    findByUser(userId: number): Observable<RequestEntry[]> {
        return from(this.requestRepository.find({
            where: {
                author: userId
            },
            relations: ['author']
        })).pipe(map((requestEntries: RequestEntry[]) => requestEntries))
    }

    
    updateOne(id: number, requestEntries: RequestEntry): Observable<RequestEntry> {
        return from(this.requestRepository.update(id, requestEntries)).pipe(
            switchMap(() => this.findOne(id))
        )
    }

    deleteOne(id: number): Observable<any> {
        return from(this.requestRepository.delete(id));
    }


    // async findByCondition(condition:RequestEntry){
    //     return this.requestRepository.find(condition);
    // }
}
