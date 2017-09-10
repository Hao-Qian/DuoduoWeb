import { Component, OnInit } from '@angular/core';
import { VideosService } from './videos.service';
import { IVideo } from './IVideo';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css'],
  providers:[VideosService]
})
export class VideosComponent implements OnInit {
  private videos: IVideo[]
  private errorMessage : any[];
  constructor(private _videosService: VideosService) { 
  }

  ngOnInit() {
    this._videosService.getData().subscribe(
      videos => this.videos = videos,
      error => this.errorMessage = <any>error);

}
}
