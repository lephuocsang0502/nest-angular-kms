import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateRequestEntryComponent } from './components/request-entry/create-request-entry/create-request-entry.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UpdateUserProfileComponent } from './components/user/update-user-profile/update-user-profile.component';
import { UsersComponent } from './components/user/users/users.component';
import { AuthGuard } from './guards/auth.guard';
import { ViewRequestEntryComponent } from './components/request-entry/view-request-entry/view-request-entry.component';
import { UserProfileComponent } from './components/user/user-profile/user-profile.component';

const routes: Routes = [
  {
    path:'admin',
    loadChildren: ()=> import('./admin/admin.module').then(m=>m.AdminModule)
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component: RegisterComponent
  },
  {
    path:'users',
    children: [
      {
        path: '',
        component: UsersComponent
      },
      {
        path: ':id',
        component: UserProfileComponent
      },
    ]
  },
  {
    path:'update-profile',
    component: UpdateUserProfileComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'create-request-entry',
    component: CreateRequestEntryComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'request-entries/:id',
    component: ViewRequestEntryComponent
  },
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
