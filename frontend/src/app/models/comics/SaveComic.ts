export class SaveComic {
    id_comic: number;
    nombre: string;
    anio_impresion: number;
    sinopsis: string;
    editorial: string;

    constructor(id_comic: number, nombre: string, anio_impresion: number, sinopsis: string, editorial: string) {
        this.id_comic = id_comic;
        this.nombre = nombre;
        this.anio_impresion = anio_impresion;
        this.sinopsis = sinopsis;
        this.editorial = editorial;
    }
}
