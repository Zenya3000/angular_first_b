import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import typeahead from 'angular-ui-bootstrap/src/modal';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass'],
  providers: []
})
export class UserComponent implements OnInit {
  @Input() user;
  @Input() index;
  @Input() name;
  

  constructor() { }

  ngOnInit() {
  }

  update(data){
    console.log('data from user:', data);
  }
} 
