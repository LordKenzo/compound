import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { OnlineComponent } from '../online/online.component';

@Component({
  selector: 'app-display',
  template: `
    <p>
      {{ state }}
    </p>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DisplayComponent implements OnInit {
  state: string;
  constructor(private online: OnlineComponent, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.online.onStateChange.subscribe(state => {
      this.state = state;
      this.cdr.detectChanges();
      this.cdr.detach();
    });
  }

}
