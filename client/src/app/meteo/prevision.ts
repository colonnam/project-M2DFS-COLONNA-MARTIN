export class Prevision{

    date!: Date
    min!:string
    max!:string
    jour!:string
    nuit!:string

    constructor(date:Date,min:string,max:string,jour:string,nuit:string){
        this.date=date
        this.min=min
        this.max=max
        this.jour=jour
        this.nuit=nuit

    }

}