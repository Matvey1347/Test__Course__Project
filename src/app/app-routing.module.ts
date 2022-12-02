import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { ServicesComponent } from './pages/services/services.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'services', component: ServicesComponent},
  { path: 'portfolio', component: PortfolioComponent},
  { path: 'pricing', component: PricingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
