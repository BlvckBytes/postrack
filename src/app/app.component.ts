import { Component, ElementRef, ViewChild } from '@angular/core';
import { TrackingNumberService } from './services/tracking-number.service';
import { links } from './navigation-links';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  get navLinks() {
    return links;
  }

  @ViewChild('result') result!: ElementRef;

  constructor(
    private trackingService: TrackingNumberService,
  ) {}

  fetch() {
    this.trackingService.getInfo('2401050012250626').subscribe(res => {
      this.result.nativeElement.innerHTML = JSON.stringify(res, null, 2).replace(/(?:\r\n|\r|\n)/g, '<br>');
    });
  }
}
