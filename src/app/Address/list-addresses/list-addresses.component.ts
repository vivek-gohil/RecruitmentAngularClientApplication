import { Component, OnInit } from '@angular/core';
import { Address } from '../Address';
import { Observable } from 'rxjs';
import { AddressService } from '../address.service';
import { Router } from '@angular/router';
import { error } from 'protractor';

@Component({
  selector: 'app-list-addresses',
  templateUrl: './list-addresses.component.html',
  styleUrls: ['./list-addresses.component.css']
})
export class ListAddressesComponent implements OnInit {
  addresses: Observable<Address[]>
  
  constructor(
    private addressService: AddressService,
    private router:Router
  ) { }

  ngOnInit() {
    console.log("ngOnInit() start");
    this.loadAddresses();
    console.log("ngOnInit() end");
  }

  loadAddresses()
  {
    console.log("loadAddresses() start");
    this.addresses = this.addressService.getAllAddresses();
    console.log("loadAddresses() end");
  }

  deleteAddress(addressId: number)
  {
    console.log("deleteAddress() start");
    this.addressService.deleteAddress(addressId).subscribe(data=>{console.log(data);this.reloadData()},error=>console.log(error));
    console.log("deleteAddress() end");
  }

  updateAddress(addressId: number)
  {
    console.log("updateAddress() start");
    this.router.navigate(['addresses',addressId]);
    console.log("updateAddress() end");
  }

  reloadData()
  {
    console.log("reloadData() start");
    this.addresses = this.addressService.getAllAddresses();
    console.log("reloadData() end");
  }

}
