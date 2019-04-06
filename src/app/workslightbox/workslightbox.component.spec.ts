import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkslightboxComponent } from './workslightbox.component';

describe('WorkslightboxComponent', () => {
  let component: WorkslightboxComponent;
  let fixture: ComponentFixture<WorkslightboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkslightboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkslightboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
