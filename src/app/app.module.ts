import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon'; // Import MatIconModule
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordCodeComponent } from './reset-password-code/reset-password-code.component';
import { AppRoutingModule } from './app-routing.module'; // Import routing module
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';  // Importer FormsModule
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../app/services/auth.service';  // Assurez-vous que le chemin est correct

// Standalone components
import { LayoutComponent } from './layout/layout.component'; 
import { CourseListComponent } from './course-list/course-list.component'; // Importez CourseListComponent ici
import { CourseDetailsComponent } from './course-details/course-details.component';  // Importez CourseDetailsComponent ici
import { HomeComponent } from './home/home.component';  // Importez HomeComponent ici
import { CalendarComponent } from './calendar/calendar.component';
import { BadgesComponent } from './badges/badges.component'; // Importez BadgesComponent ici
// Routes
import { routes } from './app.routes';

@NgModule({
  declarations: [
    SignupComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ResetPasswordCodeComponent,
    // N'incluez pas CourseListComponent, HomeComponent, BadgesComponent ici
  ],
  imports: [
    ReactiveFormsModule,  // Ajoute ReactiveFormsModule si nécessaire
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserModule,
    RouterModule.forRoot(routes), // Configure routes
    MatIconModule, // For Material icons
    AppRoutingModule, // Routing module
    LayoutComponent, // Add standalone components to imports
    CourseListComponent,  // Import CourseListComponent ici dans les imports
    HomeComponent,  // Import HomeComponent ici dans les imports
    CourseDetailsComponent, // Import CourseDetailsComponent ici dans les imports
    BadgesComponent,  // Import BadgesComponent ici dans les imports
  ],
  providers: [
    AuthService,  // Fournisseur de services
  ],
  bootstrap: [SignupComponent],  // Le composant principal au démarrage
})
export class AppModule {}
