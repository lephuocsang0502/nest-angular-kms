import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { RequestEntry } from 'src/app/model/request-entry.interface';
import { RequestService } from 'src/app/services/request-services/request.service';

@Component({
  selector: 'app-view-request-entry',
  templateUrl: './view-request-entry.component.html',
  styleUrls: ['./view-request-entry.component.scss']
})
export class ViewRequestEntryComponent implements OnInit {

  requestEntry$: Observable<RequestEntry>= this.activativedRoute.params.pipe(
    switchMap((params: Params)=>{
      const requestEntryId:number = parseInt(params['id']);
      
      return this.requestServer.findOne(requestEntryId).pipe(
        map((requestEntry: RequestEntry)=> requestEntry)
      )
    })
  )

  constructor(private activativedRoute:ActivatedRoute,private requestServer:RequestService  ) { }

  ngOnInit(): void {
  }

}
