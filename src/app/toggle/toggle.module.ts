import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleComponent } from './toggle/toggle.component';
import { ToggleOffComponent } from './toggle-off/toggle-off.component';
import { ToggleOnComponent } from './toggle-on/toggle-on.component';
import { ToggleBtnComponent } from './toggle-btn/toggle-btn.component';

@NgModule({
  declarations: [ToggleComponent, ToggleOffComponent, ToggleOnComponent, ToggleBtnComponent],
  imports: [
    CommonModule
  ],
  exports: [ToggleComponent, ToggleBtnComponent, ToggleOnComponent, ToggleOffComponent]
})
export class ToggleModule { }
