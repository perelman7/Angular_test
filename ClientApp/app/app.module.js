var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './components/app/app.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { UserComponent } from './components/user/user.component';
import { PhoneComponent } from './components/phone/phone.component';
import { ReportComponent } from './components/report/report.component';
import { SearchPipe } from './components/about/searchFolder/pipe.search';
import { AgeFilterPipe } from './components/about/searchFolder/age.filter.pipe';
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        imports: [
            BrowserModule,
            FormsModule,
            HttpClientModule,
            RouterModule.forRoot([
                { path: '', component: HomeComponent },
                { path: 'home', component: HomeComponent },
                { path: 'userTable', component: UserComponent },
                { path: 'about', component: AboutComponent },
                { path: 'phoneTable', component: PhoneComponent },
                { path: 'report', component: ReportComponent },
                { path: '**', component: HomeComponent }
            ])
        ],
        declarations: [
            AppComponent,
            NavMenuComponent,
            AboutComponent,
            HomeComponent,
            UserComponent,
            PhoneComponent,
            ReportComponent,
            SearchPipe,
            AgeFilterPipe
        ],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map