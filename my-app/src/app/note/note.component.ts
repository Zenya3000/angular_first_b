import { NotesService } from '../-services/notes.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css'],
  providers: [NotesService]
})
export class NoteComponent implements OnInit {

  @Input() note;
  @Input() index;
  @Output() removingNote = new EventEmitter();

  editing = false;

  constructor(
    private ns: NotesService
  ) { }

  ngOnInit() {
  }
  addNote(data){
    console.log('bla', data);
    this.ns.addNote(data);
  }
  editNote(){
    this.editing = true;
  }
  saveNote(){
    this.editing = false;
  }
  removeNote(data){
    this.ns.removeNote(data);
  }

}
