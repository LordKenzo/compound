import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnlineComponent } from './online/online.component';
import { BtnStateComponent } from './btn-state/btn-state.component';
import { DisplayComponent } from './display/display.component';

@NgModule({
  declarations: [OnlineComponent, BtnStateComponent, DisplayComponent],
  imports: [
    CommonModule
  ],
  exports: [
    OnlineComponent,
    BtnStateComponent,
    DisplayComponent
  ]
})
export class OnlineModule { }
