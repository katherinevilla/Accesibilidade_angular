import { Directive, ElementRef, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Directive({
  selector: '[appKmItem]',
})
export class KeyboardManagedItemDirective {

  @Output() public focused = new EventEmitter<void>();

  constructor(private elementRef: ElementRef<HTMLElement>) {}

  public focus(): void {
    this.elementRef.nativeElement.focus();
   this.focused.emit();
  }
  public isFocused(): boolean {
    return this.elementRef.nativeElement === document.activeElement;
  }
}
