import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
    selector: 'app-display-shops',
    templateUrl: './display-shops.component.html',
    styleUrls: ['./display-shops.component.css']
})

export class DisplayShopsComponent implements OnInit {
    public _shop = {};
    ratings = [ '⭐️', '⭐️⭐️', '⭐️⭐️⭐️', '⭐️⭐️⭐️⭐️', '⭐️⭐️⭐️⭐️⭐️' ]
    
    ngOnInit() {
        this._shop['rating'] = this.ratings[this._shop['rating'] -1 ]
    }

    @Input() set shops(shops: any) {
        this._shop = shops;
    }

    get shops() : any {
        return this._shop;
    }
}
