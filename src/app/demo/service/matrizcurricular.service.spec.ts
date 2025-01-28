import { TestBed } from '@angular/core/testing';

import { MatrizcurricularService } from './matrizcurricular.service';

describe('MatrizcurricularService', () => {
  let service: MatrizcurricularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatrizcurricularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
