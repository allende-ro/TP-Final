class Lote {
    private idLote: number;
    private nombreLote: string;
    private hectareas: number;
    private campoLote: number; 
                        

    public constructor(loteId:number, nombreLte:string, has:number, campoLte: number){
        this.idLote = loteId;
        this.nombreLote = nombreLte;
        this.hectareas = has;
        this.campoLote = campoLte;
    }

    public getIdLote():number{
        return this.idLote;
    }

    public getNombreLote():string{
        return this.nombreLote;
    }

    public getHectareas():number{
        return this.hectareas;
    }

    public getCampoLote():number{
        return this.campoLote;
    }


}