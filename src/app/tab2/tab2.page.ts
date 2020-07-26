import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Globals } from '../globals';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  session:any = {};
  zipped:any = {};
  
  constructor(public http:HttpClient, public globals: Globals) { this.globals = globals; }

  ngOnInit()
  {
    for(let i = 0; i <= 20; i++)
    {
      this.zipped[i] = !this.zipped[i];
    }
  }

  ionViewDidEnter()
  {
    this.globals.loadFavs();
    this.cargarIconos();
  }

 cargarIconos()
  { 
    for(let i = 0; i < this.globals.favsList.length; i++)
    {
      console.log("entro");
    }
  }


  toggleZipped(id: any): void {
  this.zipped[id] = !this.zipped[id];
  }

  addFavoritos(id: any)
  {
    this.session.action = "insert"; 
    this.session.idusuario = this.globals.username;
    this.session.idguia = id;
    this.http.post("http://45.15.24.33/economyhealth_server/add_favorito.php", this.session).subscribe(data=>{
    let result = JSON.stringify(data["_body"]);
    if(data['status'] == "success")
    {
      console.log("Added");
    }
    }, err=>{
    console.log(err); 
    })
  }
}

