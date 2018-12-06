import { Injectable, EventEmitter } from '@angular/core';
import { HubConnection, HubConnectionBuilder, LogLevel } from '@aspnet/signalr';
import { EndpointService } from '../endpoint/endpoint.service';
import { DBMeter } from '@ionic-native/db-meter/ngx';

@Injectable({
  providedIn: 'root'
})
export class NoiseService {

  private _hubConnection: HubConnection;
  noiseSample = new EventEmitter<any>();
  noiseStatistics = new EventEmitter<NoiseStatistics>();

  constructor(private endpointService: EndpointService,
    private dbMeter: DBMeter) {
    this.initializeHub();
  }

  start() {
    this._hubConnection.start().catch(err => console.error(err.toString()));
    this.dbMeter.start().subscribe(data => {
      this.noiseSample.next(data);
    });
  }

  stop() {
    this._hubConnection.stop();
    this.dbMeter.stop();
  }

  private initializeHub() {
    const baseAddress = this.endpointService.getNoiseEndpoint();
    this._hubConnection = new HubConnectionBuilder()
      .withUrl(baseAddress + '/hub/noise')
      .configureLogging(LogLevel.Information)
      .build();
    this.registerHandlers();
    this.start();
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
