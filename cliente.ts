class Cliente {
    private idCliente: number;
    private razonSocial: string;
    private cuit: number;

    public constructor(clienteId:number, razonSoc:string, nroCuit:number){
        this.idCliente = clienteId;
        this.razonSocial = razonSoc;
        this.cuit = nroCuit;
    }

    public getIdCliente():number{
        return this.idCliente;
    }

    public getRazonSocial():string{
        return this.razonSocial;
    }

    public getCuit():number{
        return this.cuit;
    }

}