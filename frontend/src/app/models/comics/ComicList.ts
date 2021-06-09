import { ComicItem } from './ComicItem';
export class ComicList{
    status:number;
    mensaje:string;
    comic: Array<ComicItem>;

    constructor(status:number, mensaje:string, comic: Array<ComicItem>){
        this.status = status;
        this.mensaje = mensaje;
        this.comic = comic;
    }
}