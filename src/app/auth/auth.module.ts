import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { AuthComponent } from "./auth.component";
import { LoginComponent } from "./login.component";
import { SignUpComponent } from "./sign-up.component";
import { AuthManagerComponent } from "./auth-manager.component";
import { AuthButtonComponent } from "./auth-button.component";

@NgModule({
  declarations: [
    AuthComponent,
    AuthManagerComponent,
    AuthButtonComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [CommonModule, FormsModule],
  providers: [],
  exports: [AuthComponent]
})
export class AuthModule {}
