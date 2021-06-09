import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  label1 : string = "LOG IN";
  label2: string = "SIGN UP";

  label1P : string = "/login";
  label2P: string = "/signup";

  constructor(public dataService: DataService) {

  }

  ngOnInit(): void {
     this.dataService.label1 = this.label1;
     this.dataService.label2 = this.label2;
     this.dataService.label1P = this.label1P;
     this.dataService.label2P = this.label2P;

  }
}
