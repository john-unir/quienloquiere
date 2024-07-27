import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import {BuscarComponent} from "../buscar/buscar.component";

@Component({
  selector: 'app-create',
  standalone: true,
    imports: [
        FormsModule,
        RouterLink,
        CommonModule,
        HeaderComponent,
        BuscarComponent
    ],
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  productData: {
    title: string;
    field_description: string;
    field_ciudad: string;
    field_category: string;
    field_type: string;
    field_estado: string;
  } = {
    title: '',
    field_description: '',
    field_ciudad: '',
    field_category: '',
    field_type: '',
    field_estado: ''
  };

  hogarCategories = [
    'Sofá', 'Mesa', 'Silla', 'Estantería', 'Cama', 'Refrigerador', 'Lavadora', 'Horno',
    'Microondas', 'Televisor', 'Cuadro', 'Espejo', 'Alfombra', 'Cortina', 'Utensilio de Cocina',
    'Plato', 'Olla', 'Ropa para Adulto', 'Ropa para Niño', 'Zapato', 'Bolso', 'Juguete Educativo',
    'Muñeco', 'Bicicleta'
  ];

  oficinaCategories = [
    'Escritorio', 'Silla de Oficina', 'Archivero', 'Estante', 'Computadora', 'Impresora', 'Teléfono',
    'Proyector', 'Cuaderno', 'Lápiz', 'Carpeta', 'Papel', 'Organizador de Escritorio', 'Lámpara de escritorio',
    'Pizarra', 'Teclado', 'Monitor', 'Router', 'Cable', 'Cuadro', 'Reloj de Pared', 'Alfombra'
  ];
  ciudadesCapitalesColombia = [
    "Bogotá",
    "Medellín",
    "Barranquilla",
    "Cartagena",
    "Tunja",
    "Manizales",
    "Florencia",
    "Yopal",
    "Popayán",
    "Valledupar",
    "Quibdó",
    "Montería",
    "Inírida",
    "San José del Guaviare",
    "Neiva",
    "Riohacha",
    "Santa Marta",
    "Villavicencio",
    "Pasto",
    "Cúcuta",
    "Mocoa",
    "Armenia",
    "Pereira",
    "Bucaramanga",
    "Sincelejo",
    "Ibagué",
    "Cali",
    "Mitú",
    "Puerto Carreño",
    "Leticia",
    "San Andrés"
  ];

  filteredCategories: string[] = [];

  constructor(private quienloquiereApiService: ApiService, private router: Router) {
    this.filteredCategories = this.hogarCategories; // Default to 'hogar' categories
  }

  onTypeChange() {
    if (this.productData.field_type === 'hogar') {
      this.filteredCategories = this.hogarCategories;
    } else if (this.productData.field_type === 'oficina') {
      this.filteredCategories = this.oficinaCategories;
    }
  }

  cleanObject(obj: any) {
    const newObj: any = Array.isArray(obj) ? [] : {};
    Object.keys(obj).forEach(key => {
      if (obj[key] && typeof obj[key] === 'object') {
        const value = this.cleanObject(obj[key]);
        if (Object.keys(value).length !== 0) {
          newObj[key] = value;
        }
      } else if (obj[key] !== '') {
        newObj[key] = obj[key];
      }
    });
    return newObj;
  }

  newProduct() {
    const producto = {
      data: {
        type: 'node--productos',
        attributes: this.productData
      }
    };
    const cleanedData = this.cleanObject(producto);
    console.log(cleanedData);
    this.quienloquiereApiService.createEventFunction(cleanedData)
      .subscribe(
        (data: any) => {
          this.router.navigate(['/home']);
        },
        (error) => {
          console.error(error);
        }
      );
  }
}
