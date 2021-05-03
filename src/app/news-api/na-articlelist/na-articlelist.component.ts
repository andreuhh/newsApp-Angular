import { Component, OnInit } from '@angular/core';
import { NewsApiService, Article } from '../news-api.service';

@Component({
  selector: 'app-na-articlelist',
  templateUrl: './na-articlelist.component.html',
  styleUrls: ['./na-articlelist.component.scss']
})
export class NaArticlelistComponent implements OnInit {
  articles: Article[];

  constructor(private newsApiService: NewsApiService) {
    this.newsApiService.pagesOutput.subscribe((articles) => {
      this.articles = articles;
    });
    this.newsApiService.getPage(1);
  }

  ngOnInit(): void {
  }

}
