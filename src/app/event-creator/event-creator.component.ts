import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {CoaiApiService} from '../services/coai-api.service';
import {MatCard, MatCardTitle} from "@angular/material/card";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-event-creator',
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
  templateUrl: './event-creator.component.html'
})
export class EventCreatorComponent implements OnInit {
  eventForm: FormGroup;

  constructor(private fb: FormBuilder, private coaiApi: CoaiApiService) {
    this.eventForm = this.fb.group({
      eventName: [''],
      timestep: [''],
      details: ['']
    });
  }

  ngOnInit(): void {

  }

  onSubmit() {
    if (this.eventForm.valid) {
      this.coaiApi.addEvent(this.eventForm.value).subscribe(response => {
        console.log('Event added:', response);
      });
    }
  }
}
