import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { UserService } from '../services/user.service';
import { ShopsService } from '../services/shop.service';
import { HttpClient } from "@angular/common/http"
@Component({
    selector: 'app-display-shops',
    templateUrl: './display-shops.component.html',
    styleUrls: ['./display-shops.component.css']
})

export class DisplayShopsComponent implements OnInit {
    public _shop = {};
    ratings = [ '⭐️', '⭐️⭐️', '⭐️⭐️⭐️', '⭐️⭐️⭐️⭐️', '⭐️⭐️⭐️⭐️⭐️' ]
    public ID: number
    constructor(private userService : UserService, private shopService : ShopsService, private http: HttpClient){
    }
    ngOnInit() {
     this.ID = this.userService.id
 
        console.log(this.ID)

    }

    @Input() set shops(shops: any) {
        this._shop = shops;
    }

    get shops() : any {
        return this._shop;
    }
}
