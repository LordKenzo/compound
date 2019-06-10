import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLogging = true;
  on = true;
  state = 'available';

  handleLogin(e) {
    console.log('LOGIN', e);
  }

  handleSignUp(e) {
    console.log('SIGNUP', e);
  }

  handleToggle() {
    this.on = !this.on;
  }

  handleStateChange(state: string) {
    this.state = state;
  }
}
