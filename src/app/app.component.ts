import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatToolbar} from "@angular/material/toolbar";
import {VenueConfiguratorComponent} from "./venue-configurator-component/venue-configurator.component";
import {SimulationControlComponent} from "./simulation-control/simulation-control.component";
import {EventCreatorComponent} from "./event-creator/event-creator.component";
import {ScenarioManagerComponent} from "./scenario-manager/scenario-manager.component";
import {TaskLogViewerComponent} from "./task-log-viewer/task-log-viewer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbar, VenueConfiguratorComponent, SimulationControlComponent, EventCreatorComponent, ScenarioManagerComponent, TaskLogViewerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'coai-frontend';
}
