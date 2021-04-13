import { Body, Controller, Get, Post, Query, Request, UseGuards} from '@nestjs/common';
import { Observable } from 'rxjs';
import { JwtAuthGuard } from 'src/auth/guards/jwt-guards';
import { RequestEntry } from 'src/request/model/request-entry.interface';
import { RequestService } from 'src/request/service/request/request.service';

@Controller('requests')
export class RequestController {

    constructor(private requestService:RequestService) {}

    @UseGuards(JwtAuthGuard)
    @Post()
    create(@Body()requestEntry:RequestEntry , @Request() req):Observable<RequestEntry>{
        const user =req.user;
        return  this.requestService.create(user,requestEntry);
    }

    // @Post('getByCondition')
    // findRequestEntries(@Body() body :any) {
    //     const condition = body.condition || {};
    //     return this.requestService.findByCondition(condition);
    // }

    @Get()
    findBlogEntries(@Query('userId') userId: number): Observable<RequestEntry[]> {
        if(userId == null) {
            return this.requestService.findAll();
        } else {
            return this.requestService.findByUser(userId);
        }
    }
}
