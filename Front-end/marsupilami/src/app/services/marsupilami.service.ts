import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrlmarsup = 'http://localhost:8080/api/marsupilamis';

@Injectable({
  providedIn: 'root'
})
export class MarsupilamiService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(baseUrlmarsup);
  }
  


  get(id: number) {
    return this.http.get(`${baseUrlmarsup}/${id}`);
  }

  create(data: any) {
    return this.http.post(baseUrlmarsup, data);
  }

  update(id: number, data: any) {
    return this.http.put(`${baseUrlmarsup}/${id}`, data);
  }

  delete(id: number) {
    return this.http.delete(`${baseUrlmarsup}/${id}`);
  }

  deleteAll() {
    return this.http.delete(baseUrlmarsup);
  }

  findByNom(nom: string) {
    return this.http.get(`${baseUrlmarsup}?nom=${nom}`);
  }
}