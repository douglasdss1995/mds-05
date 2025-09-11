import {Routes} from '@angular/router';
import {HelloWorldComponent} from './hello-world/hello-world.component';
import {InterpolationComponent} from './data-binding/interpolation/interpolation.component';
import {PropertyBindingComponent} from './data-binding/property-binding/property-binding.component';
import {EventBindingComponent} from './data-binding/event-binding/event-binding.component';
import {TwoWayDataBindingComponent} from './data-binding/two-way-data-binding/two-way-data-binding.component';
import {TemplateDrivenComponent} from './forms/template-driven/template-driven.component';
import {ButtonComponent} from './angular-material/button/button.component';
import {FormFieldComponent} from './angular-material/form-field/form-field.component';
import {ExpansionPanelComponent} from './angular-material/expansion-panel/expansion-panel.component';

export const routes: Routes = [
  {path: "home", component: HelloWorldComponent},
  {path: "interpolation", component: InterpolationComponent},
  {path: "property-binding", component: PropertyBindingComponent},
  {path: "event-binding", component: EventBindingComponent},
  {path: "two-way-data-binding", component: TwoWayDataBindingComponent},
  {path: "template-driven", component: TemplateDrivenComponent},
  {path: "button", component: ButtonComponent},
  {path: "form-field", component: FormFieldComponent},
  {path: "expansion-panel", component: ExpansionPanelComponent},
];
