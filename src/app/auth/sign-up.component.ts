import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-auth-sign-up',
  template: `
    <div *ngIf="!isLogging">
      <h1>signup form</h1>
      <form #f="ngForm" (ngSubmit)="invia(f.value)">
        <input type="text" name="username" placeholder="username" [(ngModel)]="username"  />
        <input type="password" name="password" placeholder="password" [ngModel] autocomplete="false" />
        <input name="email" placeholder="email" [(ngModel)]="email"  />
        <button type="submit">Invia</button>
      </form>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignUpComponent {
  private _isLogging;
  username: string;
  password: string;
  email: string;
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
  @Output() sendSignUpData: EventEmitter<any> = new EventEmitter<any>();

  constructor(private cdRef: ChangeDetectorRef) { }

  invia(obj) {
    this.sendSignUpData.emit(obj);
  }

}
