import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiURL = 'https://sheet.best/api/sheets/99240654-d965-4edd-aa2b-3b58bc7e0235';
  httpoptions = {
    headers: new HttpHeaders({
       'Content-Type': 'application/json',
      // 'Token': 'wuefowiqxkqo1564865'
      })
  }

  constructor(private httpClient: HttpClient) { }

  //lista de usuarios
  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.apiURL);
  }

  // salva no banco 
  postUser(user: User): Observable<User> {
    return this.httpClient.post<User>(this.apiURL,user, this.httpoptions);
  }

  //excluir usuarios
  deleteUser(id: number): Observable<User>{
    return this.httpClient.delete<User>(`${this.apiURL}/id/${id}`);
  }

  //Editar usuario
  updateUser(id: string, user: User): Observable<User>{
    return this.httpClient.put<User>(`${this.apiURL}/id/${id}`, user, this.httpoptions);
  }

  //lista dados usuarios
  getUser(id: string): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.apiURL}/id/${id}`)
  }

}
