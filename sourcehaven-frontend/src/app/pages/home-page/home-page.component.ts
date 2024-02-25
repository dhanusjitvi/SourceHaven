import { Component } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { BackgroundComponent } from "../../shared/background/background.component";

@Component({
    selector: 'app-home-page',
    standalone: true,
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.css',
    imports: [HeaderComponent, BackgroundComponent]
})
export class HomePageComponent {

}
