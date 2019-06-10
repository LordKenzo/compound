import { AfterContentInit, ChangeDetectionStrategy, Component, ElementRef, OnInit } from '@angular/core';
import { OnlineComponent } from '../online/online.component';

@Component({
  selector: 'app-btn-state',
  template: `
    <button (click)="setState()"><ng-content></ng-content></button>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BtnStateComponent implements OnInit, AfterContentInit {
  state: string;
  constructor(public online: OnlineComponent,
              private el: ElementRef) {}

  ngOnInit() {
  }

  setState() {
    this.online.setState(this.state);
  }

  ngAfterContentInit(): void {
    this.state = (this.el.nativeElement.childNodes[0] as HTMLElement).innerText;

  }
}
