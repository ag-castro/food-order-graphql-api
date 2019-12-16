import { NgModule } from '@angular/core'
import { DashboardRoutingModule } from './dashboard-routing.module'
import { SharedModule } from '../shared/shared.module';
import { WrapperComponent } from './wrapper/wrapper.component'

@NgModule({
  declarations: [WrapperComponent],
  imports: [SharedModule, DashboardRoutingModule],
})
export class DashboardModule {}
