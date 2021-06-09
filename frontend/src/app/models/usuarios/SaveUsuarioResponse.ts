export class SaveUsuarioResponse{
    mensaje: string;
    status: number;

    constructor(mensaje:string, status: number){
        this.mensaje = mensaje;
        this.status = status;
    }
}