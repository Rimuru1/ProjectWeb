import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRouting } from './authentication.routing';
import { SharedsModule } from '../shareds/shareds.module';
import { SettingComponent } from './components/setting/setting.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuctionComponent } from './components/auction/auction.component';
import { StoreComponent } from './components/store/store.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { FormsModule } from '@angular/forms';
import { UserStoreComponent } from './components/user-store/user-store.component';
import { BasketComponent } from './components/basket/basket.component';
import { AlifeFileToBase64Module } from 'alife-file-to-base64';
import { AddAuctionComponent } from './components/add-auction/add-auction.component';
import { CountdownTimerModule } from 'angular-countdown-timer';
import { BitAuctionComponent } from './components/bit-auction/bit-auction.component';
import { HomeComponent } from './components/home/home.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';

@NgModule({
  declarations: [
    SettingComponent,
    ProfileComponent,
    AuctionComponent,
    StoreComponent,
    AddProductComponent,
    UserStoreComponent,
    BasketComponent,
    AddAuctionComponent,
    BitAuctionComponent,
    HomeComponent,
    EditProfileComponent,
  ],
  imports: [
    CommonModule,
    AuthenticationRouting,
    SharedsModule,
    FormsModule,
    AlifeFileToBase64Module,
    CountdownTimerModule
  ]
})
export class AuthenticationModule { }
