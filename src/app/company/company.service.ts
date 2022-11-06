import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  constructor(private http: HttpClient) {}

  API = 'http://localhost:8081/api/v1';

  public addCompany(companyData: any) {
    return this.http.post(this.API + '/addCompany', companyData);
  }

  public getCompany() {
    return this.http.get(this.API + '/getAllCompanies');
  }

}
