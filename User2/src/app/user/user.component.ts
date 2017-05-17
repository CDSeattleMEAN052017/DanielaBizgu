import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() myUsers: any[];
  @Output()  updateUser= new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  update(index){
    this.updateUser.emit({index});
  }

}
