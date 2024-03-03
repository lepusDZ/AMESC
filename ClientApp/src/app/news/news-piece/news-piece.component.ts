import { Component, Input } from '@angular/core';

@Component({
  selector: 'news-piece',
  templateUrl: './news-piece.component.html',
  styleUrl: './news-piece.component.css'
})
export class NewsPieceComponent {
  @Input() newsItem: any = {};
}
