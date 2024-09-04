import { Component ,OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor( ){}

  imagePath: string = 'assets/traffic.jpg';

  imageWidth: number = 1600; // Adjust the width to your desired value
  imageHeight: number = 550; // Adjust the height to your desired value

  ngOnInit(): void {




  }

}
