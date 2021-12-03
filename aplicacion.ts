class Aplicacion {
    private idAplicacion: number;
    private fechaAplicacion: string;
    private loteAplicacion: number;

    public constructor(aplicacionId:number, aplicacionFecha:string, aplicacionLote:number){
        this.idAplicacion = aplicacionId;
        this.fechaAplicacion = aplicacionFecha;
        this.loteAplicacion = aplicacionLote;
    }

    public getIdAplicacion():number{
        return this.idAplicacion;
    }

    public getfechaAplicacion():string{
        return this.fechaAplicacion;
    }

    public getLoteAplicacion():number{
        return this.loteAplicacion;
    }

}