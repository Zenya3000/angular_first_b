import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.sass']
})
export class StarComponent implements OnInit {
  data;
  constructor() { }
  vote;
  @Input() status;
  @Input() count;
  @Output() changingStatus = new EventEmitter()
  ngOnInit() {
  }

  changeStatus(){
    this.status = !this.status;
    this.count += this.status ? 1: -1;
    this.data = {
      status: this.status,
      count: this.count
    };
    // console.log(this.data);
    this.changingStatus.emit(this.data);
    
  }
  likeChanging(){
    
  }
}
