import {Routes, RouterModule} from "@angular/router";
import {UserComponent} from "./user/user.component";
import {UserAddComponent} from "./user/user-add/user-add.component";
import {UserEditComponent} from "./user/user-edit/user-edit.component";
import {UserShowComponent} from "./user/user-show/user-show.component";
import {UserAllComponent} from "./user/user-all/user-all.component";





const APP_ROUTES: Routes=[
  {path: "", component:  UserComponent, children:[
    {path:"all", component: UserAllComponent},
    {path:"add", component: UserAddComponent},
  ]},
  {path:"edit/:id", component: UserEditComponent},
  {path:"show/:id", component: UserShowComponent},
]
export const routing=RouterModule.forRoot(APP_ROUTES)
