import { AfterContentInit, ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-online',
  template: `
    <ng-content></ng-content>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnlineComponent implements OnInit, AfterContentInit {
  @Input() state = 'Thinking...';
  @Output() stateChange: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  setState(state) {
    this.state = state;
    console.log('emitto');
    this.stateChange.emit(state);
  }

  ngAfterContentInit(): void {
    this.stateChange.emit(this.state);
  }

}
