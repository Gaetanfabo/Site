import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdinateursPortablesComponent } from './ordinateurs-portables.component';

describe('OrdinateursPortablesComponent', () => {
  let component: OrdinateursPortablesComponent;
  let fixture: ComponentFixture<OrdinateursPortablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdinateursPortablesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdinateursPortablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
