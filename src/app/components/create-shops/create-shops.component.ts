import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ShopsService } from '../../services/shop.service';

@Component({
  selector: 'app-create-shops',
  templateUrl: './create-shops.component.html',
  styleUrls: ['./create-shops.component.css']
})
export class CreateShopsComponent implements OnInit {
  useBtn = false;
  createShops: FormGroup;
  shops = [];


  // ratings = [
  //   {value: 1, view: '⭐️' },
  //   {value: 2, view: '⭐️⭐️'},
  //   {value: 3, view: '⭐️⭐️⭐️'},
  //   {value: 4, view: '⭐️⭐️⭐️⭐️'},
  //   {value: 5, view: '⭐️⭐️⭐️⭐️⭐️'}
  // ];

  constructor(private fb: FormBuilder, private shopsService: ShopsService) {
    setTimeout(() => {
      this.useBtn = true;
    }, 3000); 
   }

  ngOnInit() {
    this.createShops = this.fb.group({
      id: new FormControl(),
      name: new FormControl(),
      location: new FormControl(),
      favoriteDrink: new FormControl(),
      note: new FormControl(),
      owner: localStorage.getItem('id')
      // rating: new FormControl()
    })

    this.findShops();
  }
 
  onCreateShops() : void {
    
    this.shops.unshift(this.createShops.value) 
    this.shopsService.makeShops(this.shops[0]).subscribe(Shop => this.shops[0] = Shop);
    this.findShops();
  }

  findShops() : void {
    this.shopsService.getShops().subscribe(Shops => {
      // this.shops = Shops;
      // this.shops.reverse();
      console.log(Shops);
    })
  }

}
