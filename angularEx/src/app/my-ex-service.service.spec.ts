import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { MyExServiceService } from './my-ex-service.service';

describe('MyExService Service', () => {
  beforeEachProviders(() => [MyExServiceService]);

  it('should ...',
      inject([MyExServiceService], (service: MyExServiceService) => {
    expect(service).toBeTruthy();
  }));
});
