import { Component } from '@angular/core';

@Component({
  selector: 'news-list',
  templateUrl: './news-list.component.html',
  styleUrl: './news-list.component.css'
})
export class NewsListComponent {
  currentPage = 1;
  itemsPerPage = 4;
  newsItems = [
    // Mock data 
    { id: 1, title: "News Title 1", body: "News Body 1", footer: "1 minute ago" },
    { id: 2, title: "News Title 2", body: "News Body 2", footer: "2 minutes ago" },
    { id: 3, title: "News Title 3", body: "News Body 3", footer: "3 minutes ago" },
    { id: 4, title: "News Title 4", body: "News Body 4", footer: "4 minutes ago" },
    { id: 5, title: "News Title 5", body: "News Body 5", footer: "5 minutes ago" },
  ];

  get paginatedNewsItems() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.newsItems.slice(startIndex, startIndex + this.itemsPerPage);
  }

  nextPage() {
    // Ensure not to exceed the number of available pages
    const maxPage = Math.ceil(this.newsItems.length / this.itemsPerPage);
    if (this.currentPage < maxPage) this.currentPage++;
  }

  previousPage() {
    // Ensure not to go below page 1
    if (this.currentPage > 1) this.currentPage--;
  }
}
