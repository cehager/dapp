import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { JwtModule } from "@auth0/angular-jwt";

import { AppComponent } from "./app.component";
import { ValueComponent } from "./value/value.component";
import { NavComponent } from "./nav/nav.component";
import { AuthService } from "./_services/auth.service";
import { HomeComponent } from "./home/home.component";
import { RegisterComponent } from "./register/register.component";
import { ErrorInterceptorProvider } from "./_services/error.interceptor";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { TabsModule } from "ngx-bootstrap/tabs";
import { ConnectionListComponent } from "./connections/connection-list/connection-list.component";
import { MyListsComponent } from "./my-lists/my-lists.component";
import { MessagesComponent } from "./messages/messages.component";
import { appRoutes } from "./routes";
import { MemberCardComponent } from "./connections/connection-list/member-card/member-card.component";
import { MemberDetailComponent } from "./connections/connection-list/member-detail/member-detail.component";
import { MemberDetailResolver } from "./_resolvers/member-detail.resolver";
import { MemberListResolver } from "./_resolvers/member-list.resolver";

export function tokenGetter() {
  return localStorage.getItem("token");
}

@NgModule({
  declarations: [
    AppComponent,
    ValueComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    ConnectionListComponent,
    MyListsComponent,
    MessagesComponent,
    MemberCardComponent,
    MemberDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ["localhost:5000"],
        blacklistedRoutes: ["localhost:5000/api/auth"]
      }
    })
  ],
  providers: [
    AuthService,
    ErrorInterceptorProvider,
    MemberDetailResolver,
    MemberListResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
