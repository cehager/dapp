import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ConnectionListComponent } from "./connection-list/connection-list.component";
import { MessagesComponent } from "./messages/messages.component";
import { MyListsComponent } from "./my-lists/my-lists.component";
import { AuthGuard } from "./_guards/auth.guard";

export const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "",
    runGuardsAndResolvers: "always",
    canActivate: [AuthGuard],
    children: [
      { path: "members", component: ConnectionListComponent },
      { path: "messages", component: MessagesComponent },
      { path: "lists", component: MyListsComponent }
    ]
  },
  { path: "**", redirectTo: "", pathMatch: "full" }
];
