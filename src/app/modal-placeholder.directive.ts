import {Directive, ViewContainerRef} from "@angular/core";

@Directive({
  standalone: true,
  selector: '[modalPlaceholder]'
})
export class ModalPlaceholderDirective {
  constructor(public viewContainerRef: ViewContainerRef) {
  }
}
