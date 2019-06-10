import { Component, Input } from "@angular/core";

@Component({
  selector: "app-auth-login",
  template: `
    <h1 *ngIf="isLogging">login form</h1>
    <form #f="ngForm" (ngSubmit)="invia(f.value)">
      <input name="username" placeholder="username" [ngModel] />
      <input name="password" placeholder="password" [ngModel] />
      <button type="submit">Invia</button>
    </form>
  `
})
export class LoginComponent {
  @Input() isLogging;
}
