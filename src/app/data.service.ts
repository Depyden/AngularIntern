import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  items: any[];
  
  constructor(
    private http: HttpClient
  ) { }

  getData() {
    return this.http.get('/assets/install_history.json');
  }

}
