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
                        () => {});
  }
}
