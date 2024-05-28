import { Component } from '@angular/core';
import { Actor } from '../../actor';
import { AnyARecord } from 'dns';

@Component({
  selector: 'app-actor-form',
  templateUrl: './actor-form.component.html',
  standalone: true, // Add this line to mark the component as standalone,
  styleUrl: './actor-form.component.css'
})
export class ActorFormComponent {

  skills = ['Method Acting', 'Singing', 'Dancing', 'Swordfighting'];

  //public skills: any[] = ['Method Acting', 'Singing', 'Dancing', 'Swordfighting'];

model =  new Actor(18, 'Tom Cruise', this.skills[0], 'CW Productions');

submitted = false;

onSubmit() {
  this.submitted = true;
}

heroine(): Actor {
  const myActress = new Actor(42, 'Marilyn Monroe', 'Singing');
  console.log('My actress is called ' + myActress.name); // "My actress is called Marilyn"

  return myActress;

}

newActor() {
    this.model = new Actor(42, '', '');
}


}
