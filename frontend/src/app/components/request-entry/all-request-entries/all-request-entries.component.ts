import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RequestEntriesPageable } from 'src/app/model/request-entry.interface';
import { RequestService } from 'src/app/services/request-services/request.service';

@Component({
  selector: 'app-all-request-entries',
  templateUrl: './all-request-entries.component.html',
  styleUrls: ['./all-request-entries.component.scss']
})
export class AllRequestEntriesComponent {

  @Input() requestEntries:RequestEntriesPageable;
  @Output() paginate: EventEmitter<PageEvent> = new EventEmitter<PageEvent>();
  pageEvent: PageEvent;


  constructor(private router:Router) { }


  onPaginateChange(event: PageEvent){
    event.pageIndex = event.pageIndex + 1;
    this.paginate.emit(event);
  }

  navigate(id) {
    this.router.navigateByUrl('request-entries/' + id);
  }
}
