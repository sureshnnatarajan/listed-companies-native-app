import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VaanigaServiceService {

  dashBoardEndPoint = environment.invest_api_dashboard_endpoint;
  
  constructor(private http: HttpClient) { }

  public getProductCountBySector(sectorName: String) {
    return this.http.get<any>(this.dashBoardEndPoint + '/productCount/' + sectorName);
  }

}
