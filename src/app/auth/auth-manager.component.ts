import {
  Component,
  ContentChild,
  Input,
  EventEmitter,
  Output,
  SimpleChanges,
  AfterContentInit,
  OnChanges
} from "@angular/core";
import { LoginComponent } from "./login.component";
import { SignUpComponent } from "./sign-up.component";
import { AuthButtonComponent } from "./auth-button.component";

@Component({
  selector: "app-auth-manager",
  template: `
    <ng-content select="[login]"></ng-content>
    <ng-content select="[sign-up]"></ng-content>
    <ng-content></ng-content>
  `
})
export class AuthManagerComponent implements AfterContentInit, OnChanges {
  @Input() isLogging: boolean;
  @Output() toggle: EventEmitter<boolean> = new EventEmitter();
  @Output() formData: EventEmitter<any> = new EventEmitter();

  @ContentChild(LoginComponent) login: LoginComponent;
  @ContentChild(SignUpComponent) signup: SignUpComponent;
  @ContentChild(AuthButtonComponent) button: AuthButtonComponent;

  ngAfterContentInit() {
    this.button.clicked.subscribe(data => {
      this.toggle.emit(data);
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    const { isLogging } = changes;
    console.log("changes", isLogging.currentValue);
    if (isLogging) {
      this.button.on = isLogging;
      this.button.label = isLogging ? 'Register' : 'Login';
    }
  }
}
