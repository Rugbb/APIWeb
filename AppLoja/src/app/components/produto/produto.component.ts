import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProdutoService } from 'src/app/produto.service';
import { Produto } from 'src/app/Produto';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
  formulario: any;
  tituloFormulario: string = '';
  
  constructor(private produtoService : ProdutoService) { }

  ngOnInit(): void {
    this.tituloFormulario = 'Novo Produto';
    this.formulario = new FormGroup({
      idProduto: new FormControl(null),
      nomeProduto: new FormControl(null),
      descricao: new FormControl(null),
      preco: new FormControl(null),
      classificacao: new FormControl(null),
      desenvolvedor: new FormControl(null),
      plataforma: new FormControl(null),
      estoque: new FormControl(null)
    })
  }
  enviarFormulario(): void {
    const produto : Produto = this.formulario.value;
    this.produtoService.cadastrar(produto).subscribe(result => {
      alert('Produto inserido com sucesso.');
    })
  } 
}

