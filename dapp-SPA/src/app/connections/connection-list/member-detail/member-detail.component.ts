import { Component, OnInit, ViewChild } from "@angular/core";
import { User } from "src/app/_models/User";
import { UserService } from "src/app/_services/user.service";
import { AlertifyService } from "src/app/_services/alertify.service";
import { ActivatedRoute } from "@angular/router";
import { TabsetComponent } from "ngx-bootstrap/tabs/public_api";

@Component({
  selector: "app-member-detail",
  templateUrl: "./member-detail.component.html",
  styleUrls: ["./member-detail.component.css"],
})
export class MemberDetailComponent implements OnInit {
  @ViewChild("memberTabs", { static: true }) memberTabs: TabsetComponent;
  user: User;
  galleryImages: any[];

  constructor(
    private userService: UserService,
    private alertify: AlertifyService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // this.loadUser();
    this.route.data.subscribe((data) => {
      this.user = data["user"];
      // this.galleryImages = this.getImages();
    });

    this.route.queryParams.subscribe((params) => {
      const selectedTab = params["tab"];
      this.memberTabs.tabs[selectedTab > 0 ? selectedTab : 0].active = true;
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
        title: photo.description,
      });
    }

    return imageUrls;
  }

  selectTab(tabId: number) {
    this.memberTabs.tabs[tabId].active = true;
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
