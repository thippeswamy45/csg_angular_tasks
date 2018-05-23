import { Directive,ElementRef,HostListener,Input } from '@angular/core';

@Directive({
  selector: '[appBackgroundColor]'
})
export class BackgroundColorDirective {

  constructor(private elementRef:ElementRef) { 
    this.elementRef.nativeElement.style.backgroundColor="red";
  }
  @Input("appBackgroundColor") backGroundColor:string;

  @HostListener("mouseenter") onmouseenter(){
    this.backgroundColor(this.backGroundColor);
  }
  @HostListener("mouseleave") onmouseleave(){
    this.backgroundColor("red");
  }
  @HostListener("mouseup") onmouseup(){
    this.backgroundColor("yellow");
  }

  backgroundColor(color:string){
   this.elementRef.nativeElement.style.backgroundColor=color;
  }
}
