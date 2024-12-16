import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon'; // Import MatIconModule
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module'; // Import routing module

// Components
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordCodeComponent } from './reset-password-code/reset-password-code.component';
import { LayoutComponent } from './layout/layout.component'; 
import { CourseListComponent } from './course-list/course-list.component'; 
import { CourseDetailsComponent } from './course-details/course-details.component';  
import { HomeComponent } from './home/home.component'; 
import { CalendarComponent } from './calendar/calendar.component';
import { BadgesComponent } from './badges/badges.component';

// Services
import { AuthService } from './services/auth.service';  // Assurez-vous que le chemin est correct

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent,
    ResetPasswordCodeComponent,
    // Déclarez ici les composants de page
  ],
  imports: [
    ReactiveFormsModule,  // Ajoute ReactiveFormsModule si nécessaire
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserModule,
    AppRoutingModule,  // Import du module de routage
    MatIconModule,  // Pour les icônes Material
  ],
  providers: [
    AuthService,  // Fournisseur de services
  ],
  bootstrap: [SignupComponent],  // Le composant principal au démarrage
})
export class AppModule {}
