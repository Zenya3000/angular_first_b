import { NotesService } from './../-services/notes.service';
import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core/src/event_emitter';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
  providers: [NotesService]
})
export class NotesComponent implements OnInit {
  @Input() index;
  @Input() removingNote;

  constructor(
    private ns: NotesService
  ) { }

  ngOnInit() {
  }

  notes = this.ns.getNotes();

  addNote(data){
    this.ns.addNote(data);
  }

  removeNote(index){
    this.ns.removeNote(index);
  }
  changeFav(data){
    this.ns.changeFav(data);
    console.log(data);
  }
  testing(num){
    console.log("notes_tested", num);
  }

  test = this.ns.getNotes();
}
