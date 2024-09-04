import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateRoadComponent } from './pages/create-road/create-road.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import{HttpClientModule} from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { HomeComponent } from './home/home.component';
import { RoadListComponent } from './pages/road-list/road-list.component';
import {MatTableModule} from '@angular/material/table';
import { RoadDetailsComponent } from './pages/road-details/road-details.component';
import {MatListModule} from '@angular/material/list';
import { UpdateRoadComponent } from './pages/update-road/update-road.component';
import { TrafficDataComponent } from './pages/traffic-data/traffic-data.component';



import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [
    
    AppComponent,
    CreateRoadComponent,
    NavbarComponent,
    HomeComponent,
    RoadListComponent,
    RoadDetailsComponent,
    UpdateRoadComponent,
    TrafficDataComponent,
  
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatListModule,
    BrowserAnimationsModule,
    MatSliderModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
