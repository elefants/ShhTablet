import { Injectable, EventEmitter } from '@angular/core';
import { HubConnection, HubConnectionBuilder, LogLevel } from '@aspnet/signalr';
import { EndpointService } from '../endpoint/endpoint.service';

@Injectable({
  providedIn: 'root'
})
export class NoiseService {

  private _hubConnection: HubConnection;
  noiseStatistics = new EventEmitter<NoiseStatistics>();

  constructor(endpointService: EndpointService) {
    const baseAddress = endpointService.getNoiseEndpoint();
    this._hubConnection = new HubConnectionBuilder()
      .withUrl(baseAddress + '/hub/noise')
      .configureLogging(LogLevel.Information)
      .build();
    this.registerHandlers();
    this.connect();
  }

  connect() {
    console.log('Connecting to NoiseHub');
    this._hubConnection.start().catch(err => console.error(err.toString()));
  }

  disconnect() {
    this._hubConnection.stop();
  }

  private registerHandlers() {
    // this._hubConnection.onclose(x => {
    //   console.log('NoiseHub connection closed');
    //   setTimeout(() => {
    //     this.connect();
    //   }, 1000);
    // });

    this._hubConnection.on('NewStatistics', (data: NoiseStatistics) => {
      this.noiseStatistics.next(data);
    });
  }
}

export class NoiseStatistics {
  from: number;
  to: number;
  avgValue: number;
}
