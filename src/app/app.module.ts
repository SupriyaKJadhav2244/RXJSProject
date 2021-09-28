import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FromEventComponent } from './from-event/from-event.component';
import { OfComponent } from './of/of.component';
import { MapComponent } from './map/map.component';
import { IntervalComponent } from './interval/interval.component';
import { TimerComponent } from './timer/timer.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';
import { ContactMapComponent } from './contact-map/contact-map.component'; 
import { TakeComponent } from './take/take.component';
import { OfWithObjectComponent } from './of-with-object/of-with-object.component';
import { FromComponent } from './from/from.component';
import { MapWithObjectComponent } from './map-with-object/map-with-object.component';
import { TakeLastComponent } from './take-last/take-last.component';
import { TakeUntilComponent } from './take-until/take-until.component';
import { TapComponent } from './tap/tap.component';
import { FilterComponent } from './filter/filter.component';
import { PluckComponent } from './pluck/pluck.component';
import { FilterBygenderComponent } from './filter-bygender/filter-bygender.component';
import { FilterByNthComponent } from './filter-by-nth/filter-by-nth.component';
import { NestedPluckComponent } from './nested-pluck/nested-pluck.component';
import { ToArrayComponent } from './to-array/to-array.component';
import { ContactComponent } from './contact/contact.component';
import { MergeComponent } from './merge/merge.component';
import { MergemapComponent } from './mergemap/mergemap.component';
import { RetryComponent } from './retry/retry.component'; 

@NgModule({
  declarations: [
    AppComponent,
    FromEventComponent,
    OfComponent,
    MapComponent,
    IntervalComponent,
    TimerComponent,
    SwitchMapComponent,
    ContactMapComponent, 
    TakeComponent,
    OfWithObjectComponent,
    FromComponent,
    MapWithObjectComponent,
    TakeLastComponent,
    TakeUntilComponent,
    TapComponent,
    FilterComponent,
    PluckComponent,
    FilterBygenderComponent,
    FilterByNthComponent,
    NestedPluckComponent,
    ToArrayComponent,
    ContactComponent,
    MergeComponent,
    MergemapComponent,
    RetryComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
