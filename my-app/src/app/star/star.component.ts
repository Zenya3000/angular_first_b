import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {

  constructor() { }
  vote;
  @Input() status;
  @Input() count;
  @Output() changingStatus = new EventEmitter()
  ngOnInit() {
  }

  changeStatus(){
    this.status = !this.status;
    this.vote = this.count + this.status ? 1: -1;
    this.changingStatus.emit(this.vote);
    
  }
  likeChanging(){
    
  }
}
