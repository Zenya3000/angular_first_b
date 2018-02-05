import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.sass']

})
export class NoteComponent implements OnInit {
  @Input() note;
  @Input() index;
  @Output() removingNote = new EventEmitter;
  @Output() changingFav = new EventEmitter;


  constructor(
  ) { }

  editing = false;

  ngOnInit() {
  }
  editNote(){
    this.editing = true;
  }
  saveNote(){
    this.editing = false;
  }
  removeNote(i){
    this.removingNote.emit(i);
  }
  changeFav(newFav){
    let data = {
      index: this.index,
      status: newFav.status,
      count: newFav.count
    }
    
    this.changingFav.emit(data);
  }

  
}
