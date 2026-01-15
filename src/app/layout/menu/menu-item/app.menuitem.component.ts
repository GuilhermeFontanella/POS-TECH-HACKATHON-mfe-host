import {
    ChangeDetectorRef,
    Component,
    Input,
    OnDestroy,
    OnInit,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import {
    animate,
    state,
    style,
    transition,
    trigger,
} from '@angular/animations';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { MenuService } from '../../service/app.menu.service';
import { MenuStateService } from './app.menuitem.service';

@Component({
    selector: '[app-menuitem]',
    templateUrl: './app.menuitem.component.html',
    host: {
        '[class.layout-root-menuitem]': 'root',
        '[class.active-menuitem]': 'active',
    },
    animations: [
        trigger('children', [
            state(
                'collapsed',
                style({
                    height: '0',
                })
            ),
            state(
                'expanded',
                style({
                    height: '*',
                })
            ),
            transition(
                'collapsed <=> expanded',
                animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')
            ),
        ]),
    ],
})
export class AppMenuitemComponent implements OnInit, OnDestroy {
    @Input() item: any;
    @Input() index!: number;
    @Input() root!: boolean;
    @Input() parentKey!: string;
    active = false;
    key: string = '';
    private subscriptions = new Subscription();

    constructor(
        private menuService: MenuService,
        private stateService: MenuStateService,
        private router: Router,
        private cd: ChangeDetectorRef
    ) {}

    ngOnInit() {
        this.key = this.stateService.generateKey(this.parentKey, this.index);
        this.initMenuStateSubscription();
        this.initRouteSubscription();

        if (this.item.routerLink) {
            this.updateActiveStateFromRoute();
        }
    }

    private initMenuStateSubscription() {
        const sub = this.menuService.menuSource$.subscribe((value) => {
            const shouldBeActive = this.stateService.isActive(
                this.key,
                value.key
            );

            if (value.routeEvent) {
                this.active = shouldBeActive;
            } else if (!shouldBeActive) {
                this.active = false;
            }
            this.cd.markForCheck();
        });
        this.subscriptions.add(sub);

        this.subscriptions.add(
            this.menuService.resetSource$.subscribe(() => (this.active = false))
        );
    }

    private initRouteSubscription() {
        const sub = this.router.events
            .pipe(filter((event) => event instanceof NavigationEnd))
            .subscribe(() => {
                if (this.item.routerLink) this.updateActiveStateFromRoute();
            });
        this.subscriptions.add(sub);
    }

    itemClick(event: Event) {
        if (this.item.disabled) {
            event.preventDefault();
            return;
        }

        if (this.item.command) {
            this.item.command({ originalEvent: event, item: this.item });
        }

        if (this.item.items) {
            this.active = !this.active;
        }

        this.menuService.onMenuStateChange({ key: this.key });
    }

    updateActiveStateFromRoute() {
        let activeRoute = this.router.isActive(this.item.routerLink[0], {
            paths: 'exact',
            queryParams: 'ignored',
            matrixParams: 'ignored',
            fragment: 'ignored',
        });

        if (activeRoute) {
            this.menuService.onMenuStateChange({
                key: this.key,
                routeEvent: true,
            });
        }
    }

    get submenuAnimation() {
        return this.root ? 'expanded' : this.active ? 'expanded' : 'collapsed';
    }

    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
}
