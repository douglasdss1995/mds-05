import {Component} from '@angular/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';

@Component({
  selector: 'app-toggles',
  imports: [MatSlideToggleModule, MatButtonToggleModule, MatCheckboxModule],
  templateUrl: './toggles.component.html',
  styleUrl: './toggles.component.css'
})
export class TogglesComponent {
}
