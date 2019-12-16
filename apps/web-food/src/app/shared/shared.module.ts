import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms'
import {
  NbThemeModule,
  NbLayoutModule,
  NbSidebarModule,
  NbMenuModule,
  NbButtonModule,
  NbIconModule,
  NbUserModule,
  NbContextMenuModule,
  NbCardModule,
} from '@nebular/theme'

import { NbEvaIconsModule } from '@nebular/eva-icons'

@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    NbButtonModule,
    NbThemeModule,
    NbSidebarModule,
    NbMenuModule,
    NbLayoutModule,
    NbIconModule,
    NbEvaIconsModule,
    NbUserModule,
    NbContextMenuModule,
    NbCardModule,
  ],
  // imports: [NbIconModule],
})
export class SharedModule {}
