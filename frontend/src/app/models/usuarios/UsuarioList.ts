import { UsuarioItem } from './UsuarioItem';
export class UsuarioList{
    status:number;
    mensaje:string;
    comic: Array<UsuarioItem>;

    constructor(status:number, mensaje:string, comic: Array<UsuarioItem>){
        this.status = status;
        this.mensaje = mensaje;
        this.comic = comic;
    }
}