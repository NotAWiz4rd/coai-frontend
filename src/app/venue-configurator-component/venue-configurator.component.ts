import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {CoaiApiService} from '../services/coai-api.service';
import {MatCard, MatCardTitle} from "@angular/material/card";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-venue-configurator',
  standalone: true,
  imports: [
    MatCard,
    MatLabel,
    MatCardTitle,
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    MatButton
  ],
  templateUrl: './venue-configurator.component.html'
})
export class VenueConfiguratorComponent implements OnInit {
  venueForm: FormGroup;

  constructor(private fb: FormBuilder, private coaiApi: CoaiApiService) {
    this.venueForm = this.fb.group({
      venueName: [''],
      employeesCount: ['']
    });
  }

  ngOnInit(): void {

  }

  onSubmit() {
    if (this.venueForm.valid) {
      this.coaiApi.saveScenario(this.venueForm.value).subscribe(response => {
        console.log('Scenario saved:', response);
      });
    }
  }
}
