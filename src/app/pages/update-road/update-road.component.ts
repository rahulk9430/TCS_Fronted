import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoadService } from 'src/app/services/road.service';

@Component({
  selector: 'app-update-road',
  templateUrl: './update-road.component.html',
  styleUrls: ['./update-road.component.css']
})
export class UpdateRoadComponent implements OnInit {
  
  public road={
    roadId:'',
    roadName:'',
    detectorName:'',
    detectorStatus:'',
  }
  id!: number;
  
  constructor(private route:ActivatedRoute,
    private roadService:RoadService,private router:Router){}

  ngOnInit(): void {


this.id=this.route.snapshot.params['roadId'];
this.roadService.getRoad(this.id).subscribe((data:any)=>{
  this.road=data;
  console.log(data);
})
   
  }


  formSubmit(){

    this.roadService.updateRoad(this.id,this.road).subscribe((data:any)=>{
      this.backButton();
      });



  }

  backButton(){
    this.router.navigate(['/road-list']);
}


}
