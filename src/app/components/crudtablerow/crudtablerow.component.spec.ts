import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudtablerowComponent } from './crudtablerow.component';

describe('CrudtablerowComponent', () => {
  let component: CrudtablerowComponent;
  let fixture: ComponentFixture<CrudtablerowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudtablerowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudtablerowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
