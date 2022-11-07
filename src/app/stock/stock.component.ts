import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Stock } from './stock';
import { StockService } from './stock.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  constructor(private stockService: StockService) { }

  ngOnInit(): void {
  }

  stockObj: Stock = new Stock();
  stockList: Array<Stock> = [];
  data:{}|any;
  

  addStock(cid:number){
    this.stockService.addStock(cid, this.stockObj).subscribe(
      (data) => {
        this.data = JSON.stringify(data);
        this.stockList.push(this.data);
        console.log(this.stockList);
        alert("Stock details added!");
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
