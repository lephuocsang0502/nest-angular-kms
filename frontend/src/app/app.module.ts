import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import { MatCardModule} from '@angular/material/card';
import { UsersComponent } from './components/user/users/users.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { UserProfileComponent } from './components/user/user-profile/user-profile.component';
import { UpdateUserProfileComponent } from './components/user/update-user-profile/update-user-profile.component';
import { JwtHelperService, JWT_OPTIONS } from "@auth0/angular-jwt";
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatIconModule} from '@angular/material/icon';
import { HomeComponent } from './components/home/home.component';
import { AllRequestEntriesComponent } from './components/request-entry/all-request-entries/all-request-entries.component';
import { CreateRequestEntryComponent } from './components/request-entry/create-request-entry/create-request-entry.component';
import {MarkdownModule} from 'ngx-markdown';
import { ViewRequestEntryComponent } from './components/request-entry/view-request-entry/view-request-entry.component'
import { WINDOW_PROVIDERS } from './window-token';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UsersComponent,
    UserProfileComponent,
    UpdateUserProfileComponent,
    HomeComponent,
    AllRequestEntriesComponent,
    CreateRequestEntryComponent,
    ViewRequestEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatProgressBarModule,
    MatIconModule,
    MarkdownModule.forRoot()

  ],
  providers: [
    WINDOW_PROVIDERS,
    JwtHelperService,
    {
      provide: JWT_OPTIONS,
      useValue:JWT_OPTIONS
    },

    {
      provide:HTTP_INTERCEPTORS,
      useClass:JwtInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
