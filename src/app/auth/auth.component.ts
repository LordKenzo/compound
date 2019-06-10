import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-auth',
  template: `
    <app-auth-manager (toggle)="handleToggle($event)"
                      (loginFormData)="handleLoginData($event)"
                      (signupFormData)="handleSignUpData($event)"
                      [isLogging]="isLogging">
      <app-auth-login form></app-auth-login>
      <app-auth-sign-up form></app-auth-sign-up>
      <app-auth-button switchBtn></app-auth-button>
    </app-auth-manager>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthComponent {
  @Input() isLogging;
  @Output() sendLogin: EventEmitter<any> = new EventEmitter();
  @Output() sendSignUp: EventEmitter<any> = new EventEmitter();

  handleToggle(isLogging) {
    this.isLogging = isLogging;
  }

  handleLoginData(e) {
    this.sendLogin.emit(e);
  }

  handleSignUpData(e) {
    this.sendSignUp.emit(e);
  }
}
