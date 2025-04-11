import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Residence } from '../models/residence';
import { ResidenceService } from '../services/residence.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-residence',
  templateUrl: './form-residence.component.html',
  styleUrls: ['./form-residence.component.css']
})
export class FormResidenceComponent {

constructor(private rs:ResidenceService, private rt:Router) { }

residenceForm = new FormGroup ({
  name :  new FormControl('',[Validators.required,Validators.minLength(4)]),
  adress :  new FormControl('',Validators.required),
  image :  new FormControl('',Validators.required),
  status :  new FormControl('',Validators.required),
});


save(){
//  this.rs.addResidence(this.residenceForm.value as any)
this.rs.addResidence(this.residenceForm.value as any).subscribe(
  ()=> this.rt.navigateByUrl('/residence')
)
}

}
