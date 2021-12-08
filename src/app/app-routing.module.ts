import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAddComponent } from './pages/page-add/page-add.component';
import { PageArchiveComponent } from './pages/page-archive/page-archive.component';
import { PageEventsComponent } from './pages/page-events/page-events.component';
import { PagePackagesComponent } from './pages/page-packages/page-packages.component';

const routes: Routes = [
  { path: 'packages', component: PagePackagesComponent },
  { path: 'add', component: PageAddComponent },
  { path: 'archive', component: PageArchiveComponent },
  { path: 'events', component: PageEventsComponent },
  { path: '**', redirectTo: 'packages' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
