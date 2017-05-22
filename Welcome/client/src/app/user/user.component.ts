import { Component, OnInit, Input } from '@angular/core';
import { User } from "app/user/user";
import {UsersService} from "./users.service"

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  all_users: User[];
  one_user: User;

  constructor(private users_service: UsersService) { }
  
  ngOnInit() {
    this.get_all_users();
  }

  get_all_users(): any {
    this.users_service.get_all_users()
    .then((data)=> {this.all_users=data })
    .catch((err)=> console.log("errors:" , err))
  }

  get_one(user:User){
    this.one_user=user;
    console.log("!!!!!!!!!!!")
    console.log(this.one_user);
    
    
  }

}
