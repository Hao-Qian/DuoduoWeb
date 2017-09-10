import { Injectable } from '@angular/core';
import { IVideo } from './IVideo';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';



@Injectable()
export class VideosService{

    private _videsApi = 'http://localhost:50593/api/Videos';
    constructor(private _http: HttpClient){

    }

    getData(): Observable<IVideo[]>{
        return this._http.get<IVideo[]>(this._videsApi);
    }
     getVideos(): IVideo[]{

        return  [
             {
                "Name": "lala",
                "Extension" : "swc",
                "Duration":1200,
                "FileSize": 1200,
                "Creator":"qianh",
                "CreateTime": "createtime",
                "ModifiedTime":"mtime",
                "Src" :"http://localhost:50593/api/Videos/1/mp4",
                "Age" :100
            },

            {
                "Name": "lala",
                "Extension" : "swc",
                "Duration":1200,
                "FileSize": 1200,
                "Creator":"qianh",
                "CreateTime": "createtime",
                "ModifiedTime":"mtime",
                "Src" :"http://localhost:50593/api/Videos/IMG_0124/mp4",
                "Age" :100
            },
            {
                "Name": "lala",
                "Extension" : "swc",
                "Duration":1200,
                "FileSize": 1200,
                "Creator":"qianh",
                "CreateTime": "createtime",
                "ModifiedTime":"mtime",
                "Src" :"http://localhost:50593/api/Videos/IMG_0125/mp4",
                "Age" :100
            }, 
            
            {
                "Name": "lala",
                "Extension" : "swc",
                "Duration":1200,
                "FileSize": 1200,
                "Creator":"qianh",
                "CreateTime": "createtime",
                "ModifiedTime":"mtime",
                "Src" :"http://localhost:50593/api/Videos/IMG_0126/mp4",
                "Age" :100
            }  
            
        ];
    }
}