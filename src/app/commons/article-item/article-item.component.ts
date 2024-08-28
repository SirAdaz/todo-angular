import { Component, EventEmitter, Input, Output } from '@angular/core';
import Article from '../../model/article.model';

@Component({
  selector: 'app-article-item',
  standalone: true,
  imports: [],
  templateUrl: './article-item.component.html',
  styleUrl: './article-item.component.css'
})
export class ArticleItemComponent {

  @Input()
  article!: Article

  @Input() count!:number

  @Output() onIncrement: EventEmitter<number> = new EventEmitter()

  hidden:boolean = false

  toogle(){
    this.hidden = !this.hidden
  }

  up(){
    this.onIncrement.emit(this.count)
  }

}
