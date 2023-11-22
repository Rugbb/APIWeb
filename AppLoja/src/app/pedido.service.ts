import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pedido } from './Pedido';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  apiUrl = 'http://localhost:5000/Pedido';
  constructor(private http: HttpClient) { }
  listar(): Observable<Pedido[]> {
    const url = `${this.apiUrl}/listar`;
    return this.http.get<Pedido[]>(url);
  }
  buscar(idPedido: string): Observable<Pedido> {
    const url = `${this.apiUrl}/buscar/${idPedido}`;
    return this.http.get<Pedido>(url);
  }
  cadastrar(pedido: Pedido): Observable<any> {
    const url = `${this.apiUrl}/cadastrar`;
    return this.http.post<Pedido>(url, pedido, httpOptions);
  }
  atualizar(pedido: Pedido): Observable<any> {
    const url = `${this.apiUrl}/atualizar`;
    return this.http.put<Pedido>(url, pedido, httpOptions);
  }
  excluir(idPedido: string): Observable<any> {
    const url = `${this.apiUrl}/buscar/${idPedido}`;
    return this.http.delete<string>(url, httpOptions);
  }
}
