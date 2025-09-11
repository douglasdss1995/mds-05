import {Component} from '@angular/core';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';

@Component({
  selector: 'app-datapicker',
  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule],
  templateUrl: './datapicker.component.html',
  styleUrl: './datapicker.component.css',
  providers: [provideNativeDateAdapter()]
})
export class DatapickerComponent {

}
