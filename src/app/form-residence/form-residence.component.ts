import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Residence } from '../models/residence';
import { ResidenceService } from '../services/residence.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-residence',
  templateUrl: './form-residence.component.html',
  styleUrls: ['./form-residence.component.css']
})
export class FormResidenceComponent {
id!:number
res!:Residence
constructor(private rs:ResidenceService, private rt:Router,private act: ActivatedRoute ) { }

residenceForm = new FormGroup ({
  name :  new FormControl('',[Validators.required,Validators.minLength(4)]),
  adress :  new FormControl('',Validators.required),
  image :  new FormControl('',Validators.required),
  status :  new FormControl('',Validators.required),
});


ngOnInit(){
  this.id=this.act.snapshot.params['id']  //1 recuperer l'id de la residence
  this.rs.getResidenceById(this.id).subscribe(
    (data)=>{
      this.res=data,   //2 recuperer la residence par id
      this.residenceForm.patchValue(this.res) //3 patcher le formulaire avec les valeurs de la residence
    }
  )
}

save(){

if (this.id){
  this.rs.updateResidence(this.residenceForm.value as any,this.id).subscribe(
    ()=> this.rt.navigateByUrl('/residence')
  )
}else{
  this.rs.addResidence(this.residenceForm.value as any).subscribe(
    ()=> this.rt.navigateByUrl('/residence')
  )
}

}

}
