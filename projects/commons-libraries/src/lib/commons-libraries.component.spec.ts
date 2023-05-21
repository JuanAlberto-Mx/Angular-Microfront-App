import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonsLibrariesComponent } from './commons-libraries.component';

describe('CommonsLibrariesComponent', () => {
  let component: CommonsLibrariesComponent;
  let fixture: ComponentFixture<CommonsLibrariesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommonsLibrariesComponent]
    });
    fixture = TestBed.createComponent(CommonsLibrariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
