import { Injectable } from '@angular/core';

@Injectable()
export class AppService{
    myGlobalVar: Array<any>=[];
    constructor(){
    }

    setMyGV(val: Array<any>){
      this.myGlobalVar = val;
    }
    add(val:any){
        this.myGlobalVar.push(val);
    }

    getMyGV(){
      return this.myGlobalVar;
    }
}