import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal, NgbModule, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class ModalComponent implements OnInit {
  closeResult: string;

  @Input() address;
  @Input() name;
  @Input() phone;
  @Input() index;
  @Output() updateData = new EventEmitter;
  edit = false;
  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit() {
  }

  open(content) {
    this.modalService.open(content);
  }
  editModal(index){
    this.edit = true;
  }
  saveModal(content){
    console.log('content', content);
    this.edit = false;
    // console.log('save', this.edit, content._parentView.component.address);
    let data = {
      index: this.index,
      name: content._parentView.component.name,
      phone: content._parentView.component.phone,
      street: content._parentView.component.address.street,
      suite: content._parentView.component.address.suite
    }
    this.updateData.emit(data);
  }

}
