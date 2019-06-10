import { Component, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-auth-button',
  template: `
    <button (click)="onClick()">{{ label }}</button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthButtonComponent {
  label: string;
  isLogging: boolean;
  @Output() clicked: EventEmitter<any> = new EventEmitter();
  onClick() {
    this.clicked.emit(this.isLogging = !this.isLogging);
  }
}
