import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.scss']
})
export class IngresoComponent implements OnInit {

  label1 : string = "INGRESAR COMIC";
  label2: string = "CONSULTAR COMIC";

  label1P : string = "/ingreso";
  label2P: string = "/consulta";
  formG: FormGroup;
  constructor(private router: Router,private dataService:DataService, private formBuilder:FormBuilder, private backend: BackendService) {
    this.formG = this.formBuilder.group({
      nombre: [''],
      anio_impresion : [null],
      sinopsis : [''],
      editorial : ['']
    });
  }

  ngOnInit(): void {
    this.dataService.label1 = this.label1;
    this.dataService.label2 = this.label2;
    this.dataService.label1P = this.label1P;
    this.dataService.label2P = this.label2P;  
  }

  guardar(){
    this.backend.insertaComic(this.formG.controls["nombre"].value, this.formG.controls["anio_impresion"].value, this.formG.controls["sinopsis"].value, this.formG.controls["editorial"].value).subscribe(x => {
      alert(x.mensaje);
    });
  }

  logOut(){
    this.router.navigateByUrl('/inicio');
    this.dataService.label1 = "LOG IN";
     this.dataService.label2 = "SIGN UP";
     this.dataService.label1P = "/login";
     this.dataService.label2P = "/signup";
  }
}
