import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ShopsService } from '../../services/shop.service';
import { UserService } from 'src/app/services/user.service';
import { MatBottomSheet, MatBottomSheetRef, MatBottomSheetModule } from '@angular/material';
import { BottomModalComponent } from '../bottom-modal/bottom-modal.component';
import { Router } from '@angular/router';


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
  myComment: string
  

  constructor(
    private fb: FormBuilder, 
    private shopsService: ShopsService, 
    private userService: UserService,
    private router: Router,
    private bottomSheet: MatBottomSheet
    ) {

    setTimeout(() => {
      this.useBtn = true;
    },) 
   }
   
   openBottomSheet(): void {
    this.bottomSheet.open(BottomModalComponent)
  }

  ngOnInit() {
    
    
    
    
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
    console.log('findingShops');
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
    this.shopsService.testDelete().subscribe(data => {
      this.findShops()
    })
    // this.router.navigateByUrl('/shops')
    // window.location.href='/shops';
  }
  updateShop(id:number) {
    console.log(id)
    let UpdatedShop = {

   coffee:{ id:  id,
    owner: this.ID,
    rating:  5}

    }
    this.shopsService.updateShops(UpdatedShop).subscribe(Shop => {
    this.findShops()
    window.location.href='/shops';
    console.log(Shop)
    })
    

}

  deleteComment(id) {
    this.shopsService.deleteCommment(id)
    this.findShops()
  }

  updateComment(id){
    let  updata = {
      comment: {
         id: id,
       comment: this.myComment,
      //  owner: Number(localStorage.getItem('id'))
      }
     }
     this.shopsService.updateComment(updata)
     console.log(updata)
     this.findShops()
   }

//    this.shopsService.updateShops(updata)
//    this.findShops()
//  }

}
  

// updateComment(id){
//   let  updata = {
//      id: id,
//      comment: this.comment
//    }
//    this.shopsService.updateShops(updata)
//    this.findShops()
//  }
// }



