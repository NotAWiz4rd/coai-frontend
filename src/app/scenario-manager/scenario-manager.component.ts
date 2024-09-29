import {Component} from '@angular/core';
import {CoaiApiService} from '../services/coai-api.service';
import {MatCard, MatCardTitle} from "@angular/material/card";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-scenario-manager',
  standalone: true,
  imports: [
    MatCard,
    MatLabel,
    MatCardTitle,
    MatFormField,
    MatInput,
    FormsModule,
    MatButton
  ],
  templateUrl: './scenario-manager.component.html'
})
export class ScenarioManagerComponent {
  scenarioId: string = '';

  constructor(private coaiApi: CoaiApiService) {
  }

  saveScenario() {
    const scenarioData = {};  // Replace with actual scenario data from form or storage
    this.coaiApi.saveScenario(scenarioData).subscribe(response => {
      console.log('Scenario saved:', response);
    });
  }

  loadScenario() {
    this.coaiApi.loadScenario(this.scenarioId).subscribe(response => {
      console.log('Scenario loaded:', response);
      // You can further process the response to populate the frontend with loaded data
    });
  }
}
