import { Component, OnInit, Input, Output, EventEmitter, OnChanges} from '@angular/core';
import {Note} from "./../note";

@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.css']
})
export class NoteEditComponent implements OnInit, OnChanges {
  @Input() this_note: Note;
  @Output() save= new EventEmitter;
  @Output() delete=new EventEmitter;
  edit_note: Note
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    this.edit_note=new Note()
    this.edit_note.title=this.this_note.title
  }
  save_note():void{
    this.save.emit(this.edit_note)
  }

}
