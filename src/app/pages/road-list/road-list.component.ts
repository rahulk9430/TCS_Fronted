import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { RoadService } from 'src/app/services/road.service';

@Component({
  selector: 'app-road-list',
  templateUrl: './road-list.component.html',
  styleUrls: ['./road-list.component.css']
})

export class RoadListComponent implements OnInit {


  public road:any=[
    {roadId:''},
    {roadName:''},
    {detectorName:''},
    {detectorStatus:''}

  ]

  displayedColumns: string[] = ['roadName', 'detectorName', 'detectorStatus','roadId'];

  constructor(private roadService:RoadService,
    private router:Router){}
  ngOnInit(): void {

    this.getRoads();

  }
  getRoads(){
    this.roadService.listOfRoad().subscribe(
      (data:any)=>{
        this.road=data;
        console.log(this.road);
      }
    )
  }
  updateRoad(roadId:number){
    this.router.navigate(['update-road',roadId]);

  }
  deleteRoad(roadId:number){
    this.roadService.deleteRoad(roadId).subscribe((data)=>{
      this.getRoads();
    })

  }
  roadDetails(roadId:number){
    this.router.navigate(['road-details',roadId]);

  }

}
