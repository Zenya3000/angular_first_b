import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-zzz',
  templateUrl: './zzz.component.html',
  styleUrls: ['./zzz.component.css']
})
export class ZzzComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  items = ['first Zenya', 'second Zenya', 'third Zenya'];
}
