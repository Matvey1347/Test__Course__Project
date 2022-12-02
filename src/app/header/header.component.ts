import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @ViewChild('optionsWrap') optionsWrapRef!: ElementRef;
  @ViewChild('select') selectRef!: ElementRef;

  openedSelect = false;
  language = 'EN';
  openedMenuBurger = false;

  constructor() { }

  @HostListener('document:click', ['$event.target'])
  onCloseClick(target: HTMLElement): void {
    if (this.optionsWrapRef) {
      const clickedInside = this.optionsWrapRef.nativeElement.contains(target);
      const clickOnSelect = this.selectRef.nativeElement.contains(target);
      if (!clickedInside && !clickOnSelect && this.openedSelect) {
        this.openedSelect = false
      }
    }
  }
}
