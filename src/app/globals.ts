import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class Globals {
  username: string = '';
  guidesList: any;
  favsList: any;
  datos: any = {};

  constructor(public http:HttpClient, public router : Router) {}
  
  loadFavs()
  {

    if(!this.guidesList)
    {
      this.loadGuides();
    }

    this.datos.idusuario = this.username;
    this.http.post("http://45.15.24.33/economyhealth_server/obtener_favoritos.php", this.datos).subscribe( data => {
    this.favsList = data;
    console.log(this.favsList);
    }, err =>{
    console.log(err); 
    });
  }

  loadGuides()
  {
    this.http.get("http://45.15.24.33/economyhealth_server/obtener_guias.php").subscribe( data => {
    this.guidesList = data;
    console.log(data);
    }, err =>{
    console.log(err); 
    });
  }
}