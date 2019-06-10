import { Component, Input } from "@angular/core";

@Component({
  selector: "app-auth",
  template: `
    <app-auth-manager (toggle)="handleToggle($event)" [isLogging]="isLogging">
      <app-auth-login login></app-auth-login>
      <app-auth-sign-up sign-up></app-auth-sign-up>
      <app-auth-button></app-auth-button>
    </app-auth-manager>
  `
})
export class AuthComponent {
  @Input() isLogging;

  handleToggle(e) {
    this.isLogging = e;
  }
  /*
  private _isLogging;
  
  @Input()
  get isLogging() {
    return this._isLogging;
  }
  set isLogging(value) {
    this._isLogging = value;
    if (this._isLogging) {
      this.label = "Register";
    } else {
      this.label = "Login";
    }
  }
  label = "Register";

  ngOnInit() {}

  handleClick() {
    this.isLogging = !this.isLogging;
  }

  invia(f) {
    console.log("Invio dati");
    console.log(f);
  }*/
}
