export class MeteoCourante{

    meteo!:string
    temperature!:string
    date:Date=new Date()
   
    constructor(meteo:string,temperature:string) {
        this.meteo=meteo;
        this.temperature=temperature
    }

}