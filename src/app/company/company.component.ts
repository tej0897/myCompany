import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Company } from './company';
import { CompanyService } from './company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {


companyObj : Company = new Company();
companyList: Array<Company> = [];
data:{}|any;

  constructor(private companyService: CompanyService) {
      this.getCompanyDetails();
   }

  ngOnInit(): void {
  }

  addCompany(){
    this.companyService.addCompany(this.companyObj).subscribe(
      (data) => {
        this.data = JSON.stringify(data);
        this.companyList.push(this.data);
        console.log(data);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getCompanyDetails() {
    this.companyService.getCompany().subscribe(
      (data) => {
        this.companyList = Object.values(data);
        console.log(this.companyList);
       // this.companyDetails = resp;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  updateCompany(company: Company){

  }

  deleteCompany(company: Company){
    
  }

}
