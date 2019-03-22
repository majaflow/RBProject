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
  comment: string
  
  constructor(private fb: FormBuilder, private shopsService: ShopsService, private userService: UserService) {

    setTimeout(() => {
      this.useBtn = true;
    },) 
   }

  ngOnInit() {
    
    
   
    
    this.createShops = this.fb.group({
    
      name: new FormControl(),
      location: new FormControl(),
      favoriteDrink: new FormControl(),
      note: new FormControl(),
    
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
    this.getSingle()
  }

  getSingle() {
    this.shopsService.getSingle().subscribe()
    this.shopsService.getSingle().subscribe(data => {
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
  updateShop(id:number) {
    console.log(id)
    let UpdatedShop = {
    id:  id,
    
    note: 'trash'
    }
    this.shopsService.updateShops(UpdatedShop).subscribe(Shop => {
    this.findShops()
    console.log(Shop)
    })
    
}
  deleteComment(id){
    this.shopsService.deleteComment(id)
    this.findShops()
  }
  updateComment(id){
   let  updata = {
      id: id,
      comment: this.comment
    }
    this.shopsService.updateShops(updata)
    this.findShops()
  }
}
