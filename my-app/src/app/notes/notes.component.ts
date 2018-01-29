import { NotesService } from "./../-services/notes.service";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
  providers: [NotesService]
})
export class NotesComponent implements OnInit {

  constructor(
    private ns: NotesService
  ) { }

  notes = this.ns.getNotes();

  ngOnInit() {
  }

  removeNote(i){
    this.ns.removeNote(i);
  }
  
  addNote(data){
    this.ns.addNote(data);
  }
}
