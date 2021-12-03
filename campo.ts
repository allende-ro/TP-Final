class Campo {
    private idCampo: number;
    private ubicacion: string;
    private propietario: string; 

    public constructor (campo:number, lugar:string, duenio:string){
        this.idCampo = campo;
        this.ubicacion = lugar;
        this.propietario = duenio;
    }

    public getIdCampo():number{
        return this.idCampo;
    }

    public getUbicacion():string{
        return this.ubicacion;
    }

    public getPropietario():string{
        return this.propietario;
    }

}

