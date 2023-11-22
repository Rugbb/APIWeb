import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CarrinhoService } from 'src/app/carrinho.service';
import { Carrinho } from 'src/app/Carrinho';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  formulario: any;
  tituloFormulario: string = '';
  
  constructor(private carrinhoService : CarrinhoService) { }

  ngOnInit(): void {
    this.tituloFormulario = 'Novo Carrinho';
    this.formulario = new FormGroup({
      idCarrinho: new FormControl(null),
      itensCarrinho: new FormControl(null)
    })
  }
  enviarFormulario(): void {
    const carrinho : Carrinho = this.formulario.value;
    this.carrinhoService.cadastrar(carrinho).subscribe(result => {
      alert('Carrinho criado com sucesso.');
    })
  } 
}
