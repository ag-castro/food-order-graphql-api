import { NgModule } from '@angular/core'
import { AppComponent } from './app.component'
import { CoreModule } from './core/core.module'
import { NbThemeModule, NbSidebarModule, NbMenuModule } from '@nebular/theme'

@NgModule({
  declarations: [AppComponent],
  imports: [
    CoreModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbMenuModule.forRoot(),
    NbSidebarModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
