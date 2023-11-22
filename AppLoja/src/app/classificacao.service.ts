import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Classificacao } from './Classificacao';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ClassificacaoService {
  apiUrl = 'http://localhost:5000/Classificacao';
  constructor(private http: HttpClient) { }
  listar(): Observable<Classificacao[]> {
    const url = `${this.apiUrl}/listar`;
    return this.http.get<Classificacao[]>(url);
  }
  buscar(idClassificacao: string): Observable<Classificacao> {
    const url = `${this.apiUrl}/buscar/${idClassificacao}`;
    return this.http.get<Classificacao>(url);
  }
  cadastrar(classificacao: Classificacao): Observable<any> {
    const url = `${this.apiUrl}/cadastrar`;
    return this.http.post<Classificacao>(url, classificacao, httpOptions);
  }
  atualizar(classificacao: Classificacao): Observable<any> {
    const url = `${this.apiUrl}/atualizar`;
    return this.http.put<Classificacao>(url, classificacao, httpOptions);
  }
  excluir(idClassificacao: string): Observable<any> {
    const url = `${this.apiUrl}/buscar/${idClassificacao}`;
    return this.http.delete<string>(url, httpOptions);
  }
}
