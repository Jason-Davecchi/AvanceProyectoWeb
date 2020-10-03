import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Product } from 'src/app/model/product.model';
import { HomeScreenComponent } from 'src/app/screens/home-screen/home-screen.component';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor(){}
  // tslint:disable-next-line: typedef
  ngOnInit(){}
}
/*proximo filtrado!
  public products: Product[];
  public filterProducts: Product[];
  public tipos: string[];
  public selectTipo: string;
  public search: FormControl;

  constructor( private HomeComponent: HomeScreenComponent ){
    this.products = this.HomeComponent.getAllProducts();
    this.filterProducts = this.products;
    this.tipos = this.productsBrands();
    this.search = new FormControl('');
  }
  ngOnInit(): void {
    this.search.valueChanges.subscribe((key) => {
      console.log(key);
    });
  }

  private productsBrands(): string[] {
    const tipos: string[] = [];
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0;  i < this.products.length;  i++) {
      // tslint:disable-next-line: triple-equals
      if ( tipos.includes(this.products[i].tipo) == false){
        tipos.push(this.products[i].tipo);
      }
    }
    return tipos;
  }
  public selectipo(tipo: string): void {
    this.selectTipo = tipo;
    this.filterProducts = this.products.filter((product: Product) => product.tipo === tipo);
  } */

