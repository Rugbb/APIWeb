import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Plataforma } from './Plataforma';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class PlataformaService {
  apiUrl = 'http://localhost:5000/Plataforma';
  constructor(private http: HttpClient) { }
  listar(): Observable<Plataforma[]> {
    const url = `${this.apiUrl}/listar`;
    return this.http.get<Plataforma[]>(url);
  }
  buscar(idPlataforma: string): Observable<Plataforma> {
    const url = `${this.apiUrl}/buscar/${idPlataforma}`;
    return this.http.get<Plataforma>(url);
  }
  cadastrar(plataforma: Plataforma): Observable<any> {
    const url = `${this.apiUrl}/cadastrar`;
    return this.http.post<Plataforma>(url, plataforma, httpOptions);
  }
  atualizar(plataforma: Plataforma): Observable<any> {
    const url = `${this.apiUrl}/atualizar`;
    return this.http.put<Plataforma>(url, plataforma, httpOptions);
  }
  excluir(idPlataforma: string): Observable<any> {
    const url = `${this.apiUrl}/buscar/${idPlataforma}`;
    return this.http.delete<string>(url, httpOptions);
  }
}
