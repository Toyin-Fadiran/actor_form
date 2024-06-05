import { Component } from '@angular/core';
import { Actor } from '../../actor';
//import { AnyARecord } from 'dns';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-actor-form',
  templateUrl: './actor-form.component.html',
  standalone: true, // Add this line to mark the component as standalone,
  styleUrl: './actor-form.component.css',
  imports: [FormsModule, CommonModule],
})
export class ActorFormComponent {

  model: 
  { 
    name: string; 
    skill: string; 
    studio?: string 
  };
  skills: string[];
  submitted: boolean = false;

  constructor() {
    // this.model = {
    //   name: '',
    //   studio: '',
    //   skill: ''
    // };

    this.skills = ['Method Acting', 'Singing', 'Dancing', 'Swordfighting'];
    this.model = new Actor(-1, "TestName", this.skills[0], "CW Productions");
    //this.submitted = false;
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.model);
  }

  newActor() {
    this.model = { name: '', studio: '', skill: '' };
    this.submitted = false;
  }

    // Reveal in html:
  //   Name via form.controls = {{showFormControls(actorForm)}}
  showFormControls(form: any) {
    return form && form.controls.name && form.controls.name.value; // Tom Cruise
  }
}