import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DnaService {

  constructor(private http: HttpClient) {
  }

  getDNA() {
    return this.http.get<any>(`assets/mock-data.json`);
  }

}
