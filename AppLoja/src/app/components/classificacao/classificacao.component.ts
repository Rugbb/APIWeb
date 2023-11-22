import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ClassificacaoService } from 'src/app/classificacao.service';
import { Classificacao } from 'src/app/Classificacao';

@Component({
  selector: 'app-classificacao',
  templateUrl: './classificacao.component.html',
  styleUrls: ['./classificacao.component.css']
})
export class ClassificacaoComponent implements OnInit {
  formulario: any;
  tituloFormulario: string = '';
  
  constructor(private classificacaoService : ClassificacaoService) { }

  ngOnInit(): void {
    this.tituloFormulario = 'Nova Classificacao';
    this.formulario = new FormGroup({
      idClassificacao: new FormControl(null),
      genero: new FormControl(null),
      analise: new FormControl(null)
    })
  }
  enviarFormulario(): void {
    const classificacao : Classificacao = this.formulario.value;
    this.classificacaoService.cadastrar(classificacao).subscribe(result => {
      alert('Classificacao criada com sucesso.');
    })
  } 
}
