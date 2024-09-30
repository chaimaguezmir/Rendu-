import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]', // Le nom de la directive à utiliser dans les templates
})
export class HighlightDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  // Ajouter la classe CSS `highlight` quand la souris entre dans l'élément
  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.addClass(this.el.nativeElement, 'highlight');
  }

  // Retirer la classe CSS `highlight` quand la souris sort de l'élément
  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeClass(this.el.nativeElement, 'highlight');
  }
}
