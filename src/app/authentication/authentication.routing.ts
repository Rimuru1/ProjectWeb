import { RouterModule, Routes } from '@angular/router';
import { AuthUrl } from './authentication.url';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SettingComponent } from './components/setting/setting.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuctionComponent } from './components/auction/auction.component';
import { StoreComponent } from './components/store/store.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { UserStoreComponent } from './components/user-store/user-store.component';
import { BasketComponent } from './components/basket/basket.component';

const RouteList: Routes = [
    {
        path: '', redirectTo: AuthUrl.Dashboards, pathMatch: 'full'
    },
    {
        path: AuthUrl.Dashboards, component: DashboardComponent
    },
    {
        path: AuthUrl.Settings, component: SettingComponent
    },
    {
        path: AuthUrl.Profiles, component: ProfileComponent
    },
    {
        path: AuthUrl.Auction, component: AuctionComponent
    },
    {
        path: AuthUrl.Store, component: StoreComponent
    },
    {
        path: AuthUrl.Product, component: AddProductComponent
    },
    {
        path: AuthUrl.Storeuser, component: UserStoreComponent
    },
    {
        path: AuthUrl.Basket, component: BasketComponent
    }
    
]


export const AuthenticationRouting = RouterModule.forChild(RouteList);