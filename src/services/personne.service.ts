import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Personne} from '../modeles/personne';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {
  private serverAPi = 'http://localhost:3000';
  constructor(private httpClient: HttpClient) { }
  public getRequest() {
    return this.httpClient.get(this.serverAPi + '/personnes');
  }
  public postRequest(personne: Personne) {
    return this.httpClient.post(this.serverAPi + '/personnes/', personne);
  }
  public editRequest(id, personne) {
    return this.httpClient.put(this.serverAPi + '/personnes/' + id , personne);
  }
  public deleteRequest(id) {
    return this.httpClient.delete(this.serverAPi + '/personnes/' + id);
  }
}
