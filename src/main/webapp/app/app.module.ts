import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { WebappDemoErkedoCaraSharedModule } from 'app/shared/shared.module';
import { WebappDemoErkedoCaraCoreModule } from 'app/core/core.module';
import { WebappDemoErkedoCaraAppRoutingModule } from './app-routing.module';
import { WebappDemoErkedoCaraHomeModule } from './home/home.module';
import { WebappDemoErkedoCaraEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    WebappDemoErkedoCaraSharedModule,
    WebappDemoErkedoCaraCoreModule,
    WebappDemoErkedoCaraHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    WebappDemoErkedoCaraEntityModule,
    WebappDemoErkedoCaraAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class WebappDemoErkedoCaraAppModule {}
