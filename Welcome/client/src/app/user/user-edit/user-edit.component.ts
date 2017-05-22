import { Component, OnInit, Output, EventEmitter, OnChanges } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { User } from "./../user";
import { UsersService } from "app/user/users.service";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  id:string;
  edit_user=new User()
  @Output() refresh = new EventEmitter;
  returnUrl: string;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private users_service: UsersService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params)=>{this.id = params['id']});
    this.returnUrl=this.route.snapshot.queryParams["all"] || "/";
  }

  edit_this_user(){
    this.users_service.edit_the_user(this.id, this.edit_user)
        .then(()=>{
          this.refresh.emit()
          this.router.navigate([this.returnUrl])
        })
        .catch((err)=>console.log("Error when editing", err)
        )
  }





}
