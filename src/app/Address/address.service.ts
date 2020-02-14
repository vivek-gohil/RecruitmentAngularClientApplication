import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  private baseURL = "http://localhost:8080/addresses";

  constructor(
    private http: HttpClient
  ) { }

  getAllAddresses(): Observable<any> {
    console.log("in getAllAddresses");
    return this.http.get(`${this.baseURL}/getAllAddresss`);
  }

  createAddress(address: Object): Observable<Object> {
    console.log("in createAddress()");
    console.log(address);
    return this.http.post(`${this.baseURL}/address`, address);
  }

  deleteAddress(addressId: number): Observable<any> {
    console.log("in deleteAddress()")
    console.log(addressId);
    return this.http.delete(`${this.baseURL}/${addressId}`);
  }

  updateAddress(addressId: number, value: any): Observable<any> {
    console.log("in updateAddress()");
    return this.http.put(`${this.baseURL}/${addressId}`, value);
  }

  getAddress(addressId: number): Observable<any> {
    console.log("in getProjectDetails()");
    console.log(addressId);
    return this.http.get(`${this.baseURL}/${addressId}`);
  }
}
