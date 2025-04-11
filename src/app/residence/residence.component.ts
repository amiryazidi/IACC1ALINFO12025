import { Component } from '@angular/core';
import { Residence } from '../models/residence';
import { ResidenceService } from '../services/residence.service';

@Component({
  selector: 'app-residence',
  templateUrl: './residence.component.html',
  styleUrls: ['./residence.component.css']
})
export class ResidenceComponent {

  constructor(private rs:ResidenceService){} // 1 injection du service ResidenceService

  listResidences:Residence[]=[]  //2 affecter la liste des résidences du service à la liste des résidences du composant

  ngOnInit(){
  //  this.listResidences=this.rs.listResidences
    this.rs.getResidences().subscribe(
      (data) => this.listResidences= data
    )
  }

    show(adresse : string){
      if (adresse === 'inconnu'){
        alert('Adresse inconnue')
      }else{
        alert('Adresse : ' + adresse)
      }
    }

    supp(id:number){
        this.rs.deleteResidence(id).subscribe(
          ()=> this.ngOnInit()
        )
    }
}
