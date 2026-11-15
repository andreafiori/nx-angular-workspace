import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Modules
import { FormSamplesModule } from './form-samples/form-samples.module';
import { ApiMediaAggregatorModule } from './api-media-aggregator/api-media-aggregator.module';
import { RxJsSamplesModule } from './rx-js-samples/rx-js-samples.module';
import { SeoToolsModule } from './seo-tools/seo-tools.module';
import { SharedModule } from './shared/shared.module';
import { ComponentInteractionsModule } from './component-interactions/component-interactions.module';
import { UniqueIdModalModule } from './unique-id-modal/unique-id-modal.module';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { CodingChallengesModule } from './coding-challenges/coding-challenges.module';
import { AutofocusDirective } from './shared/directives/autofocus.directive';

const routes: Routes = [
  { path: '', component: HomeComponent },
  // { path: 'pages', loadChildren: './pages/pages.module#PagesModule' },
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
  },
  { path: 'component-interactions', loadChildren: () => ComponentInteractionsModule },
  { path: 'form-validation', loadChildren: () => FormSamplesModule },
  { path: 'unique-id-modal', loadChildren: () => UniqueIdModalModule },
  { path: 'coding-challenges', loadChildren: () => CodingChallengesModule },
  { path: 'seo-tools', loadChildren: () => SeoToolsModule },
  { path: '**', component: PageNotFoundComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    AutofocusDirective
  ],
  imports: [
    SharedModule,
    SeoToolsModule,
    ComponentInteractionsModule,
    UniqueIdModalModule,
    FormSamplesModule,
    CodingChallengesModule,
    ApiMediaAggregatorModule,
    RouterModule.forRoot(routes, { useHash: true }),
    RxJsSamplesModule,
  ],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
