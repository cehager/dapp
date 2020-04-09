import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { JwtModule } from "@auth0/angular-jwt";
import { PaginationModule } from "ngx-bootstrap/pagination";

import { AppComponent } from "./app.component";
import { ValueComponent } from "./value/value.component";
import { NavComponent } from "./nav/nav.component";
import { AuthService } from "./_services/auth.service";
import { HomeComponent } from "./home/home.component";
import { RegisterComponent } from "./register/register.component";
import { ErrorInterceptorProvider } from "./_services/error.interceptor";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { TabsModule } from "ngx-bootstrap/tabs";
import { ButtonsModule } from "ngx-bootstrap/buttons";
import { ConnectionListComponent } from "./connections/connection-list/connection-list.component";
import { MyListsComponent } from "./my-lists/my-lists.component";
import { MessagesComponent } from "./messages/messages.component";
import { appRoutes } from "./routes";
import { MemberCardComponent } from "./connections/connection-list/member-card/member-card.component";
import { MemberDetailComponent } from "./connections/connection-list/member-detail/member-detail.component";
import { MemberMessagesComponent } from "./connections/connection-list/member-messages/member-messages.component";
import { MemberDetailResolver } from "./_resolvers/member-detail.resolver";
import { MemberListResolver } from "./_resolvers/member-list.resolver";
import { MessagesResolver } from "./_resolvers/messages.resolver";

import { GalleriaModule } from "primeng/galleria";
import { MemberEditComponent } from "./connections/connection-list/member-edit/member-edit.component";
import { MemberEditResolver } from "./_resolvers/member-edit.resolver";
import { ListsResolver } from "./_resolvers/lists.resolver";
import { PreventUnsavedChanges } from "./_guards/prevent-unsaved-changes.guard";
import { PhotoEditorComponent } from "./connections/connection-list/photo-editor/photo-editor.component";
import { FileUploadModule } from "ng2-file-upload";
import { PanelModule } from "primeng/panel";
import { InputTextModule } from "primeng/inputtext";
import { MessagesModule } from "primeng/messages";
import { MessageModule } from "primeng/message";
import { MessageService } from "primeng/api";
import { RadioButtonModule } from "primeng/radiobutton";
import { CalendarModule } from "primeng/calendar";
import { TimeagoModule } from "ngx-timeago";

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
    MemberDetailComponent,
    MemberEditComponent,
    MemberMessagesComponent,
    PhotoEditorComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    PaginationModule.forRoot(),
    BsDropdownModule.forRoot(),
    ButtonsModule,
    TabsModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ["localhost:5000"],
        blacklistedRoutes: ["localhost:5000/api/auth"],
      },
    }),
    GalleriaModule,
    FileUploadModule,
    PanelModule,
    InputTextModule,
    MessagesModule,
    MessageModule,
    RadioButtonModule,
    CalendarModule,
    TimeagoModule.forRoot(),
  ],
  providers: [
    AuthService,
    ErrorInterceptorProvider,
    MemberDetailResolver,
    MemberListResolver,
    MemberEditResolver,
    ListsResolver,
    PreventUnsavedChanges,
    MessageService,
    MessagesResolver,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
