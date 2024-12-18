import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';  // Assurez-vous que le chemin est correct
import { HttpResponse } from '@angular/common/http';  // Importer HttpResponse
import { FormsModule } from '@angular/forms'; // Assure-toi d'importer FormsModule

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  firstname: string = '';
  lastname: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  role: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  onSubmit(): void {
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    
  }}
