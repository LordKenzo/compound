import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-auth-login',
  template: `
    <div *ngIf="_isLogging">
      <h1>login form</h1>
      <form #f="ngForm" (ngSubmit)="invia(f.value)">
        <input type="text" name="username" placeholder="username" [(ngModel)]="username" />
        <input type="password" name="password" placeholder="password" [ngModel] autocomplete="false"/>
        <button type="submit">Invia</button>
      </form>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
  private _isLogging;
  @Input()
  get isLogging() {
    return this._isLogging;
  }
  set isLogging(value) {
    if (this._isLogging !== value) {
      this.cdRef.markForCheck();
    }
    this._isLogging = value;
  }
  @Output() sendLoginData: EventEmitter<any> = new EventEmitter<any>();
  username: string;
  password: string;
  constructor(private cdRef: ChangeDetectorRef) {
  }
  invia(obj) {
    this.sendLoginData.emit(obj);
  }

}
