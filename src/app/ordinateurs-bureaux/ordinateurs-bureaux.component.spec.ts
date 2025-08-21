import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdinateursBureauxComponent } from './ordinateurs-bureaux.component';

describe('OrdinateursBureauxComponent', () => {
  let component: OrdinateursBureauxComponent;
  let fixture: ComponentFixture<OrdinateursBureauxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdinateursBureauxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdinateursBureauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
