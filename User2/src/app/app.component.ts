import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  users: any[]=[
    {name: "Daniela", date: new Date()},
    {name: "Dina", date: new Date()},
    {name: "Virginia", date: new Date()},
    {name: "Oleg", date: new Date()},
    {name: "Valeria", date: new Date()},

  ]
  updateThisUser(index){
    this.users[index.index].name +=" Bizgu";
  }
}
