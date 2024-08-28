import { Component, EventEmitter} from '@angular/core';
import Contact from '../../model/contact.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  contactForm : Contact = {
    name: "",
    email: "",
    tel: "",
    visible: true
  }

  contacts: Contact[] = [
    { name: 'Angular Basics', email: 'Introduction to Angular...', tel:"0668660518", visible: true },
    { name: 'Angular Basics2', email: 'Introduction to Angular...2', tel:"0668660517", visible: true },
    { name: 'Angular Basics3', email: 'Introduction to Angular...3', tel:"0668660516", visible: true }
  ];
  deleteContact(value: any){
    value.visible = false
  }
  ajouterContact(){
    this.contacts.push(this.contactForm)
  }
}