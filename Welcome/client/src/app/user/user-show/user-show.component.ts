import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { User } from "./../user";
import { UsersService } from "app/user/users.service";


@Component({
  selector: 'app-user-show',
  templateUrl: './user-show.component.html',
  styleUrls: ['./user-show.component.css']
})
export class UserShowComponent implements OnInit {
 id:string;
 this_user:any = this.users_service.one_user
 returnUrl: string;

 something: string ;
 
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private users_service: UsersService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params)=>{this.id=params["id"]});
    // this.returnUrl=this.route.snapshot.queryParams["all"] || "/" ;
     this.something= this.id;
     console.log("^^^^^^^^^");
     console.log(this.this_user);
     
     
  }

    //   get_one(id: string){
    // this.users_service.get_one_user(id)
    //                   .subscribe(
    //                     (data)=>{
    //                       this.this_user=data;
    //                       console.log("************");
    //                       console.log(this.this_user);                        
                          
    //                     },
    //                     (err)=>{
    //                       console.log("Get one user error:", err);
                          
    //                     }
    //                   )
    //   }





}
