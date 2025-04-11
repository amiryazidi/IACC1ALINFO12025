import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailResComponent } from './detail-res.component';

describe('DetailResComponent', () => {
  let component: DetailResComponent;
  let fixture: ComponentFixture<DetailResComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailResComponent]
    });
    fixture = TestBed.createComponent(DetailResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
