import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { ToggleModule } from './toggle/toggle.module';
import { OnlineModule } from './online/online.module';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AuthModule, ToggleModule, OnlineModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
