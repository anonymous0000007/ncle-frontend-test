import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubscriptionRoutingModule } from './subscription-routing.module';
import { SubscriptionComponent } from './subscription.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [SubscriptionComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubscriptionRoutingModule
  ]
})
export class SubscriptionModule { }
