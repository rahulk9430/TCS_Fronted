import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoadService } from 'src/app/services/road.service';

@Component({
  selector: 'app-road-details',
  templateUrl: './road-details.component.html',
  styleUrls: ['./road-details.component.css']
})
export class RoadDetailsComponent implements OnInit  {
  public road:any={
    roadId:'',
    roadName:'',
    detectorName:'',
    detectorStatus:''
  }
  roadId!: number;
  displayedColumns: string[] = ['roadId','roadName', 'detectorName', 'detectorStatus'];
  constructor(private roadService:RoadService,private route:ActivatedRoute,private router:Router){}

  ngOnInit(): void {

    this.roadId=this.route.snapshot.params['roadId'];

    this.roadService.getRoad(this.roadId).subscribe((data:any)=>{
      this.road=data;
    }
    );       
  }

  backButton(){
      this.router.navigate(['/road-list']);
  }

}
