import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { GridCardsComponent } from './components/grid-cards/grid-cards.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from "./pages/home/home.component";
import { LoginComponent } from './pages/login/login.component';
import {TopheaderComponent} from "./components/header/topheader/topheader.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    HeaderComponent,
    MenuComponent,
    GridCardsComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    TopheaderComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'QuiénLoQuiere';
}
