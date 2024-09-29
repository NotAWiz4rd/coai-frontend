import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueConfiguratorComponentComponent } from './venue-configurator-component.component';

describe('VenueConfiguratorComponentComponent', () => {
  let component: VenueConfiguratorComponentComponent;
  let fixture: ComponentFixture<VenueConfiguratorComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VenueConfiguratorComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VenueConfiguratorComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
