import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CarDetail } from '../models/car-detail';
import { ItemResponseModel } from '../models/itemResponseModel';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {

  constructor(private httpClient:HttpClient) { }

  getCarDetail(carId:number):Observable<ItemResponseModel<CarDetail>>{
    let newPath = environment.apiUrl + "cars/getcardetail?carId="+carId
    return this.httpClient.get<ItemResponseModel<CarDetail>>(newPath)
  }
}