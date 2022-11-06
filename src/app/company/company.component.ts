import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CompanyService } from './company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
companyID: any;
companyName: any;
companyCEO: any;
turnover: any;
website: any;

  constructor(private companyService: CompanyService) {
    this.getCompanyDetails();
   }

  ngOnInit(): void {
  }

  companyDetails = null as any;


  addCompany(companyData: NgForm){
    this.companyService.addCompany(companyData.value).subscribe(
      (resp) => {
        console.log(resp);
        companyData.reset();
        this.getCompanyDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getCompanyDetails() {
    this.companyService.getCompany().subscribe(
      (resp) => {
        console.log(resp);
        this.companyDetails = resp;
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
