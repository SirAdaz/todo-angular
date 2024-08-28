import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Tache from '../../model/tache.model';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {

// Input a faire
  @Input()
  nomTaskFormEnfant!: Tache

// Output a faire
  @Output() onNomTaskFormEnfant: EventEmitter<Tache> = new EventEmitter()

  up(){
    this.onNomTaskFormEnfant.emit(this.nomTaskFormEnfant)
  }


}
