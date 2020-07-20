import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Globals } from '../globals';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  guidesList: any;
  session:any = {};
  zipped: boolean = true;
  
  constructor(public http:HttpClient, public globals: Globals) { this.globals = globals; }

  ionViewDidEnter()
  {
    this.loadGuides();
  }

  toggleZipped(): void {
  this.zipped = !this.zipped;
  }

  addFavoritos(id: any)
  {
    /*this.session.action = "insert"; 
    this.session.idusuario = this.globals.username;
    this.session.idguia = id;
    this.http.post("http://localhost/economyhealth/add_favorito.php", this.session).subscribe(data=>{
    let result = JSON.stringify(data["_body"]);
    if(data['status'] == "success")
    {

    }
    }, err=>{
    console.log(err); 
    })*/
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

