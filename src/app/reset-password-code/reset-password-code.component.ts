import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reset-password-code',
  templateUrl: './reset-password-code.component.html',
  styleUrls: ['./reset-password-code.component.css']
})
export class ResetPasswordCodeComponent implements OnInit {
  code: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const codeParam = this.route.snapshot.paramMap.get('code');
    if (codeParam) {
      this.code = codeParam;  // Si le code existe, l'assigner
    } else {
      this.code = '';  // Si le code est null, utiliser une chaîne vide
    }
  }
}
