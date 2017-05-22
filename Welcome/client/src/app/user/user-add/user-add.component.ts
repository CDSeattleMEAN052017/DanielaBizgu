import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {User} from "./../user";
import {UsersService} from "./../users.service";

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  new_user: User
  @Output() refresh=new EventEmitter

  constructor(private users_service: UsersService) { }

  ngOnInit() {
    this.new_user=new User()
  }

  add_user(){
    this.users_service.create_user(this.new_user)
    .then(()=>{
      this.new_user=new User;
      this.refresh.emit()
    })
    .catch((err)=> console.log(err))
  }
}
