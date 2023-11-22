import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PagamentoService } from 'src/app/pagamento.service';
import { Pagamento } from 'src/app/Pagamento';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css']
})
export class PagamentoComponent implements OnInit {
  formulario: any;
  tituloFormulario: string = '';
  
  constructor(private pagamentoService : PagamentoService) { }

  ngOnInit(): void {
    this.tituloFormulario = 'Novo Pagamento';
    this.formulario = new FormGroup({
      idPagamento: new FormControl(null),
      formaPagamento: new FormControl(null),
      total: new FormControl(null),
      endereco: new FormControl(null)
    })
  }
  enviarFormulario(): void {
    const pagamento : Pagamento = this.formulario.value;
    this.pagamentoService.cadastrar(pagamento).subscribe(result => {
      alert('Pagamento inserido com sucesso.');
    })
  } 
}
