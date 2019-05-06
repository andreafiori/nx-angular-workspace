import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { VersionsComponent } from './versions/versions.component';
import { FeaturesComponent } from './features/features.component';

const routes: Routes = [
  {
    path: 'ng',
    children: [
      { path: 'versions', component: VersionsComponent },
      { path: 'features', component: FeaturesComponent },
    ]
  }
];

@NgModule({
  declarations: [
    VersionsComponent,
    FeaturesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PagesModule { }
