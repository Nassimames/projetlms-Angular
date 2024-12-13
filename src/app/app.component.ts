import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true, // Composant autonome
  imports: [RouterOutlet], // Utilisez RouterOutlet
  template: `
    <div>
      <router-outlet></router-outlet> <!-- Placeholder pour le contenu des routes -->
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lms-frontend';
}
