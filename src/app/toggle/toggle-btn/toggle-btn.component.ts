import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toggle-btn',
  template: `
    <button (click)="handleToggle()">Toggle</button>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToggleBtnComponent implements OnInit {
  @Output() toggle: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }
  handleToggle() {
    this.toggle.emit();
  }
  ngOnInit() {
  }

}
