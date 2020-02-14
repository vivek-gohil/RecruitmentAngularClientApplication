import { Component, OnInit } from '@angular/core';
import { Address } from '../Address';
import { Router } from '@angular/router';
import { AddressService } from '../address.service';
import { error } from 'protractor';

@Component({
  selector: 'app-create-address',
  templateUrl: './create-address.component.html',
  styleUrls: ['./create-address.component.css']
})
export class CreateAddressComponent implements OnInit {
  address: Address = new Address();
  submitted=false;

  constructor(
    private router: Router,
    private addressService: AddressService
  ) { }

  ngOnInit() {
    console.log("ngOnInit() start");

    console.log("ngOnInit() end");
  }

  onSubmit() {
    console.log("onSubmit() start");
    this.submitted = true;
    this.save();    
  }

  save()
  {
    console.log("save() start");
    this.addressService.createAddress(this.address).subscribe(data=>{console.log(data)},error=> console.log(error));
    console.log("save() end");
  }

}
