import { isNgTemplate } from '@angular/compiler';
import { Component } from '@angular/core';
import { count, productos } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'my_storeWscss';
  img = `https://www.w3schools.com/howto/img_avatar.png`
  btnDisabled = true
  persona = {
    nombre : `rodrigo`,
    edad: 18
  };
  names : string[] =[`rodrigo`, `marco` , `eduardo`] 
  NewNames = ``

  count : count = {
    name: ``,
    password : ``,
    gmail:``
  }

  productos :productos =
      {
        nombre : 'manzana',
        precio : 1,
        existencias: 1,
        image : ``
      }
  ProductList:productos[] = [
    {
      nombre : 'deku',
      precio : 2700,
      existencias: 21,
      image : `https://cdn.shopify.com/s/files/1/0442/8765/6099/products/11859-1_1200x.jpg?v=1663682406`
      
    },
    {
      nombre : 'pc Gamer',
      precio : 1,
      existencias: 1,
      image : `https://gaminglab.com.mx/wp-content/uploads/2021/12/pc-gamer-yeyian-warrior-kunai-r01-amd-ryzen-5-3600-nvidia-rtx-2060-dual-01.jpg`
      
    },
    {
      nombre : 'Makima',
      precio : 3000,
      existencias: 7,
      image : `https://img1.ak.crunchyroll.com/i/spire4/35fec32f05310f7404d6ccca1207fd031665598944_main.png`
      
    },
    {
      nombre : 'denji motosierra',
      precio :  2300,
      existencias: 13,
      image : `https://m.media-amazon.com/images/I/51Jr-fY1OQL._AC_.jpg`
      
    },
    {
      nombre : 'refrigerador',
      precio : 1,
      existencias: 1,
      image : `https://images.segundamano.mx/api/v1/smmx/images/63/6356220673.jpg?rule=webp_web_gallery_3x`
      
    }
  ]
  onRegister(){
    console.log(this.count);
    
  }
  addProducts(){
    let nombres = this.productos.nombre
    let precios = this.productos.precio
    let existencia = this.productos.existencias
    let images = this.productos.image
    let SameProduct = this.ProductList.findIndex(item => item.nombre === nombres && item.precio === precios)
    console.log(SameProduct);
    
    
    if(nombres.length > 3 && precios > 0 && existencia > 0){
      if(SameProduct === -1){
        this.ProductList.push({nombre: nombres, precio : precios , existencias : existencia , image : images})
      }else{
        this.ProductList[SameProduct] = {
          ...this.ProductList[SameProduct],
          existencias : this.ProductList[SameProduct].existencias + this.productos.existencias , 
          
        }
        console.log(this.ProductList);
        
      }
        
      

    }else{
      return
    }
      this.productos.nombre = ``
  }
  changeCategory(){
    
        
  }
  toggleButton(){
      this.btnDisabled = !this.btnDisabled
  }
  toggleButtonAge(){
      this.persona.edad = this.persona.edad + 1
  }
  toggleButtonRestAge(){
      if(this.persona.edad >  0){
        this.persona.edad = this.persona.edad - 1
      }
  }
  InputKeyUp(evt: Event){
    const name = evt.target as HTMLInputElement
    this.persona.nombre = name.value
    if(this.persona.nombre.length === 0){
      this.persona.nombre = "rodrigo"
    }
  }
  AddNewName(){
    if(this.NewNames.length > 0){  
      this.names.push(this.NewNames)
      this.NewNames = ``
    }
    
  }
  deleteUser(i : number){
    this.names.splice(i, 1)
  }
  
  
}
