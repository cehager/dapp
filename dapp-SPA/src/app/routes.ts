import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ConnectionListComponent } from "./connections/connection-list/connection-list.component";
import { MessagesComponent } from "./messages/messages.component";
import { MyListsComponent } from "./my-lists/my-lists.component";
import { AuthGuard } from "./_guards/auth.guard";
import { MemberDetailComponent } from "./connections/connection-list/member-detail/member-detail.component";
import { MemberDetailResolver } from "./_resolvers/member-detail.resolver";
import { MemberListResolver } from "./_resolvers/member-list.resolver";

export const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "",
    runGuardsAndResolvers: "always",
    canActivate: [AuthGuard],
    children: [
      {
        path: "members",
        component: ConnectionListComponent,
        resolve: { users: MemberListResolver }
      },
      {
        path: "members/:id",
        component: MemberDetailComponent,
        resolve: { user: MemberDetailResolver }
      },
      { path: "messages", component: MessagesComponent },
      { path: "lists", component: MyListsComponent }
    ]
  },
  { path: "**", redirectTo: "", pathMatch: "full" }
];
