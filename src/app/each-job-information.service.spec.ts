import { TestBed, inject } from '@angular/core/testing';

import { EachJobInformationService } from './each-job-information.service';

describe('EachJobInformationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EachJobInformationService]
    });
  });

  it('should be created', inject([EachJobInformationService], (service: EachJobInformationService) => {
    expect(service).toBeTruthy();
  }));
});
