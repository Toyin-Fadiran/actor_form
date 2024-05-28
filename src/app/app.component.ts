import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActorFormComponent } from './actor-form/actor-form/actor-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true, // Add this line to mark the component as standalone,
  imports: [FormsModule, CommonModule, ActorFormComponent],
})
export class AppComponent {
  title = 'actor-form-app';
}
