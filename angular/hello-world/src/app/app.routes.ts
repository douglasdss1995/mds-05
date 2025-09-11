import {Routes} from '@angular/router';
import {TemplateDrivenComponent} from './forms/template-driven/template-driven.component';
import {TwoWayDataBindingComponent} from './data-binding/two-way-data-binding/two-way-data-binding.component';
import {InterpolationComponent} from './data-binding/interpolation/interpolation.component';
import {EventBindingComponent} from './data-binding/event-binding/event-binding.component';
import {PropertyBindingComponent} from './data-binding/property-binding/property-binding.component';

export const routes: Routes = [
  {path: "template-drive", component: TemplateDrivenComponent},
  {path: "two-way-data-binding", component: TwoWayDataBindingComponent},
  {path: "interpolation", component: InterpolationComponent},
  {path: "event-binding", component: EventBindingComponent},
  {path: "property-binding", component: PropertyBindingComponent},
];
