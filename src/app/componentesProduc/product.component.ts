import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { HomeScreenComponent } from '../screens/home-screen/home-screen.component';

import { Product } from '../model/product.model';
import { from } from 'rxjs';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html'
})

// tslint:disable-next-line: class-name
export class productComponent implements OnInit{

    @Input()
    public product: Product;
    constructor(){

    }
    ngOnInit(): void {}
}

