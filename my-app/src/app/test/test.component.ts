import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.sass']
})
export class TestComponent implements OnInit {
  @Input() val;
  @Input() num;
  @Output() testingFunction = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  test(num){
    this.testingFunction.emit(num);
  }

  

}
