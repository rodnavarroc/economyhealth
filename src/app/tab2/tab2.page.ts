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
  
  constructor(public http:HttpClient, public globals: Globals) { this.globals = globals; }

  ngOnInit()
  {
    for(let i = 0; i <= 20; i++)
    {
      this.globals.zipped[i] = !this.globals.zipped[i];
    }
  }

  ionViewDidEnter()
  {
    this.globals.loadFavs();
  }

  toggleZipped(id: any): void {
  this.globals.zipped[id] = !this.globals.zipped[id];
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

