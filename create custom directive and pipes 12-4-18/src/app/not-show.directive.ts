import { Directive,Input,TemplateRef,ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appNotShow]'
})
export class NotShowDirective {

  constructor(private templateReference:TemplateRef<any>,private viewRef:ViewContainerRef) { }
  elementPresent=false;
  @Input() set appNotShow(conditionflag:boolean){
    if(!conditionflag && !this.elementPresent){
      this.viewRef.createEmbeddedView(this.templateReference);
      this.elementPresent=true;
    }
    else if(conditionflag && this.elementPresent){
      this.viewRef.clear();
      this.elementPresent=false;
    }
  }
}
