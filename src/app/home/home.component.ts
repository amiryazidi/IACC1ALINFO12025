import { Component } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  color: string="red"
  title: string = 'hello 1AlINFO 1'
  priceUser  !: number

  product:Product[]=[
    {id : 1 , title : 'iphone 15' , price : 1500 , quantity : 2 , image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXDXo5ckIjnc9EdRLt8e494jdZYcL6Mln0OweqNN2iQSc_5E-Ng54F4WufbMf5ehug4Ew&usqp=CAU"},
    {id : 2 , title : 'iphone 16' , price : 2500 , quantity : 5 , image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXDXo5ckIjnc9EdRLt8e494jdZYcL6Mln0OweqNN2iQSc_5E-Ng54F4WufbMf5ehug4Ew&usqp=CAU"},
    {id : 3 , title : 'iphone 17' , price : 3500 , quantity : 26 , image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXDXo5ckIjnc9EdRLt8e494jdZYcL6Mln0OweqNN2iQSc_5E-Ng54F4WufbMf5ehug4Ew&usqp=CAU"},

  ]

  show(){
    alert('hello 1AlINFO 1') //traitement
  }
  buy(id:number){
   // this.product[i].quantity--
    const index = this.product.findIndex(p => p.id == id)
    this.product[index].quantity--

  }
}
