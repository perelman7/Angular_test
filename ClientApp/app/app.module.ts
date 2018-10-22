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

@NgModule({
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
export class AppModule { }