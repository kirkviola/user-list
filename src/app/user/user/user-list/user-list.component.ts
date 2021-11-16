import { Component, OnInit } from '@angular/core';
import { User } from '../../user.class';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = [
      new User(1, "joshmoe", "Joe", "Shmoe"),
      new User(2, "harryp", "Harry", "Potter"),
      new User(3, "ronw", "Ron", "Weasley")
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
