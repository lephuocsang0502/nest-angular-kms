import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { RequestEntriesPageable } from 'src/app/model/request-entry.interface';
import { User } from 'src/app/model/user.interface';
import { RequestService } from 'src/app/services/request-services/request.service';
import { UsersService } from 'src/app/services/users-services/users.service';
import { PageEvent } from '@angular/material/paginator';
import { WINDOW } from 'src/app/window-token';



@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {

  private userId$: Observable<number> = this.activatedRoute.params.pipe(
    map((params: Params) => parseInt(params['id']))
  )

  user$: Observable<User> = this.userId$.pipe(
    switchMap((userId: number) => this.userService.findOne(userId))
  )

  requestEntries$: Observable<RequestEntriesPageable> = this.userId$.pipe(
    switchMap((userId: number) => this.requestService.indexByUser(userId, 1, 10))
  )

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UsersService,
    private requestService: RequestService,
    @Inject(WINDOW) private window: Window
  ) { }

  onPaginateChange(event: PageEvent) {
    return this.userId$.pipe(
      tap((userId: number) => this.requestEntries$ = this.requestService.indexByUser(userId, event.pageIndex, event.pageSize))
    ).subscribe();
  }
}
