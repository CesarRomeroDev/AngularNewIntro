import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
/** COMPONENT */
import { AppComponent } from './app.component';
import { ContadorModule } from './contador/contador.module';
import { DbzModule } from './dbz/dbz.module';
import { EquiposModule } from './equipos/equipos.module';

/** MODULES */
import { HeroesModule } from './heroes/heroes.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule,
    DbzModule,
    EquiposModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
