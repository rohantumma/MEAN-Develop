import { Component } from "@angular/core";

import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-form-exp',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})




export class FormComponentExp {
  form: FormGroup;
  favoriteSeason: string;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];

  onSavePost(){

  }
  onSelect()
  {

  }
}
