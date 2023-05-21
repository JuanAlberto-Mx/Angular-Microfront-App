import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('microfrontShopping/ProductModule').then((m)=>m.ProductsModule),
  },
  {
    path: 'payment',
    loadComponent: () => import('microfrontPayment/PaymentsModule').then((m)=>m.PaymentsModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
