import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
    template: `
    <h2 mat-dialog-title>Delete confirmation</h2>
      <mat-dialog-content>
          <div class="form-group">
              <label>Are you sure you want to delete the selected record?</label>
          </div>
      </mat-dialog-content>
      <mat-dialog-actions class="dialog-actions">
          <button class="btn btn-secondary dialog-button" mat-dialog-close>Cancel</button>
          <button class="btn btn-danger dialog-button" (click)="confirmDelete()" >Yes</button>
      </mat-dialog-actions>
    `
})

export class DeleteConfirmationDialog {

    constructor(private dialogRef: MatDialogRef<DeleteConfirmationDialog>) { }

    confirmDelete() {
        this.dialogRef.close(true)
    }
}
