import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MenuModule, PanelModule,DataGridModule} from 'primeng/primeng';
import { AppComponent } from './app.component';
import { SettingsComponent } from './settings/settings.component';
import { PhotosComponent} from './photos/photos.component';
import { VideosComponent} from './videos/videos.component';
import { ProfilesComponent} from './profiles/profiles.component';
import {RouterModule, Routes} from "@angular/router";
import { HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';


const appRoutes: Routes = [
  { path: "", redirectTo: "/videos", pathMatch: "full" },
  { path: "videos", component: VideosComponent },
  { path: "photos",  component: PhotosComponent },
  { path: "profiles", component: ProfilesComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    PhotosComponent,
    VideosComponent,
    ProfilesComponent


  ],
  imports: [
    BrowserModule,
    MenuModule,
    PanelModule,
    DataGridModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    HttpModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
