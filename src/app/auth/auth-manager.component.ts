import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  SimpleChanges
} from '@angular/core';
import { LoginComponent } from './login.component';
import { SignUpComponent } from './sign-up.component';
import { AuthButtonComponent } from './auth-button.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-auth-manager',
  template: `
    <ng-content select="[switchBtn]"></ng-content>
    <ng-content select="[form]"></ng-content>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthManagerComponent implements AfterContentInit, OnChanges, OnDestroy {
  @Input() isLogging: boolean;
  @Output() toggle: EventEmitter<boolean> = new EventEmitter();
  @Output() loginFormData: EventEmitter<any> = new EventEmitter();
  @Output() signupFormData: EventEmitter<any> = new EventEmitter();

  @ContentChild(LoginComponent, {static: false}) login!: LoginComponent;
  @ContentChild(SignUpComponent, {static: false}) signup!: SignUpComponent;
  @ContentChild(AuthButtonComponent, {static: false}) button!: AuthButtonComponent;

  clickedSub: Subscription;
  loginSub: Subscription;
  signUpSub: Subscription;

  ngAfterContentInit() {
    this.clickedSub = this.button.clicked.subscribe(data => {
      this.toggle.emit(data);
      // this.update();
    });
    this.loginSub = this.login.sendLoginData.subscribe((data) => {
      this.loginFormData.emit(data);
      // this.update();
    });
    this.signUpSub = this.signup.sendSignUpData.subscribe((data) => {
      this.signupFormData.emit(data);
      // this.update();
    });
    this.update();
  }

  ngOnChanges(changes: SimpleChanges) {
    const { isLogging } = changes;
    if (isLogging.currentValue !== isLogging.previousValue && !isLogging.firstChange) {
      this.update();
    }

  }

  ngOnDestroy() {
    this.loginSub.unsubscribe();
    this.signUpSub.unsubscribe();
    this.clickedSub.unsubscribe();
  }

  private update() {
    if (this.button) {
      this.button.isLogging = this.isLogging;
      this.button.label = this.isLogging ? 'Register' : 'Login';
    }
    if (this.login) {
      this.login.isLogging = this.isLogging;
    }
    if (this.signup) {
      this.signup.isLogging = this.isLogging;
    }
  }
}
