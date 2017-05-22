import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from "./../user";
import { UsersService } from "app/user/users.service";


@Component({
  selector: 'app-user-all',
  templateUrl: './user-all.component.html',
  styleUrls: ['./user-all.component.css']
})
export class UserAllComponent implements OnInit {
  @Input() all_users: User[];
  chosen_user:User;
  @Output() refresh = new EventEmitter;
  this_user: any
@Output() get_one_user=new EventEmitter;
  constructor(
    private users_service: UsersService,

  ) { }

  ngOnInit() {
  }

  show_user(user: User): void{
    if(this.chosen_user != user){
      this.chosen_user= user;
    }else{
      this.chosen_user=undefined;
    }
  }

  delete_users(id:string){
    
    this.users_service.delete_user(id)
        .then(()=>{
          this.refresh.emit()
          
        })
        .catch((err)=>console.log("Error when editing", err)
        )
  }


    get_one(user: User){
      this.get_one_user.emit({user})
      this.users_service.get_one(user)

  }



}
