import {Directive, ElementRef,HostListener,Input} from '@angular/core';

@Directive({
  selector: '[appBorderCard]'
})
export class BorderCardDirective {
  private initialColor: string = '#f5f5f5';
  private defaultColor: string = '#009688';
  private defaultHeight: number = 100;
  constructor(private el:ElementRef) {
    this.setHeight(this.defaultHeight);
    this.setBorder(this.initialColor);
  }

  @Input('appBorderCard') borderColor:string;
@HostListener('mouseenter') onMouseEnter() {
  this.setBorder( this.borderColor ||'#009688');

}

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder('#f5f5f5');

  }
  setHeight(height: number) {
    this.el.nativeElement.style.height = this.defaultHeight;
  }

  private setBorder(color:string)
  {
    this.el.nativeElement.style.border =`solid 4px ${color}`;
  }


}
