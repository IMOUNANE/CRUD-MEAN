import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root'
})
export class MarsupilamiService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(baseUrl);
  }

  get(id: number) {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any) {
    return this.http.post(baseUrl, data);
  }

  update(id: number, data: any) {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: number) {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll() {
    return this.http.delete(baseUrl);
  }

  findByNom(nom: string) {
    return this.http.get(`${baseUrl}?nom=${nom}`);
  }
}