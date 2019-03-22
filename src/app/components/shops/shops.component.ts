import { Component, OnInit, Injectable } from '@angular/core';
import { ShopsService } from '../../services/shop.service';;


@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.css']
})

@Injectable()
export class ShopsComponent implements OnInit {
  public shops = {}

  constructor(private shopsService: ShopsService ) { }

  ngOnInit() {
    this.shopsService.getShops()
    .subscribe(shops => {
      this.shops = shops
      // console.log(shops)
    })
  }

}
