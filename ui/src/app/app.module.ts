import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { TodoComponent } from "./todo/todo.component";
import { CallbackComponent } from "./callback/callback.component";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { TokenInterceptor } from "./token.interceptor";
import { FormsModule } from "@angular/forms";
import { AuthGuardService } from "./auth-guard.service";
import { AuthService } from "./auth.service";
import { TodoService } from "./todo.service";

@NgModule({
  declarations: [AppComponent, HomeComponent, TodoComponent, CallbackComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [
    AuthGuardService,
    AuthService,
    TodoService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
