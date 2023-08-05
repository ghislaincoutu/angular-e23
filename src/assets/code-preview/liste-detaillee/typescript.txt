import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Module01Service, Data39 } from '../module01.service';

@Component({
  selector: 'app-liste-detaillee',
  templateUrl: './liste-detaillee.component.html',
  styleUrls: ['./liste-detaillee.component.scss']
})
export class ListeDetailleeComponent implements OnInit {
  dataList39!: Data39[];

  constructor(
    public http34: HttpClient,
    private module34: Module01Service) {
  }

  ngOnInit(): void {
    this.module34.getData39().subscribe((response01: Data39[]) => {
      response01.forEach(
        (item: Data39) => (item['document39'] = this.getHTMLFile(item.htmlfile))
      );
      this.dataList39 = response01;
    });
   }

  private getHTMLFile(document85: string) {
    return this.http34.get(document85, { responseType: 'text' });
  }

}
