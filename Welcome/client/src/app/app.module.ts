import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserAddComponent } from './user/user-add/user-add.component';
import { UserShowComponent } from './user/user-show/user-show.component';

import {UsersService } from './user/users.service';
import { routing } from "./app.routes";
import { UserAllComponent } from './user/user-all/user-all.component';
import { UserEditComponent } from './user/user-edit/user-edit.component'

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserAddComponent,
    UserShowComponent,
    UserAllComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [UsersService],
  bootstrap: [AppComponent],
})
export class AppModule { }
