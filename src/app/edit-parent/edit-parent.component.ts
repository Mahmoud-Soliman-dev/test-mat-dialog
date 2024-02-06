import {Component, inject, Input} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-edit-parent',
  standalone: true,
  imports: [],
  templateUrl: './edit-parent.component.html',
  styleUrl: './edit-parent.component.css'
})
export class EditParentComponent {
  matDialogRef = inject(MatDialogRef);
  data = inject(MAT_DIALOG_DATA);
  constructor() {
    console.log('EditParent ', this.data)
  }

  close() {
    this.matDialogRef.close('Im closing' )
  }
}
