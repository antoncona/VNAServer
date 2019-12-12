import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})


export class NewsComponent implements OnInit {

 articles: any[]; 
 articles1: any[]; 
 articles2: any[]; 
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getNews().subscribe((data) => {
      console.log(data);
      this.articles1 = data.articles;
    })

    this.apiService.getNews2().subscribe((data) => {
      console.log(data);
      this.articles2 = data.articles;
    });


  }

}
