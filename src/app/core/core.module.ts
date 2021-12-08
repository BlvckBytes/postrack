import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TextboxComponent } from './textbox/textbox.component';

@NgModule({
  declarations: [
    NavigationComponent,
    TextboxComponent,
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [
    NavigationComponent,
    TextboxComponent,
  ]
})
export class CoreModule { }
