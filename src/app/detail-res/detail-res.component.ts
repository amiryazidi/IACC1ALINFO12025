import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Residence } from '../models/residence';
import { ResidenceService } from '../services/residence.service';

@Component({
  selector: 'app-detail-res',
  templateUrl: './detail-res.component.html',
  styleUrls: ['./detail-res.component.css']
})
export class DetailResComponent {
   id!: number
   residence!:Residence
  constructor(private act : ActivatedRoute,private rs: ResidenceService) { }  // injection du service ACtivatedRoute


  ngOnInit(){
    this.id= this.act.snapshot.params['id']   // récuperation de l'id depuis l'url
   // this.residence=this.rs.listResidences.filter(r => r.id == this.id)// filtrage de la liste des résidences
   this.rs.getResidenceById(this.id).subscribe(
      (data) => this.residence = data)

  }

}
