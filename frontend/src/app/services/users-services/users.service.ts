import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User } from 'src/app/model/user.interface';


export interface UserData{
  items:User[],
  meta: {
    totalItems: number;
    itemCount: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
  },
  links: {
    first: string;
    previous:string;
    next: string;
    last: string;
  }
}
    
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) {
   }


  findOne(id: number): Observable<User> {
    return this.http.get('/api/user/' + id).pipe(
      map((user:User) => user)
    )
  }

  fillAll(page:number, size:number):Observable<UserData>{
    let params= new HttpParams();

    params=params.append('page',String (page));
    params=params.append('limit',String(size));

    return this.http.get('/api/user',{params}).pipe(
      map((userData:UserData)=>userData),
      catchError(err=>throwError(err))
    )
  }
  
  updateOne(user):Observable<User>{
    return this.http.put('api/user/'+ user.id,user);
  }

  uploadProfileImage(formData:FormData):Observable<any>{
    return this.http.post<FormData>('/api/user/upload',formData, {
      reportProgress:true,
      observe: 'events'
    });
  }

  paginateByName(page:number,size:number,username:string):Observable<UserData>{
    let params= new HttpParams();

    params=params.append('page',String (page));
    params=params.append('limit',String(size));
    params=params.append('username',String(username));
    
    return this.http.get('/api/user',{params}).pipe(
      map((userData:UserData)=>userData),
      catchError(err=>throwError(err))
    )
  }
}
