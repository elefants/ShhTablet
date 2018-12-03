import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EndpointService {

  private endpoints = {
    api: {
      dev: 'https://localhost:44371',
      prod: '',
    }
  };

  constructor() { }

  getNoiseEndpoint() {
    return environment.production ?
      this.endpoints.api.prod :
      this.endpoints.api.dev;
  }
}
