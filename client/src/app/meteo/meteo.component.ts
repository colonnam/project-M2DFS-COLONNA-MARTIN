import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MeteoService } from './meteo.service';
import{Lieu} from './lieu';
import{MeteoCourante} from './meteoCourante';
import{Prevision} from './prevision';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.css']
})
export class MeteoComponent implements OnInit {

  name=new FormControl('');
  
  lieux:Lieu[]=[]
  lieuCourant!:Lieu
  meteo:MeteoCourante|undefined
  previsions:Prevision[]=[]
  error:boolean=false

  constructor(private service: MeteoService) { }

  ngOnInit(): void {
  }

  chercheLieu(){
    this.meteo=undefined
    this.previsions=[]
    this.error=false
    if (this.name.value!=''){
      this.lieux=[]
      this.service.getLocation(this.name.value).subscribe((data:any)=>{
		for(let lieu of data){
      this.lieux.push(new Lieu(lieu.Key,lieu.LocalizedName,lieu.Country.LocalizedName,lieu.AdministrativeArea.LocalizedName))
    }
      },
      (error) => {                              //Error callback
        this.error=true
        
})
      
      }
  }
  

  getmeteo(lieu:Lieu){
    this.previsions=[]
    this.error=false
    this.lieuCourant=lieu
    lieu.key
    console.log(lieu.key)
    this.service.getMeteo(lieu.key).subscribe((data:any)=>{
      this.meteo=new MeteoCourante(data[0].WeatherText,data[0].Temperature.Metric.Value+" °"+data[0].Temperature.Metric.Unit)
    console.log(this.lieuCourant?.nom+": "+this.meteo)
    },
    (error) => {                              //Error callback
      this.error=true
      
})

  }
  getPrevisions(lieu:Lieu){
    this.error=false
    this.previsions=[]
    this.service.getPrevisions(lieu.key).subscribe((data:any)=>{
      for(let prevision of data.DailyForecasts){
        this.previsions.push(new Prevision(new Date(prevision.Date),prevision.Temperature.Minimum.Value+prevision.Temperature.Minimum.Unit,prevision.Temperature.Maximum.Value+prevision.Temperature.Maximum.Unit,prevision.Day.IconPhrase,prevision.Night.IconPhrase))
      }
    },
    (error) => {                              //Error callback
      this.error=true
      
  })
  }

}
