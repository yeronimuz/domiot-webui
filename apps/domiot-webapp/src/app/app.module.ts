import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {AppRoutingModule} from "./app-routing.module";
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule, provideHttpClient} from "@angular/common/http";
import {environment} from '../environments/environment';
import {APP_CONFIG} from '@domiot/app-config';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import { MenuModule } from '@domiot/menu';
import { SiteComponent } from '../../../../libs/site/src/lib/site/site.component';

@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutingModule, BrowserModule, HttpClientModule, MenuModule, SiteComponent],
  bootstrap: [AppComponent],
  providers: [{
    provide: APP_CONFIG,
    useValue: environment
  }, provideHttpClient(),
    provideAnimationsAsync()]
})
export class AppModule {
}
