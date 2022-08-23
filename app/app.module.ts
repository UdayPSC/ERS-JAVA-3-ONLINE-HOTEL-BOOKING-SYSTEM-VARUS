import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharePages/navbar/navbar.component';
import { FooterComponent } from './sharePages/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { RoompageComponent } from './pages/roompage/roompage.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LogoutComponent } from './pages/logout/logout.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { UserlistComponent } from './pages/userlist/userlist.component';
import { UserdetailsComponent } from './pages/userdetails/userdetails.component';
import { UpdateuserComponent } from './pages/updateuser/updateuser.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    RoomsComponent,
    AboutComponent,
    ContactComponent,
    RoompageComponent,
    LoginComponent,
    RegistrationComponent,
    LogoutComponent,
    PaymentComponent,
    UserlistComponent,
    UserdetailsComponent,
    UpdateuserComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
