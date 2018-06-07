import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-media-item-form',
  templateUrl: './media-item-form.component.html',
  styleUrls: ['./media-item-form.component.css']
})
export class MediaItemFormComponent implements OnInit {

  form: FormGroup;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      medium: new FormControl('Movies'),
      name: new FormControl('', Validators.compose([
        Validators.pattern('[\\w\\-\\s\\/]+'),
        Validators.required
      ])),
      category: new FormControl(''),
      year: new FormControl('', this.yearValidator)
    });
  }


  onSubmit(mediaItem) {
    console.log(mediaItem);
  }

  // validator return null when valid, else return an object
  yearValidator(control) {
    if (control.value.trim().length === 0) {
      return null;
    }

    const year = parseInt(control.value, 10);
    const min = 1900;
    const max = 2100;
    if (year >= 1900 && year <= 2100) {
      return null;
    }

    return {'year' : `invalid input, year must be between ${min} and ${max}`};

  }
}
