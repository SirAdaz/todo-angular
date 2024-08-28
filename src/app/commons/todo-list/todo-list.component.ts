import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardComponent } from '../card/card.component';
import { AddTaskComponent } from '../add-task/add-task.component';
import Tache from '../../model/tache.model';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [FormsModule, CardComponent, AddTaskComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {

  taskForm : Tache = {
    nom: "",
    termine: false,
    visible: true
  }

  taches : Tache[] = [
    { nom: "foo", termine: false, visible:true},
    { nom: "bar", termine: false, visible:true},
    { nom: "baz", termine: false, visible:true}, 
]


ajouterTask(event: Tache){
  this.taches.push(event)
}
}
