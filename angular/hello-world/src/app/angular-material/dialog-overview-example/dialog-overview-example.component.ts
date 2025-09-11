import {Component, inject, model, signal} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {
  DialogOverviewExampleDialogComponent
} from './dialog-overview-example-dialog/dialog-overview-example-dialog.component';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-dialog-overview-example',
  imports: [
    MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule
  ],
  templateUrl: './dialog-overview-example.component.html',
  styleUrl: './dialog-overview-example.component.css'
})
export class DialogOverviewExampleComponent {

  readonly animal = signal('');
  readonly name = model('');
  readonly dialog = inject(MatDialog);

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
      data: {name: this.name(), animal: this.animal()},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result !== undefined) {
        this.animal.set(result);
      }
    });
  }
}
