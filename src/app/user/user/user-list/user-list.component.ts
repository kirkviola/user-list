import { Component, OnInit } from '@angular/core';
import { User } from '../../user.class';
import { UserService } from '../../user.service';

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
  constructor(private userSvc: UserService) { }

  ngOnInit(): void {
    this.userSvc.list().subscribe(
      res => {
        console.debug("Users", res)
        this.users = res;
      },
      err => {
        console.error(err);
      }
    );
  }

}
