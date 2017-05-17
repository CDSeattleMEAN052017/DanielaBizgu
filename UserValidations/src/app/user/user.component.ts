import { Component, OnInit } from '@angular/core';
import {User} from './user'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: User[];
  new_user: User=new User();

  constructor() { }

  ngOnInit() {
    this.users = [];
  }
  create_user():void{
    this.users.push(this.new_user);
    this.new_user=new User;
  }

}
