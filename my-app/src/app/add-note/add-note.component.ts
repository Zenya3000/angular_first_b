import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {

  @Output() addingNote = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }
  
  addNote(title, body){
    let data = {
      title: title.value,
      body: body.value,
      fav: false,
      count: 0
  }
  this.addingNote.emit(data);
  title.value = '';
  body.value = '';
  }
}
