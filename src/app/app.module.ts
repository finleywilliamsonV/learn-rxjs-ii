import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'

import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { UserTileComponent } from './components/user-tile/user-tile.component';
import { HomeComponent } from './components/home/home.component'

@NgModule({
    declarations: [
        AppComponent,
        UserTileComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }
