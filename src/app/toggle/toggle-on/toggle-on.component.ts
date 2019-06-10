import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle-on',
  template: `
    <ng-content *ngIf="on"></ng-content>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToggleOnComponent implements OnInit {
  private on: boolean;
  constructor(private cdr: ChangeDetectorRef) { }
  get On() {
    return this.on;
  }
  set On(value) {
    if (this.on !== value) {
      this.cdr.markForCheck();
    }
    this.on = value;
  }
  ngOnInit() {
  }

}
