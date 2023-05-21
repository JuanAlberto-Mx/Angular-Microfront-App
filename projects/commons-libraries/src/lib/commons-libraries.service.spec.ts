import { TestBed } from '@angular/core/testing';

import { CommonsLibrariesService } from './commons-libraries.service';

describe('CommonsLibrariesService', () => {
  let service: CommonsLibrariesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonsLibrariesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
