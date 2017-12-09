import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthService } from 'app/auth.service';
import { RegisterService } from 'app/register.service';
import { SongsComponent } from './songs/songs.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { URLSearchParams } from '@angular/http/src/url_search_params';
import { SearchService } from 'app/search.service';
import { UploadComponent } from './upload/upload.component';
import { SongService } from 'app/song.service';

const appRoutes : Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'index', component: IndexComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'user/songs', component: SongsComponent},
  {path: 'user/playlists', component: PlaylistsComponent},
  {path: 'user/upload', component: UploadComponent},
  {path: '**', redirectTo: '/index'},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    IndexComponent,
    RegistrationComponent,
    SongsComponent,
    PlaylistsComponent,
    UploadComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes, {enableTracing: true}
    )
  ],
  providers: [AuthService, RegisterService, SearchService, SongService],
  bootstrap: [AppComponent]
})
export class AppModule { }
