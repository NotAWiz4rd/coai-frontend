import {Component, OnInit} from '@angular/core';
import {CoaiApiService} from '../services/coai-api.service';
import {MatCard, MatCardTitle} from "@angular/material/card";
import {MatList, MatListItem} from "@angular/material/list";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-task-log-viewer',
  standalone: true,
  imports: [
    MatCard,
    MatCardTitle,
    MatList,
    MatListItem,
    NgForOf
  ],
  templateUrl: './task-log-viewer.component.html'
})
export class TaskLogViewerComponent implements OnInit {
  taskLog: string[] = [];

  constructor(private coaiApi: CoaiApiService) {
  }

  ngOnInit(): void {
    this.loadTaskLog();
  }

  loadTaskLog() {
    this.coaiApi.getTaskLog().subscribe(log => {
      this.taskLog = log;
    });
  }
}
