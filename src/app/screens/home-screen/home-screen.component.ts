import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.model';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent implements OnInit {

  public products: Product[];

  constructor(){
    this.products = [
        {
          id: '1',
          image: 'assets/Images/kiwi.png',
          title: 'Kiwi',
          price: 3000,
          cantidad: 'Por kilo',
          description: 'Kiwi granel',
          tipo: 'Fruta'
        },
        {
          id: '2',
          image: 'assets/Images/lechuga.png',
          title: 'Lechuga',
          price: 250,
          cantidad: 'Por unidad',
          description: 'Lechuga Francesa',
          tipo: 'Verdura'
        },
        {
          id: '3',
          image: 'assets/Images/Manzana Verde.png',
          title: 'Manzana Verde',
          price: 1300,
          cantidad: 'Por kilo',
          description: 'Manzana verde',
          tipo: 'Fruta'
        },
        {
          id: '4',
          image: 'assets/Images/Manzana roja.png',
          title: 'Manzana Roja',
          price: 800,
          cantidad: 'Por kilo',
          description: 'bla bla bla bla bla',
          tipo: 'Fruta'
        },
        {
          id: '5',
          image: 'assets/Images/limon.png',
          title: 'Limon',
          price: 890,
          cantidad: 'Por kilo',
          description: 'Limon fresco',
          tipo: 'Fruta'
        },
        {
          id: '6',
          image: 'assets/Images/Palta Negra.png',
          title: 'Palta Negra',
          price: 3490,
          cantidad: 'Por kilo',
          description: 'AGUACATE',
          tipo: 'Verdura'
        },
        {
          id: '7',
          image: 'assets/Images/melon calameño.png',
          title: 'Melon calameño',
          price: 590,
          cantidad: 'Por unidad',
          description: 'bla bla bla bla bla',
          tipo: 'Fruta'
        },
        {
          id: '8',
          image: 'assets/Images/Naranja.png',
          title: 'Naranja',
          price: 1590,
          cantidad: 'Por kilo',
          description: 'bla bla bla bla bla',
          tipo: 'Fruta'
        },
        {
          id: '9',
          image: 'assets/Images/Pimiento rojo.png',
          title: 'Pimiento rojo',
          price: 590,
          cantidad: 'Por unidad',
          description: 'bla bla bla bla bla',
          tipo: 'Verdura'
        },
        {
          id: '10',
          image: 'assets/Images/Pimiento verde.png',
          title: 'Pimiento verde',
          price: 590,
          cantidad: 'Por unidad',
          description: 'bla bla bla bla bla',
          tipo: 'Verdura'
        },
        {
          id: '11',
          image: 'assets/Images/Melon tuna.png',
          title: 'Melon tuna',
          price: 1500,
          cantidad: 'Por unidad',
          description: 'bla bla bla bla bla',
          tipo: 'Fruta'
        },
        {
          id: '12',
          image: 'assets/Images/Palta Fuerte.png',
          title: 'Palta fuerte',
          price: 3979,
          cantidad: 'Por kilo',
          description: 'bla bla bla bla bla',
          tipo: 'Verdura'
        },
        {
          id: '13',
          image: 'assets/Images/PaltaHass.png',
          title: 'Palta Hass',
          price: 4500,
          cantidad: 'Por kilo',
          description: 'bla bla bla bla bla',
          tipo: 'Verdura'
        }
      ];
  }

  ngOnInit(): void {
  }

  public getAllProducts(): Product []{
    return this.products;
  }

}
