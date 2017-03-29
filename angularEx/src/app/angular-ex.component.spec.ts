import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { AngularExAppComponent } from '../app/angular-ex.component';

beforeEachProviders(() => [AngularExAppComponent]);

describe('App: AngularEx', () => {
  it('should create the app',
      inject([AngularExAppComponent], (app: AngularExAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angular-ex works!\'',
      inject([AngularExAppComponent], (app: AngularExAppComponent) => {
    expect(app.title).toEqual('angular-ex works!');
  }));
});
