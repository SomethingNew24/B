import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './admin/home/home.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { PostsComponent } from './admin/dashboard/posts/posts.component';
import { PagesComponent } from './admin/dashboard/pages/pages.component';
import { CommentsComponent } from './admin/dashboard/comments/comments.component';
import { SettingsComponent } from './admin/dashboard/settings/settings.component';

const routes: Routes = [
  {
    path: '',component:HomeComponent,
    children: [
      { path:'dashboard', component: DashboardComponent },
      { path:'posts', component: PostsComponent },
      { path:'pages', component: PagesComponent },
      { path:'settings', component: SettingsComponent },
      { path:'comments', component: CommentsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
