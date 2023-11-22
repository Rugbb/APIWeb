import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DesenvolvedorService } from 'src/app/desenvolvedor.service';
import { Desenvolvedor } from 'src/app/Desenvolvedor';

@Component({
  selector: 'app-desenvolvedor',
  templateUrl: './desenvolvedor.component.html',
  styleUrls: ['./desenvolvedor.component.css']
})
export class DesenvolvedorComponent implements OnInit {
  formulario: any;
  tituloFormulario: string = '';
  
  constructor(private desenvolvedorService : DesenvolvedorService) { }

  ngOnInit(): void {
    this.tituloFormulario = 'Novo Desenvolvedor';
    this.formulario = new FormGroup({
      idDesenvolvedor: new FormControl(null),
      nomeDesenvolvedor: new FormControl(null),
      historico: new FormControl(null),
      jogosProduzidos: new FormControl(null)
    })
  }
  enviarFormulario(): void {
    const desenvolvedor : Desenvolvedor = this.formulario.value;
    this.desenvolvedorService.cadastrar(desenvolvedor).subscribe(result => {
      alert('Desenvolvedor inserido com sucesso.');
    })
  } 
}
