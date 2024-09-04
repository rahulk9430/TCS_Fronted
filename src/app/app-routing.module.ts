import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateRoadComponent } from './pages/create-road/create-road.component';
import { HomeComponent } from './home/home.component';
import { RoadListComponent } from './pages/road-list/road-list.component';
import { RoadDetailsComponent } from './pages/road-details/road-details.component';
import { UpdateRoadComponent } from './pages/update-road/update-road.component';
import { TrafficDataComponent } from './pages/traffic-data/traffic-data.component';

const routes: Routes = [
  {
    path:"create-road",component:CreateRoadComponent,pathMatch:'full'
  },
  {
    path:'',component:HomeComponent,pathMatch:'full'
  },
  {
    path:'road-list',component:RoadListComponent,pathMatch:'full'
  },
  {
    path:'road-details/:roadId',component:RoadDetailsComponent,pathMatch:'full'
  },
  {
    path:'update-road/:roadId',component:UpdateRoadComponent,pathMatch:'full'
  },
  {
    path:'traffic-data',component:TrafficDataComponent,pathMatch:'full'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
