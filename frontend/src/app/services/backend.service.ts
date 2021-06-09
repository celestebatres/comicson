import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { ComicList } from '../models/comics/ComicList';
import { SaveComic } from '../models/comics/SaveComic';
import { SaveComicResponse } from '../models/comics/SaveComicResponse';


const BE_API = environment.urlBackend;
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }

  getComics(){
    let url: string = BE_API + '/comic';
    return this.http.get<ComicList>(url, httpOptions);
  }

  insertaComic(nombre: string, anio_impresion:number, sinopsis:string, editorial:string){
    let url:string = BE_API + '/comic';
    let comic : SaveComic = new SaveComic(0, nombre,anio_impresion, sinopsis, editorial);
    return this.http.post<SaveComicResponse>(url, comic, httpOptions);
  }
}
