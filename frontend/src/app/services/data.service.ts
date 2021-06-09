import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  label1 : string = "";
  label2: string = "";

  label1P : string = "";
  label2P: string = "";
  
  id_comic: number = 0;
  constructor(){}
}
