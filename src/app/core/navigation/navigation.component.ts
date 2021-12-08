import { Component, ElementRef, HostListener, Input, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Router, Event as NavEvent, NavigationEnd } from '@angular/router';
import { NavigationLink } from './navigation-link.interface';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  // Available navigation links
  @Input()
  links: NavigationLink[] = [];

  // Actual element buttons corresponding to links
  @ViewChildren('button') buttons!: QueryList<ElementRef>;

  // Movable highlighter mask element
  @ViewChild('highlighter') highlighter!: ElementRef;

  constructor(
    private router: Router,
  ) {
    // Subscribe to navigation-end router events only
    // Keep track of whether or not it's the initial call (just rendered)
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
    // Clear all active flags
    this.links.forEach(it => it.active = false);

    // Set active state and move highlighter to it's position
    const activeURL = this.router.url;
    const target = this.links.find(it => it.link === activeURL);
    if (target) target.active = true;
    this.moveHighlighter(initial);
  }

  private moveHighlighter(initial: boolean) {
    // Only show highlighter mask if any link is active
    const active = this.links.find(it => it.active);
    this.highlighter.nativeElement.style.display = active ? 'flex' : 'none';
    if (!active) return;

    // Search for corresponding button
    const button = this.buttons.get(this.links.indexOf(active))?.nativeElement;
    if (!button) return;

    // Delay on initial call only
    setTimeout(() => {
      // Move highlighter to the center of the button
      const br = button.getBoundingClientRect();
      this.highlighter.nativeElement.style.left = `${br.x + br.width / 2}px`;
    }, initial ? 150 : 0);
  }

  @HostListener('window:resize')
  onResize() {
    // Window resized, re-position highlighter
    this.moveHighlighter(false);
  }
}
