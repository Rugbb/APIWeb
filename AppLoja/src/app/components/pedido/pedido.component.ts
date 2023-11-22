import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PedidoService } from 'src/app/pedido.service';
import { Pedido } from 'src/app/Pedido';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {
  formulario: any;
  tituloFormulario: string = '';
  
  constructor(private pedidoService : PedidoService) { }

  ngOnInit(): void {
    this.tituloFormulario = 'Novo Pedido';
    this.formulario = new FormGroup({
      idPedido: new FormControl(null),
      dataPedido: new FormControl(null),
      cliente: new FormControl(null),
      carrinho: new FormControl(null),
      pagamento: new FormControl(null),
      status: new FormControl(null),
    })
  }
  enviarFormulario(): void {
    const pedido : Pedido = this.formulario.value;
    this.pedidoService.cadastrar(pedido).subscribe(result => {
      alert('pedido inserido com sucesso.');
    })
  } 
}
