import { Component, Input } from '@angular/core';
import Tache from '../../model/tache.model';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input() item!:Tache
  

  deleteTask(value: any){
    value.visible = false
  }
  
}
