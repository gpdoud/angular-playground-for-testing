import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { LoggingService } from './logging.service';

describe('LoggingService', () => {

  let url = 'http://localhost:53911/api/logs';

  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => { 
    TestBed.configureTestingModule({
      providers: [ HttpClientTestingModule ]
    });

    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('can test HttpClient.List', () => {
    httpClient.get<any[]>(url).subscribe(logs => {
      expect(logs).toBeDefined();
    });
  });
});
