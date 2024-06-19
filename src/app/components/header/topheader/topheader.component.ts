import { Component, OnInit, AfterViewInit } from '@angular/core';
import { RouterLink } from "@angular/router";
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-topheader',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './topheader.component.html',
  styleUrls: ['./topheader.component.css'] // Corregir 'styleUrl' a 'styleUrls'
})
export class TopheaderComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.animateLogo();
  }

  animateLogo() {
    const logo = document.querySelector('#logo') as HTMLElement;
    const texto = document.querySelector('#texto-top') as HTMLElement;

    anime({
      targets: logo,
      zise: [-300, 0],
      opacity: [0, 1],
      duration: 2000,
      easing: 'easeOutElastic(1, .8)' // Efecto de rebote
    });

    anime({
      targets: texto,
      opacity: [0.8, 1],
      translateX: [100, 10], // Añadimos un pequeño movimiento vertical
      delay: 500,
      duration: 2000,
      easing: 'easeOutElastic(1, .8)' // Efecto de rebote

    });
  }
}
