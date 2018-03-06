import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PortadaComponent } from './portada/portada.component';
//primero lo importo
import { LoginComponent } from './login/login.component';
import {SignupComponent} from './signup/signup.component';

//forms son todo un tema
import { FormsModule } from '@angular/forms';
import { PipesComponent } from './pipes/pipes.component';
import { FilterPipe } from './pipe-list/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PortadaComponent,
    //despues lo agrego
    LoginComponent,
    SignupComponent,
    PipesComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
