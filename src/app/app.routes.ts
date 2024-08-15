import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PostsComponent } from './pages/posts/posts.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'posts/:id',
        component: PostsComponent,
    }
];
