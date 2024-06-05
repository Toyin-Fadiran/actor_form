import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ActorFormComponent } from './actor-form/actor-form/actor-form.component';


const routeConfig: Routes = [
    {
        path: '',
        component: HomeComponent,
        data: { title: 'Home page' } // Use 'data' instead of 'title'
      },  {
        path: 'actors',
        component: ActorFormComponent,
        data: { title: 'Create actors' } // Change the title accordingly
      }
];

export default routeConfig;