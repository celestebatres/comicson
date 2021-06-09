import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  formG : FormGroup;
  id_comic: number;

  constructor(private router: Router, private formBuilder:FormBuilder, private backend: BackendService, private dataService: DataService) {
    this.formG = this.formBuilder.group({
      nombre: [''],
      anio_impresion : [null],
      sinopsis : [''],
      editorial : ['']
    });
    this.id_comic = this.dataService.id_comic;
  }

  ngOnInit(): void {

  }

  editar(){
    this.backend.editaComic(this.id_comic,this.formG.controls["nombre"].value, this.formG.controls["anio_impresion"].value, this.formG.controls["sinopsis"].value, this.formG.controls["editorial"].value).subscribe(x => {
      alert(x.mensaje);
    });
    this.router.navigateByUrl('/consulta');
  }

  regresar(){
    this.router.navigateByUrl('/consulta');
  }

}
