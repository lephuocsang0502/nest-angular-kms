import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestEntriesPageable, RequestEntry } from 'src/app/model/request-entry.interface';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http:HttpClient) { }

  findOne(id:number):Observable<RequestEntry> {
    return this.http.get<RequestEntry>('/api/request-entries/'+id);
  }

  indexAll(page:number,limit:number):Observable<RequestEntriesPageable>{
    let params= new HttpParams();
    params = params.append('page', String(page));
    params = params.append('limit', String(limit));
    return this.http.get<RequestEntriesPageable>('/api/request-entries', {params});
  }
  indexByUser(userId: number, page: number, limit: number): Observable<RequestEntriesPageable> {
    let params = new HttpParams();

    params = params.append('page', String(page));
    params = params.append('limit', String(limit));

    return this.http.get<RequestEntriesPageable>('/api/request-entries/user/' + String(userId), {params});
  }
  post(requestEntry:RequestEntry):Observable<RequestEntry>{
    console.log("Post");
    return this.http.post<RequestEntry>('/api/request-entries',requestEntry);
  }

  uploadHeaderImage(formData:FormData):Observable<any>{

    return this.http.post<FormData>('/api/request-entries/image/upload',formData,{
      reportProgress:true,
      observe:'events'
    });
  }
}
