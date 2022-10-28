import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Jogo } from '../models/jogo.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class JogoService {
  private baseUrl: string = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  public buscarTodos(): Observable<Jogo[]> {
    return this.http.get<Jogo[]>(`${this.baseUrl}/jogos/`)
  }

  public buscar(id: number): Observable<Jogo> {
    return this.http.get<Jogo>(`${this.baseUrl}/jogos/${id}/`)
  }

  public cadastrar(novoJogo: Jogo): Observable<Object> {
    console.log(novoJogo)
    const jogoJSON = JSON.stringify(novoJogo)
    return this.http.post(`${this.baseUrl}/jogos/`, jogoJSON, httpOptions)
  }

  // editar

  public deletar(id: number): Observable<Object> {
    console.log(id)
    return this.http.delete(`${this.baseUrl}/jogos/${id}`)
  }

}
