import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material';
import { ShopsService } from '../../services/shop.service';
import { FormBuilder, FormGroup, FormControl, FormsModule } from '@angular/forms';


@Component({
  selector: 'app-bottom-modal',
  templateUrl: './bottom-modal.component.html',
  styleUrls: ['./bottom-modal.component.css']
})
export class BottomModalComponent implements OnInit {
  shops = []
  // updateShops: FormGroup;
  ID = Number(localStorage.getItem('id'))
  updateShop: FormsModule
  favDr: string
  loc:string
  note: string
  name: string
  shop: {}

  constructor(private fb: FormBuilder,
    private bottomSheetRef: MatBottomSheetRef<BottomModalComponent>,
    private shopsService: ShopsService,) { }
  
  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }

  

  updateShops() {
    this.shop = { coffee: {
      favoriteDrink: this.favDr,
      location: this.loc,
      note: this.note,
      name: this.name}
    }
    console.log(this.ID)
    this.shopsService.updateShops(this.shop).subscribe(Shop => {
      window.location.href='/shops'
      console.log('bottom-modal:', Shop)
    })
    // return JSON.stringify(this.updateShop);
    
  }

  ngOnInit() {
    this.updateShop = (this.fb.group({
      coffee: {
      // name: new FormControl(),
      // location: new FormControl(),
      // favoriteDrink: new FormControl(),
      // note: new FormControl(),
      }
    }))
    
  }

  

}
