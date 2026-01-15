import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from '../service/app.layout.service';
import { MenuItem } from 'src/app/shared/models/menu-item.model';
import { MenuService } from './menu.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: MenuItem[] = [];

    constructor(
        public layoutService: LayoutService,
        private menuService: MenuService
    ) {}

    ngOnInit() {
        this.model = this.menuService.getMenuStructure();
    }
}
