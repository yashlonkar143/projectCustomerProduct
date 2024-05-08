import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustoproService {

  //for service it is necessary to import httpclient module in app.module.ts
  baseUrl='http://localhost:8083';

  constructor(private http:HttpClient) { }

  getOneCustomer(id:number): Observable<any>
  {
    console.log("Inside service get one customer")
    return this.http.get(`${this.baseUrl}/c/getCustomer/${id}`);
  }

  createProduct(product: object): Observable<object>{

    return this.http.post(`${this.baseUrl}/c/addProduct`,product);

  }

  createCustomer(customer:object): Observable<object>{
    return this.http.post(`${this.baseUrl}/c/addCustomer`,customer);
  }

  getAllProducts():any{
    return this.http.get(`${this.baseUrl}/c/getAllProduct`);
  }
}
