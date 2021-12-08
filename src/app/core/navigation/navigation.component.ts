import { Component, ElementRef, HostListener, Input, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Router, Event as NavEvent, NavigationEnd } from '@angular/router';
import { NavigationLink } from './navigation-link.interface';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  @Input()
  links: NavigationLink[] = [];

  @ViewChildren('button') buttons!: QueryList<ElementRef>;
  @ViewChild('highlighter') highlighter!: ElementRef;

  constructor(
    private router: Router,
  ) {
    let initial = true;
    this.router.events.subscribe({
      next: (e: NavEvent) => {
        if (!(e instanceof NavigationEnd)) return;
        this.checkActivation(initial);
        initial = false;
      }
    });
  }

  navigateTo(link: NavigationLink) {
    this.router.navigate([link.link]);
  }

  private checkActivation(initial: boolean) {
    const activeURL = this.router.url;
    this.links.forEach(it => it.active = false);
    const target = this.links.find(it => it.link === activeURL);
    if (target) target.active = true;
    this.moveHighlighter(initial);
  }

  private moveHighlighter(initial: boolean) {
    const active = this.links.find(it => it.active);
    this.highlighter.nativeElement.style.display = active ? 'flex' : 'none';
    if (!active) return;

    const button = this.buttons.get(this.links.indexOf(active))?.nativeElement;
    if (!button) return;

    setTimeout(() => {
      const br = button.getBoundingClientRect();
      this.highlighter.nativeElement.style.left = `${br.x + br.width / 2}px`;
    }, initial ? 150 : 0);
  }

  @HostListener('window:resize')
  onResize() {
    this.moveHighlighter(false);
  }
}
