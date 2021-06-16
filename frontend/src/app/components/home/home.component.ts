import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { RequestEntriesPageable } from 'src/app/model/request-entry.interface';
import { RequestService } from 'src/app/services/request-services/request.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  requestEntries$: Observable<RequestEntriesPageable> = this.requestServer.indexAll(1,10);

  constructor(private requestServer:RequestService) { }

  onPaginateChange(event: PageEvent){
    this.requestEntries$ = this.requestServer.indexAll(event.pageIndex,event.pageSize);
  }
}
