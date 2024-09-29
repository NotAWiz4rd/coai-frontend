import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskLogViewerComponent } from './task-log-viewer.component';

describe('TaskLogViewerComponent', () => {
  let component: TaskLogViewerComponent;
  let fixture: ComponentFixture<TaskLogViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskLogViewerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskLogViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
