import { ChangeDetectionStrategy, Component } from '@angular/core'
import { NbMenuItem } from '@nebular/theme'

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {}
