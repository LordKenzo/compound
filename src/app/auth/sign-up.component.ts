import { Component, Input } from "@angular/core";

@Component({
  selector: "app-auth-sign-up",
  template: `
    <h1 *ngIf="!isLogging">signup form</h1>
    <form #f="ngForm" (ngSubmit)="invia(f.value)">
      <input name="username" placeholder="username" [ngModel] />
      <input name="password" placeholder="password" [ngModel] />
      <input name="email" placeholder="email" [ngModel] />

      <button type="submit">Invia</button>
    </form>
  `
})
export class SignUpComponent {
  @Input() isLogging;
}
