import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LyceumComponent } from './lyceum.component';

describe('LyceumComponent', () => {
  let component: LyceumComponent;
  let fixture: ComponentFixture<LyceumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LyceumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LyceumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
