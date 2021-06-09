export class SaveComicResponse{
    mensaje: string;
    status: number;

    constructor(mensaje:string, status: number){
        this.mensaje = mensaje;
        this.status = status;
    }
}