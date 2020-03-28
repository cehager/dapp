import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { ValueComponent } from "./value/value.component";
import { NavComponent } from "./nav/nav.component";
import { AuthService } from "./_services/auth.service";
import { HomeComponent } from "./home/home.component";
import { RegisterComponent } from "./register/register.component";
import { ErrorInterceptorProvider } from "./_services/error.interceptor";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { ConnectionListComponent } from "./connection-list/connection-list.component";
import { MyListsComponent } from "./my-lists/my-lists.component";
import { MessagesComponent } from "./messages/messages.component";
import { appRoutes } from "./routes";

@NgModule({
  declarations: [
    AppComponent,
    ValueComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    ConnectionListComponent,
    MyListsComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthService, ErrorInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule {}
