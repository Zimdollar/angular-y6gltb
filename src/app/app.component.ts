import { Component, OnInit } from '@angular/core';
import { Observable, Subject, } from 'rxjs';
import { MinerlistService } from "./minerlist.service"
import { Miners } from './miner.model'
import {Subscription} from 'rxjs';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  minerlist: Miners[];
  error: any;
   minerid:any = ["smart_bit.minerS9j_2","smart_bit.minerS9j_3","smart_bit.minerT9_3"];
    //this.getmachineAlias()
rows2 = [{ last_share: 1553109385, score: "1056451.95403", alive: true, shares: 401408, hashrate: 1456242 }];
sub: Subscription;
  sub2: Subscription;
   rows: any =[];
   data:any = [];
  constructor(public miner: MinerlistService) {

  }
 ngOnInit(
   ) {
     this.data = this.getAll()
console.log(this.data)
    }

    getAll(){
      
    this.sub = this.miner.getminers().subscribe(
      result => {

       let minerid = ["smart_bit.minerS9j_2","smart_bit.minerS9j_3","smart_bit.minerT9_3","smart_bit.minerS9j_10"];
       let value = result['workers'];
       var  rows: any =[];
       let list:any;
      for (let index = 0; index < minerid.length; index++) {
        (function(index){
         list = minerid[index];
        rows = value[list];
     
      })(index);
 this.getvalues(rows)
      }

      } 
    );

    }

    getvalues(values:any=[]){
      console.log(values)
      return values;
    }
 
  //  ngOnDestroy() {
  
  //   this.sub.unsubscribe();
  // }




}
