import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ClassificacaoComponent } from './components/classificacao/classificacao.component';
import { DesenvolvedorComponent } from './components/desenvolvedor/desenvolvedor.component';
import { PagamentoComponent } from './components/pagamento/pagamento.component';
import { PedidoComponent } from './components/pedido/pedido.component';
import { PlataformaComponent } from './components/plataforma/plataforma.component';
import { ProdutoComponent } from './components/produto/produto.component';

const routes: Routes = [
  { path: 'clientes', component: ClientesComponent },
  { path: 'carrinho', component: CarrinhoComponent },
  { path: 'classificacao', component: ClassificacaoComponent },
  { path: 'desenvolvedor', component: DesenvolvedorComponent },
  { path: 'pagamento', component: PagamentoComponent },
  { path: 'pedido', component: PedidoComponent },
  { path: 'carrinho', component: CarrinhoComponent },
  { path: 'plataforma', component: PlataformaComponent },
  { path: 'produto', component: ProdutoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

