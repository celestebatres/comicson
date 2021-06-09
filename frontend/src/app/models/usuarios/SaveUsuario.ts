export class SaveUsuario {
    id_usuario: number;
    nombre: string;
    username: string;
    pass: string;
    fecha_nac: string;
    sexo: string;

    constructor(id_usuario: number, nombre: string, username: string, pass: string, fecha_nac: string, sexo: string) {
        this.id_usuario = id_usuario;
        this.nombre = nombre;
        this.username = username;
        this.pass = pass;
        this.fecha_nac = fecha_nac;
        this.sexo = sexo;
    }
}
