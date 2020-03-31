import { Component, OnInit } from "@angular/core";
import { User } from "src/app/_models/User";
import { UserService } from "src/app/_services/user.service";
import { AlertifyService } from "src/app/_services/alertify.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-member-detail",
  templateUrl: "./member-detail.component.html",
  styleUrls: ["./member-detail.component.css"]
})
export class MemberDetailComponent implements OnInit {
  user: User;
  galleryImages: any[];

  constructor(
    private userService: UserService,
    private alertify: AlertifyService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // this.loadUser();
    this.route.data.subscribe(data => {
      this.user = data["user"];
      // this.galleryImages = this.getImages();
    });

    this.galleryImages = this.getImages();
  }

  // this.galleryImages = this.getImages();
  getImages() {
    const imageUrls = [];
    for (const photo of this.user.photos) {
      console.log("In getImages " + this.user);
      imageUrls.push({
        source: photo.url,
        alt: photo.url,
        title: photo.description
      });
    }

    return imageUrls;
  }

  // loadUser() {
  //   this.userService.getUser(+this.route.snapshot.params["id"]).subscribe(
  //     (user: User) => {
  //       this.user = user;
  //     },
  //     error => {
  //       this.alertify.error(error);
  //     }
  //   );
  // }
}
