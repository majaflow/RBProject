import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ShopsService } from '../../services/shop.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-shops',
  templateUrl: './create-shops.component.html',
  styleUrls: ['./create-shops.component.css']
})
export class CreateShopsComponent implements OnInit {
  useBtn = false;
  createShops: FormGroup;
  shops= []
  ID = this.userService.id
  role = localStorage.getItem('role')
  
  constructor(private fb: FormBuilder, private shopsService: ShopsService, private userService: UserService) {
    setTimeout(() => {
      this.useBtn = true;
    }, 3000); 
   }

  ngOnInit() {
    console.log(this.userService.id)
    
   
    
    this.createShops = this.fb.group({
      id: null,
      name: new FormControl(),
      location: new FormControl(),
      favoriteDrink: new FormControl(),
      note: new FormControl(),
      owner: this.userService.id
    })
  
   this.findShops();
  }
 
  onCreateShops() {
    
    this.shopsService.makeShops(this.createShops.value).subscribe(Shop =>  {
      this.findShops()
      console.log(Shop)
    })
  }
  
  findShops() : void {
    this.shopsService.getShops().subscribe(Shops => {
       this.shops =Object.values(Shops);
       this.shops.reverse();
      console.log(Shops);
    })
  }
  deleteShop(id) {
    this.shopsService.deleteShops(id)
    this.findShops()}
  updateShop(id) {
    console.log(id)
    let UpdatedShop = this.createShops.value
    UpdatedShop.id = id
    this.shopsService.updateShops(UpdatedShop)
    this.findShops()}

}
