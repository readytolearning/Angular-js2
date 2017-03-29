import { Injectable } from '@angular/core';

@Injectable()
export class MyExServiceService {

  constructor() {}
  getData(){
   return ['venkat','vinod','satya'];
  }
}
