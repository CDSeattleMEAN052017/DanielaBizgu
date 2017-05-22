import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http"
import { User } from "./user"
import "rxjs"

const HEADERS = new Headers({ "Content-Type": "application/json"})
const OPTIONS = new RequestOptions({ headers: HEADERS })

@Injectable()
export class UsersService {


  constructor(private _http: Http) { }
  one_user: User;
  get_all_users(){
    return this._http.get("/get_users")
    .map(data => data.json())
    .toPromise()
  }


  create_user(user: User){
    return this._http.post("/create", user, OPTIONS)
                     .toPromise()
  }

  edit_the_user(id: string, user: User ){
    return this._http.post("/edit_user/" +id+ "", user, OPTIONS)
                     .toPromise()
  }


  delete_user(id:string){
    return this._http.post("/delete_user/"+ id +"",OPTIONS )
                     .toPromise()
  }



  get_one(user:User){
    this.one_user=user;
    console.log("^^^^^^^^^^^^^^^^^^^^^^^^^");
    console.log(this.one_user);
    
    
  }

}
