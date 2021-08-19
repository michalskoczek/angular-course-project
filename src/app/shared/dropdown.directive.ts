import {
  Directive,
  HostListener,
  HostBinding,
  ElementRef,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  // I sposób - Kod do włączenia i wyłączenia dropdown ale tylko, gdy w niego klikam
  // constructor() {}
  // @HostBinding('class.open') isOpen = false;

  // @HostListener('click') toggleOpen() {
  //   this.isOpen = !this.isOpen;
  // }

  // II sposób - kod do włączenia dropdown, gdy w niego klikam i wyłączenia, gdy klikam gdziekolwiek
  constructor(private elRef: ElementRef) {}
  @HostBinding('class.open') isOpen = false;
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target)
      ? !this.isOpen
      : false;
  }
}
