import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-catalogues',
  imports: [RouterLink],
  templateUrl: './catalogues.component.html',
  styleUrl: './catalogues.component.scss'
})
export class CataloguesComponent {
   constructor(private router: Router) {}

  allerVersContact() {
    this.router.navigate(['/ordinateurs-portables']);
    this.router.navigate(['/ordinateurs-bureaux']);
    this.router.navigate(['/imprimante']); 
    this.router.navigate(['/accessoire']);
    this.router.navigate(['/equip-reseau']);
    this.router.navigate(['/serveur']);
    this.router.navigate(['/telephone']);
  }
}


