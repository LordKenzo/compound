import { AfterContentInit, ChangeDetectionStrategy, Component, ContentChild, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToggleBtnComponent } from '../toggle-btn/toggle-btn.component';
import { ToggleOnComponent } from '../toggle-on/toggle-on.component';
import { ToggleOffComponent } from '../toggle-off/toggle-off.component';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToggleComponent implements OnInit, AfterContentInit {
  @Input() on: boolean;
  @Output() toggle: EventEmitter<any> = new EventEmitter<any>();
  @ContentChild(ToggleBtnComponent, { static: false}) btn !: ToggleBtnComponent;
  @ContentChild(ToggleOnComponent, { static: false }) toggleOn !: ToggleOnComponent;
  @ContentChild(ToggleOffComponent, { static: false }) toggleOff !: ToggleOnComponent;
  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    if (this.btn) {
      this.btn.toggle.subscribe((data) => {
        this.toggle.emit();
        this.on = !this.on;
        this.update();
      });
    }
    this.update();
  }

  update() {
    this.toggleOn.On = this.on;
    this.toggleOff.On = this.on;
  }



}
