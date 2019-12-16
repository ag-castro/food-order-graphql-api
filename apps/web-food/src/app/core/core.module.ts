import { NgModule, Optional, SkipSelf } from '@angular/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ApolloConfigModule } from './apollo-config.module'
import { AppRoutingModule } from '../app-routing.module'

@NgModule({
  exports: [BrowserAnimationsModule, ApolloConfigModule, AppRoutingModule],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule já foi carregado. Importe somente no AppModule',
      )
    }
  }
}
