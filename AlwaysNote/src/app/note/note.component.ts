import { Component, OnInit } from '@angular/core';
import { Note} from './note';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  notes: Note[];
  new_note: Note=new Note();
  chosen_note: Note;


  constructor() { }

  ngOnInit() {
    this.notes=[
      {id: this.get_random(), title:"My note", created_at: new Date(), updated_at: new Date()},
      {id: this.get_random(), title:"Second note", created_at: new Date(), updated_at: new Date()},
      {id: this.get_random(), title:"Third note", created_at: new Date(), updated_at: new Date()},

    ];
  }
  //Create a new note
  create_note(): void {
    this.new_note.id=this.get_random();
    this.new_note.created_at=new Date();
    this.new_note.updated_at=new Date()
    this.notes.push(this.new_note);
    this.new_note=new Note;
  }
  //random function to generate id
  get_random(): number{
    var rand=Math.floor(Math.random()*100)+1;
    return rand
  }
  //show note that was clicked on for editing
  show_note(note: Note):void{
    if(this.chosen_note != note){
      this.chosen_note=note
    }else{
      this.chosen_note=undefined;
    }
  }
 //update note passed as OUTPUT from child (note-edit component)
  update_note(modified_note: Note):void{
    for(let key in modified_note){
      this.chosen_note[key]=modified_note[key]
    }
    this.chosen_note=undefined;
  }
  //Delete object at index passed in
  delete_note(index):void{
    let temp=this.notes[this.notes.length-1];
    this.notes[index]=temp;
    this.notes.pop();
    }


}
