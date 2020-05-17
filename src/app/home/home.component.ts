import { Component, OnInit } from '@angular/core';
import { VaanigaServiceService } from '../vaaniga-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  
  title = "FMCG - Companies";
  fmcgCompanies : any;

  productMap = new Map<String, any[]>();

  constructor(private vaanigaServiceService: VaanigaServiceService) {
  }

  ngOnInit(): void {
    this.loadFmcgData();
  }

  loadFmcgData() {
    this.vaanigaServiceService
                      .getProductCountBySector('fmcg')
                      .subscribe(
                        res => { 
                          this.fmcgCompanies = res.results;
                        }, 
                        err => {},
                        () => {
                          this.loadProductData();
                        });
  }

  loadProductData() {
    for (let company of this.fmcgCompanies) {
      this.vaanigaServiceService.getProductsForCompanies(company.companyName)
                                .subscribe(
                                  res => {
                                    this.productMap.set(company.companyName, this.extractProduct(res));
                                  }
                                )
    }
  }

  extractProduct(res: any) {
    let productArray = [];
    for (let product of res.results) {
      console.log(product.productName);
      productArray.push(product.productName);
    }
    return productArray;
  }
}
