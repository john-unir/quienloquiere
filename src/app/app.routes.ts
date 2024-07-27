import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from "./pages/home/home.component";
import { RegisterComponent } from "./pages/register/register.component";
import { LoginComponent } from "./pages/login/login.component";
import { ProductDetailsComponent } from "./components/product-details/product-details.component";
import { CreateComponent } from "./components/create/create.component";
import { MyProductsComponent } from "./components/my-products/my-products.component";
import { ResultsComponent } from "./components/results/results.component";

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'details', component: ProductDetailsComponent },
  { path: 'crear', component: CreateComponent },
  { path: 'my-products', component: MyProductsComponent },
  { path: 'results', component: ResultsComponent },
];
