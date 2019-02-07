
import { RouterModule, Routes } from '@angular/router';
import { WishlistComponent } from './modules/wishlist/wishlist.component';
import { SearchComponent } from './modules/search/search.component';
import { FooterComponent } from './modules/footer/footer.component';
import { HeaderComponent } from './modules/header/header.component';
import { ModulesModule } from './modules/modules.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardcontainerComponent } from './modules/./cardcontainer/cardcontainer.component';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  { path: '', component: SearchComponent },
{ path: 'search', component: SearchComponent },
];



// import { HeaderComponent } from './header/header.component';
// import { FooterComponent } from './footer/footer.component';
// import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModulesModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    FormsModule
     ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
