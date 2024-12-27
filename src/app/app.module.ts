import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';  // Pour les icônes Material
import { MatDatepickerModule } from '@angular/material/datepicker';  // Pour le datepicker
import { MatNativeDateModule } from '@angular/material/core';  // Pour le support des dates natives
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  // Pour les formulaires
import { AppRoutingModule } from './app-routing.module';  // Pour la gestion des routes

// Composants
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordCodeComponent } from './reset-password-code/reset-password-code.component';
import { LayoutComponent } from './layout/layout.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { HomeComponent } from './home/home.component';
import { CalendarComponent } from './calendar/calendar.component';
import { BadgesComponent } from './badges/badges.component';

// Services
import { UtilisateurService } from './services/utilisateur.service';  // Exemple de service

@NgModule({
  declarations: [
    LoginComponent,
    ForgotPasswordComponent,
    ResetPasswordCodeComponent,

  ],
  imports: [
    ReactiveFormsModule,  // Formulaire réactif
    FormsModule,          // Formulaire classique
    MatDatepickerModule,  // Datepicker Material
    MatNativeDateModule,  // Native Date support
    BrowserModule,        // Module de base pour Angular
    AppRoutingModule,     // Module de routage pour les différentes pages
    MatIconModule,        // Module pour les icônes Material
  ],
  providers: [UtilisateurService],  // Ajoutez vos services ici si nécessaire
  bootstrap: [LoginComponent],  // Composant démarré au lancement
})
export class AppModule {}
