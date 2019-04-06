import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { WorksComponent } from './works/works.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RouterModule, Routes } from '@angular/router';
import { NavgComponent } from './navg/navg.component';

import { ConfigService } from './config.service';
import { PostService } from './services/post.service';

import { WorkslightboxComponent } from './workslightbox/workslightbox.component';
import { ServeComponent } from './serve/serve.component';
import { LoginComponent } from './login/login.component';
import { SignComponent } from './sign/sign.component';
import { RouteGuradeService } from './route-gurade.service';
import { UsersinfoComponent } from './usersinfo/usersinfo.component';
import { PostsComponent } from './posts/posts.component';
import { PostFormComponent } from './posts/post-form/post-form.component';
import { PageComponent } from './page/page.component';
import { SinglePostComponent } from './single-post/single-post.component';


const appRoutes: Routes = [
  { path: '', component: FrontPageComponent },
  { path: 'front-page', component: FrontPageComponent },
  { path: 'works', component: WorksComponent },
  { path: 'about-us', component: AboutUsComponent},
  { path: 'contact-us', component: ContactUsComponent ,canActivate:[RouteGuradeService] },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignComponent },
  { path: 'users-info', component: UsersinfoComponent },
  { path: 'blogposts', component: PostsComponent },
  { path: 'post/:id', component: SinglePostComponent },
  { path: '**', component: PageComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    FrontPageComponent,
    WorksComponent,
    AboutUsComponent,
    ContactUsComponent,
    NavgComponent,
    WorkslightboxComponent,
    ServeComponent,
    LoginComponent,
    SignComponent,
    UsersinfoComponent,
    PostsComponent,
    PostFormComponent,
    PageComponent,
    SinglePostComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ConfigService,PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
