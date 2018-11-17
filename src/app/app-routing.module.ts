import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoggingListComponent } from './logging/logging-list/logging-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/logs', pathMatch: 'full' },
  { path: 'logs', component: LoggingListComponent },
  { path: '**', component: LoggingListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
