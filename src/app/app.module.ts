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
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor'; // Importer l'intercepteur
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../app/services/auth.service';  // Assurez-vous que le chemin est correct

// Standalone components
import { LayoutComponent } from './layout/layout.component'; 
import { HomeComponent } from './home/home.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CalendarComponent } from './calendar/calendar.component';

// Routes
import { routes } from './app.routes';

@NgModule({
  declarations: [
    SignupComponent,
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent,
    ResetPasswordCodeComponent,
  ],
  imports: [
    ReactiveFormsModule,  // Ajoute ReactiveFormsModule si nécessaire
    HttpClientModule,
    FormsModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserModule,
    RouterModule.forRoot(routes), // Configure routes
    MatIconModule, // For Material icons
    AppRoutingModule, // Routing module
    LayoutComponent, // Add standalone components to imports
    HomeComponent,
    CourseListComponent,
    CourseDetailsComponent,
  ],
  providers: [
    
    [AuthService],
    
  ],
  bootstrap: [SignupComponent],
})
export class AppModule {}
