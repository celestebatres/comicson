import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { BackendService } from '../../services/backend.service';
import { ComicItem } from '../../models/comics/ComicItem';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent implements OnInit {
  comics: ComicItem[];

  label1 : string = "INGRESAR COMIC";
  label2: string = "CONSULTAR COMIC";

  label1P : string = "/ingreso";
  label2P: string = "/consulta";

  constructor(private dataService:DataService, private router: Router, private backend: BackendService) {
    this.comics = [];
  }

  ngOnInit(): void {
    this.dataService.label1 = this.label1;
    this.dataService.label2 = this.label2;
    this.dataService.label1P = this.label1P;
    this.dataService.label2P = this.label2P;  

    //Conexión
    this.backend.getComics().subscribe((x) =>{
      this.comics = x.comic;
      console.log(x);
    }); 
  }

  goTo(url:string){
    this.router.navigateByUrl(url);
  }

  logOut(){
    this.router.navigateByUrl('/inicio');
    this.dataService.label1 = "LOG IN";
     this.dataService.label2 = "SIGN UP";
     this.dataService.label1P = "/login";
     this.dataService.label2P = "/signup";
  }

}
