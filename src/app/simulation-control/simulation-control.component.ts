import {Component} from '@angular/core';
import {CoaiApiService} from '../services/coai-api.service';
import {MatCard, MatCardTitle} from "@angular/material/card";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-simulation-control',
  standalone: true,
  imports: [
    MatCard,
    MatCardTitle,
    MatButton
  ],
  templateUrl: './simulation-control.component.html'
})
export class SimulationControlComponent {
  constructor(private coaiApi: CoaiApiService) {
  }

  startSimulation() {
    this.coaiApi.startSimulation().subscribe(response => console.log('Simulation started:', response));
  }

  pauseSimulation() {
    this.coaiApi.pauseSimulation().subscribe(response => console.log('Simulation paused:', response));
  }

  resumeSimulation() {
    this.coaiApi.resumeSimulation().subscribe(response => console.log('Simulation resumed:', response));
  }
}
