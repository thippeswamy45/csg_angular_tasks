import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-outputchild',
  templateUrl: './outputchild.component.html',
  styleUrls: ['./outputchild.component.css']
})
export class OutputchildComponent implements OnInit {

  message: string = "Message Here!"
  constructor() { }

  ngOnInit() {
  }

  @Output() messageEvent = new EventEmitter<string>();
  @Output() textValue = new EventEmitter<{name:string}>();

  sendMessage(accountName:string) {
    //this.messageEvent.emit(this.message);
    this.textValue.emit({
      name:accountName
    })
  }

}
