import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
const routes = [
    {
        path: '',
        redirectTo: 'location',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
    },
    {
        path: 'location',
        loadChildren: () => import('./pages/location/location.module').then(m => m.LocationPageModule)
    },
    {
        path: 'create-post',
        loadChildren: () => import('./pages/create-post/create-post.module').then(m => m.CreatePostPageModule)
    },
    {
        path: 'comments',
        loadChildren: () => import('./pages/comments/comments.module').then(m => m.CommentsPageModule)
    },
    {
        path: 'error',
        loadChildren: () => import('./pages/error/error.module').then(m => m.ErrorPageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [
            RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
        ],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map