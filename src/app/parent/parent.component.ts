import {Component, inject} from '@angular/core';
import {EditParentComponent} from "../edit-parent/edit-parent.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-parent',
  standalone: true,
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  matDialogService = inject(MatDialog);
  constructor() {}
  openModal(): void {
    this.matDialogService.open(EditParentComponent, {
      data: 'Hello'
    }).afterClosed().subscribe(xx => {
      console.log(xx);
    })
  }
}
