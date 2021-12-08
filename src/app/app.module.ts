import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrackingNumberService } from './services/tracking-number.service';
import { CoreModule } from './core/core.module';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    PagesModule,
  ],
  providers: [
    TrackingNumberService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
