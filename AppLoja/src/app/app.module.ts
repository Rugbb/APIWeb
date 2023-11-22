import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule} from 'ngx-bootstrap/modal';

import { ClientesService } from './clientes.service';
import { ClientesComponent } from './components/clientes/clientes.component';

import { CarrinhoService } from './carrinho.service';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';

import { ClassificacaoService } from './classificacao.service';
import { ClassificacaoComponent } from './components/classificacao/classificacao.component';

import { DesenvolvedorService } from './desenvolvedor.service';
import { DesenvolvedorComponent } from './components/desenvolvedor/desenvolvedor.component';

import { PagamentoService } from './pagamento.service';
import { PagamentoComponent } from './components/pagamento/pagamento.component';

import { PedidoService } from './pedido.service';
import { PedidoComponent } from './components/pedido/pedido.component';

import { PlataformaService } from './plataforma.service';
import { PlataformaComponent } from './components/plataforma/plataforma.component';

import { ProdutoService } from './produto.service';
import { ProdutoComponent } from './components/produto/produto.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    CarrinhoComponent,
    ClassificacaoComponent,
    DesenvolvedorComponent,
    PagamentoComponent,
    PedidoComponent,
    PlataformaComponent,
    ProdutoComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    CommonModule,
    HttpClientModule, 
    ReactiveFormsModule,
    ModalModule.forRoot(), 
  ],
  providers: [HttpClientModule, ClientesService, CarrinhoService, ClassificacaoService, DesenvolvedorService, PagamentoService, PedidoService, PlataformaService, ProdutoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
