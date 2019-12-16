import { Component, OnInit, Inject } from '@angular/core'
import { NbSidebarService, NbMenuService, NB_WINDOW } from '@nebular/theme'
import { filter, map } from 'rxjs/operators'

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss'],
})
export class WrapperComponent implements OnInit {
  constructor(
    private nbMenuService: NbMenuService,
    @Inject(NB_WINDOW) private window,
    private sidebarService: NbSidebarService,
  ) {}

  sideBarState = 'expanded'

  userMenuItems = [
    { title: 'Profile' },
    { title: 'Meus Endereços' },
    { title: 'Meus Pedidos' },
    { title: 'Logout' },
  ]

  ngOnInit() {
    this.nbMenuService
      .onItemClick()
      .pipe(
        filter(({ tag }) => tag === 'userMenuSettings'),
        map(({ item: { title } }) => title),
      )
      .subscribe(title => this.window.alert(`${title} was clicked!`))
  }

  toggle() {
    // this.sidebarService.toggle(false, 'left')
    this.sideBarState =
      this.sideBarState === 'expanded' ? 'compacted' : 'expanded'
  }
}
