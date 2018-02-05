import { UsersService } from './../-services/users.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass'],
  providers: [UsersService]
})
export class UsersComponent implements OnInit {


  users;
  constructor(
    private us: UsersService
  ) { }

  ngOnInit() {
    this.us.getUsers()
      .subscribe(res => {
        this.users = res.json();
      })
      
  }
  
}
