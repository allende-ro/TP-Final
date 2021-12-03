class Producto {
    private idProducto: number;
    private nombreProducto: string;
    private dosis: string;

    public constructor(productoId:number, nombreProd:string, dosisAplicada:string){
        this.idProducto = productoId;
        this.nombreProducto = nombreProd;
        this.dosis = dosisAplicada;
    }

    public getIdProducto():number{
        return this.idProducto;
    }

    public getNombreProducto():string{
        return this.nombreProducto;
    }

    public getDosis():string{
        return this.dosis;
    }

}

