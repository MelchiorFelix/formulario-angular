import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


class Cliente{
  nome: string;
  email: string;
  profissao = '';
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cliente = new Cliente();

  profissoes = [
    'Programador',
    'Advogado',
    'Outro'
  ];
  salvar(form: NgForm) {
    console.log(form);

    form.reset({profissao: ''});
  }
}
