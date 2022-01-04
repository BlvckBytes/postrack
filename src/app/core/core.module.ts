import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TextboxComponent } from './textbox/textbox.component';
import { DatepickComponent } from './datepick/datepick.component';

@NgModule({
  declarations: [
    NavigationComponent,
    TextboxComponent,
    DatepickComponent,
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [
    NavigationComponent,
    TextboxComponent,
    DatepickComponent,
  ]
})
export class CoreModule { }
