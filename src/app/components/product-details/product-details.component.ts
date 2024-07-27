import {Component, OnInit} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HeaderComponent} from "../header/header.component";
import {NgForOf} from "@angular/common";
import {BuscarComponent} from "../buscar/buscar.component";

@Component({
  selector: 'app-product-details',
  standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule,
        HeaderComponent,
        NgForOf,
        BuscarComponent
    ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  product: any;
  productDataTemp: any;
  transformCategory(category: any): string {
    if (typeof category === 'string') {
      return category.toLowerCase().replace(/\s+/g, '_');
    }
    return '';
  }

  ngOnInit(): void {
    this.product=localStorage.getItem('producto');
    this.productDataTemp=[JSON.parse(this.product)][0];
    console.log(this.productDataTemp);
    console.log(this.product);
  }
}
