import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { SearchBarModule } from 'src/app/components/searchbar/searchbar.module';
import { ProductCardModule } from '../../components/product-card/product-card.module';
import { CategoryItemModule } from 'src/app/components/category-item/category-item.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SearchBarModule,
    ProductCardModule,
    CategoryItemModule,
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
