export class PutComic {
    nombre: string;
    anio_impresion: number;
    sinopsis: string;
    editorial: string;

    constructor(nombre: string, anio_impresion: number, sinopsis: string, editorial: string) {
        this.nombre = nombre;
        this.anio_impresion = anio_impresion;
        this.sinopsis = sinopsis;
        this.editorial = editorial;
    }
}