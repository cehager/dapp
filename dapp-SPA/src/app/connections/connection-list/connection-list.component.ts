import { Component, OnInit } from "@angular/core";
import { User } from "../../_models/User";
import { UserService } from "../../_services/user.service";
import { AlertifyService } from "../../_services/alertify.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-connection-list",
  templateUrl: "./connection-list.component.html",
  styleUrls: ["./connection-list.component.css"]
})
export class ConnectionListComponent implements OnInit {
  users: User[];

  constructor(
    private userService: UserService,
    private alertify: AlertifyService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // this.loadUsers();
    this.route.data.subscribe(data => {
      this.users = data["users"];
    });
  }

  // loadUsers() {
  //   this.userService.getUsers().subscribe(
  //     (users: User[]) => {
  //       this.users = users;
  //     },
  //     error => {
  //       this.alertify.error(error);
  //     }
  //   );
  // }
}
