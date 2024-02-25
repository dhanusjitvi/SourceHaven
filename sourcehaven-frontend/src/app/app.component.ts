import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { BackgroundComponent } from "./shared/background/background.component";
import { LoginPageComponent } from "./pages/login-page/login-page.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, HeaderComponent, BackgroundComponent, LoginPageComponent]
})
export class AppComponent {
  title = 'sourcehaven-frontend';
}
