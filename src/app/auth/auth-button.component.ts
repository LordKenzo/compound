import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-auth-button",
  template: `
    <button (click)="onClick()">{{ label }}</button>
  `
})
export class AuthButtonComponent {
  label;
  on: boolean;
  @Output() clicked: EventEmitter<any> = new EventEmitter();
  onClick() {
    console.log("on 1", this.on);
    this.on = !this.on;
    console.log("on 2", this.on);
    this.clicked.emit(this.on);
  }
}
