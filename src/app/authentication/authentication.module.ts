import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthenticationRouting } from './authentication.routing';
import { SharedsModule } from '../shareds/shareds.module';
import { SettingComponent } from './components/setting/setting.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuctionComponent } from './components/auction/auction.component';
import { StoreComponent } from './components/store/store.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { FormsModule } from '@angular/forms';
import { StoreUserComponent } from './components/store-user/store-user.component';

@NgModule({
  declarations: [
    DashboardComponent,
    SettingComponent,
    ProfileComponent,
    AuctionComponent,
    StoreComponent,
    AddProductComponent,
    StoreUserComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRouting,
    SharedsModule,
    FormsModule
  ]
})
export class AuthenticationModule { }
