import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CartComponent } from './cart/cart.component';
import { DetailsComponent } from './details/details.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  }, {
    path: 'menu', component: MenuComponent
  }, {
    path: 'aboutus', component: AboutusComponent
  }, {
    path: 'cart', component: CartComponent
  }, {
    path: 'contact', component: ContactComponent
  }, {
    path: 'menu/products/:productId', component: DetailsComponent
  }, {
    path: 'form', component: FormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
