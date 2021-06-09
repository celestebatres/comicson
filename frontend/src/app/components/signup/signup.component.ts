import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BackendService } from '../../services/backend.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  formU : FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder, private backend: BackendService) {
    this.formU = this.formBuilder.group({
      nombre: [''],
      username: [''],
      pass: [''],
      fecha_nac: [''],
      sexo: ['']
    });
   }

  ngOnInit(): void {
  }

  guardar(){
    
  }

}
