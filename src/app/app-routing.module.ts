import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './sahred/layouts/header/header.component';
import { FooterComponent } from './sahred/layouts/footer/footer.component';
import { MainComponent } from './sahred/layouts/main/main.component';

const routes: Routes = [
  {
    path:'',
    component:MainComponent
  },
  {
    path:'**',
    component:MainComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const componentsAll = [HeaderComponent,
  FooterComponent,
  MainComponent]