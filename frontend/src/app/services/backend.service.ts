import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { ComicList } from '../models/comics/ComicList';
import { SaveComic } from '../models/comics/SaveComic';
import { SaveComicResponse } from '../models/comics/SaveComicResponse';
import { SaveUsuario } from '../models/usuarios/SaveUsuario';
import { SaveUsuarioResponse } from '../models/usuarios/SaveUsuarioResponse';
import { DeleteComic } from '../models/comics/DeleteComic';
import { DeleteComicResponse } from '../models/comics/DeleteComicResponse';
import { ComicItem } from '../models/comics/ComicItem';


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

  eliminaComic(id_comic: number){
    let url:string = BE_API + '/comic/' + id_comic;
    return this.http.delete<DeleteComicResponse>(url, httpOptions);
  }

  insertaUsuario(nombre: string, username: string, pass: string, fecha_nac: string, sexo: string){
    let url: string = BE_API + '/usuario';
    let usuario: SaveUsuario = new SaveUsuario(0, nombre, username, pass, fecha_nac, sexo);
    return this.http.post<SaveUsuarioResponse>(url, usuario, httpOptions);
  }
}
