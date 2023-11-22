import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carrinho } from './Carrinho';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  apiUrl = 'http://localhost:5000/Carrinho';
  constructor(private http: HttpClient) { }
  listar(): Observable<Carrinho[]> {
    const url = `${this.apiUrl}/listar`;
    return this.http.get<Carrinho[]>(url);
  }
  buscar(idCarrinho: string): Observable<Carrinho> {
    const url = `${this.apiUrl}/buscar/${idCarrinho}`;
    return this.http.get<Carrinho>(url);
  }
  cadastrar(carrinho: Carrinho): Observable<any> {
    const url = `${this.apiUrl}/cadastrar`;
    return this.http.post<Carrinho>(url, carrinho, httpOptions);
  }
  atualizar(carrinho: Carrinho): Observable<any> {
    const url = `${this.apiUrl}/atualizar`;
    return this.http.put<Carrinho>(url, carrinho, httpOptions);
  }
  excluir(idCarrinho: string): Observable<any> {
    const url = `${this.apiUrl}/buscar/${idCarrinho}`;
    return this.http.delete<string>(url, httpOptions);
  }
}

