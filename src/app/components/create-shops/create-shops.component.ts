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
  ID = Number(localStorage.getItem('id'))
  role = localStorage.getItem('role')
  activeShop = {}
  
  constructor(private fb: FormBuilder, private shopsService: ShopsService, private userService: UserService) {
    setTimeout(() => {
      this.useBtn = true;
    },) 
   }

  ngOnInit() {
    console.log(this.userService.id)
    
   
    
    this.createShops = this.fb.group({
      id: null,
      name: new FormControl(),
      location: new FormControl(),
      favoriteDrink: new FormControl(),
      note: new FormControl(),
      owner: Number(localStorage.getItem('id')),
      rating: new FormControl()
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
  myShop(id) {
    console.log(id)
    this.shopsService.setshopID(id)
    this.getSingle(id);
  }

  getSingle(shopId) {
    this.shopsService.getSingle(shopId).subscribe()
    this.shopsService.getSingle(shopId).subscribe(data => {
      this.activeShop = data
      console.log(this.activeShop)
      // Open Dialogue here (material dialogue???)
    })
  }

  deleteShop(id) {
    this.shopsService.setshopID(id)
    this.shopsService.deleteShops()
    this.findShops()
  }
  updateShop(id) {
    console.log(id)
    let UpdatedShop = {
    id:  id,
    owner: this.ID,
    rating:  5000
    }
    this.shopsService.updateShops(UpdatedShop).subscribe(Shop => {
    this.findShops()
    console.log(Shop)
    })
    
}
}
