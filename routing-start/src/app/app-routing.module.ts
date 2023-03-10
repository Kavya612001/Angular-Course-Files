import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuardService } from "./auth-guard.service";
import { ErrorComponent } from "./error/error.component";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { CanDeactivateGuard } from "./servers/edit-server/can-deactive-guard.service";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerResolver } from "./servers/server-resolver.service";
import { ServerComponent } from "./servers/server/server.component";
import { ServersComponent } from "./servers/servers.component";
import { UserComponent } from "./users/user/user.component";
import { UsersComponent } from "./users/users.component";


const appRoutes: Routes = [
    {path: '', component: HomeComponent}, //deafult route
    {path: 'users', component: UsersComponent, children: [
      {path: ':id/:name', component: UserComponent},
    ]},
    {path: 'servers', 
    // canActivate: [AuthGuardService], 
    canActivateChild: [AuthGuardService],
    component: ServersComponent, 
    children: [
      {path: ':id', component: ServerComponent, resolve: {server: ServerResolver}},
      {path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard]}
    ]},
    // {path: 'not-found', component: PageNotFoundComponent},
    {path: 'not-found', component: ErrorComponent, data: {message: 'Page not found!'}},
    {path: '**', redirectTo: '/not-found'} //** - catches all the routes that dont match
  ];

@NgModule({
    imports: [
        // RouterModule.forRoot(appRoutes, {useHash: true})
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

   
}

