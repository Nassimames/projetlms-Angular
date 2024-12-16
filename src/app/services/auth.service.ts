import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:4000/register'; // L'URL de votre API backend

  constructor(private http: HttpClient) {}

  // Fonction pour s'inscrire
  register(firstname: string, lastname: string, email: string, password: string, role: string): Observable<any> {
    const user = { firstname, lastname, email, password, role };
    return this.http.post(this.apiUrl, user);
  }
}
