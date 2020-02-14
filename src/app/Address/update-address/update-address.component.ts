import { Component, OnInit } from '@angular/core';
import { Address } from '../Address';
import { Router, ActivatedRoute } from '@angular/router';
import { AddressService } from '../address.service';
import { error } from 'protractor';

@Component({
  selector: 'app-update-address',
  templateUrl: './update-address.component.html',
  styleUrls: ['./update-address.component.css']
})
export class UpdateAddressComponent implements OnInit {

  addressId: number;
  address: Address;

  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private addressService: AddressService
  ) { }

  ngOnInit() {
    console.log("ngOnInit() start");
    this.address = new Address();
    this.addressId = this.route.snapshot.params['addressId'];
    console.log(this.addressId);
    this.addressService.getAddress(this.addressId).subscribe(data=>{this.address = data;console.log(this.address);},error=>console.log(error));
  }

  onSubmit()
  {
    console.log("onSubmit() start");
    this.updateAddress();
    console.log("onSubmit() end");

  }

  updateAddress()
  {
    console.log("updateProjectDetails() start");
    console.log(this.addressId);
    console.log(this.address);
    this.addressService.updateAddress(this.addressId,this.address).subscribe(data=>{console.log(data)},error=>console.log(error));
    this.goToAddressList();
    console.log("updateProjectDetails() end");
  }

  goToAddressList()
  {
    console.log("goToAddressList()");
    this.router.navigate(['/addresses']);
  }
}
