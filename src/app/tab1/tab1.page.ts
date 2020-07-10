import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  product: any = {}; 
  constructor(public http:HttpClient, private menu: MenuController) {}

  insert(){
    this.product.action = "insert"; 
    this.http.post("http://localhost/economyhealth/gasto.php", this.product).subscribe(data=>{
    console.log(data); 
    let result = JSON.stringify(data["_body"]);
    }, err=>{
    console.log(err); 
    })
    }
}
