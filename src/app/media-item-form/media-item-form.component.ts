import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { MediaItemService } from '../media-item.service';
import { lookupLists } from '../providers';

@Component({
  selector: 'app-media-item-form',
  templateUrl: './media-item-form.component.html',
  styleUrls: ['./media-item-form.component.css']
})
export class MediaItemFormComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private mediaItemService: MediaItemService,
    @Inject(lookupLists) private lookupLists,
    private router: Router
  ) {
   }

  ngOnInit() {
    this.form = this.formBuilder.group({
      medium: this.formBuilder.control('Movies'),
      name: this.formBuilder.control('', Validators.compose([
        Validators.pattern('[\\w\\-\\s\\/]+'),
        Validators.required
      ])),
      category: this.formBuilder.control(''),
      year: this.formBuilder.control('', this.yearValidator)
    });
  }


  onSubmit(mediaItem) {
    this.mediaItemService.add(mediaItem).subscribe(() => {
      this.router.navigate(['/', mediaItem.medium]);
    });
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
