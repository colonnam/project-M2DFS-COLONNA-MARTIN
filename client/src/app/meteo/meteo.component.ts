import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MeteoService } from './meteo.service';
@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.css']
})
export class MeteoComponent implements OnInit {

  name=new FormControl('');
  showdata=false;
  data:any=null;

  constructor(private service: MeteoService) { }

  ngOnInit(): void {
  }

  updateName(){
    if (this.name.value!=''){
      this.data=this.service.getLocation(this.name.value).subscribe((data:any)=>{
        this.data=data
      });
      
      this.showdata=true}
  }
  hasdata(){
    return this.showdata
  }

}
