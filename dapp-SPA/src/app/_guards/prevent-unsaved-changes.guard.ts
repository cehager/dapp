import { Injectable } from "@angular/core";
import { CanDeactivate } from "@angular/router";
import { MemberEditComponent } from "../connections/connection-list/member-edit/member-edit.component";

@Injectable()
export class PreventUnsavedChanges
  implements CanDeactivate<MemberEditComponent> {
  canDeactivate(component: MemberEditComponent) {
    if (component.editForm.dirty) {
      return confirm(
        "Unsave changes will be lost! Are you sure you want to continue?"
      );
    }
    return true;
  }
}
