import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagePackagesComponent } from './page-packages/page-packages.component';
import { PageAddComponent } from './page-add/page-add.component';
import { PageArchiveComponent } from './page-archive/page-archive.component';
import { PageEventsComponent } from './page-events/page-events.component';

@NgModule({
  declarations: [
    PagePackagesComponent,
    PageAddComponent,
    PageArchiveComponent,
    PageEventsComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    PagePackagesComponent,
    PageAddComponent,
    PageArchiveComponent,
    PageEventsComponent
  ]
})
export class PagesModule { }
