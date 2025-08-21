import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipReseauComponent } from './equip-reseau.component';

describe('EquipReseauComponent', () => {
  let component: EquipReseauComponent;
  let fixture: ComponentFixture<EquipReseauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EquipReseauComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquipReseauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
