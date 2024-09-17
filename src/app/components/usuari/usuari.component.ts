import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-usuari',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './usuari.component.html',
  styleUrls: ['./usuari.component.css']
})
export class UsuariComponent {
  nom!: string; 
  email!: string;
  password!: string;
  repeatpassword!: string;
  idioma = "ca";
  terms!: boolean;

  idiomes: { value: string, label: string }[] = [
    { value: 'ca', label: 'Català' },
    { value: 'es', label: 'Español' },
    { value: 'en', label: 'English' },
    { value: 'fr', label: 'Français' },
    { value: 'it', label: 'Italiano' },
    { value: 'ru', label: 'Russian' },
    { value: 'de', label: 'Deutsch'  },
    { value: 'pt', label: 'Português' },
    { value: 'pl', label: 'Polski' },
    { value: 'sv', label: 'Svenska' },
    { value: 'uk', label: 'Укра��нська' },
    { value: 'hu', label: 'Magyar' }
  ].sort((a, b) => a.label.localeCompare(b.label));

  submit () {
    console.log(this.nom, this.email, this.password, this.repeatpassword, this.idioma, this.terms);
  }
}
