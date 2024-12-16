import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Service Router pour la navigation
import { MatIconModule } from '@angular/material/icon';  // Importer MatIconModule
import { RouterModule } from '@angular/router';  // Importer RouterModule
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [MatIconModule,RouterModule,CommonModule], // Aucun RouterModule ici
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent {
  isMenuOpen = false;

  constructor(private router: Router) {} // Injection correcte du service Router

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  goToUserDetails() {
    this.router.navigate(['/user-details']); // Redirection vers la page user-details
  }

   // Méthode pour loguer la navigation
   logNavigation() {
    console.log('Navigating to badges'); // Utilisation de console.log directement
  }
}
