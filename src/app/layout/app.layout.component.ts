import { Component, OnDestroy, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { LayoutService } from "./service/app.layout.service";
import { AppSidebarComponent } from './sidebar/app.sidebar.component';
import { AppTopBarComponent } from './topbar/app.topbar.component';
import { ScrollStrategyService } from './service/scroll-strategy.service';

@Component({
    selector: 'app-layout',
    templateUrl: './app.layout.component.html'
})
export class AppLayoutComponent implements OnDestroy {
    private sub = new Subscription();
    @ViewChild(AppSidebarComponent) appSidebar!: AppSidebarComponent;
    @ViewChild(AppTopBarComponent) appTopbar!: AppTopBarComponent;

    constructor(
        public layoutService: LayoutService,
        private scrollStrategy: ScrollStrategyService,
        private router: Router
    ) {
        this.initLayoutListeners();
    }

    private initLayoutListeners() {
        this.sub.add(
            this.router.events.pipe(filter(e => e instanceof NavigationEnd))
                .subscribe(() => this.hideAllMenus())
        );

        this.sub.add(
            this.layoutService.overlayOpen$.subscribe(() => {
                if (this.layoutService.state.staticMenuMobileActive) {
                    this.scrollStrategy.blockScroll();
                }
            })
        );
    }

    hideAllMenus() {
        this.layoutService.state.overlayMenuActive = false;
        this.layoutService.state.staticMenuMobileActive = false;
        this.layoutService.state.menuHoverActive = false;
        this.layoutService.state.profileSidebarVisible = false;
        this.scrollStrategy.unblockScroll();
    }

    onOutsideClick(event: Event) {
        const isMenuTrigger = this.appTopbar.menuButton.nativeElement.contains(event.target);
        if (!isMenuTrigger) {
            this.hideAllMenus();
        }
    }

    get containerClass() {
        const config = this.layoutService.config;
        const state = this.layoutService.state;
        return {
            'layout-theme-light': config.colorScheme === 'light',
            'layout-theme-dark': config.colorScheme === 'dark',
            'layout-overlay': config.menuMode === 'overlay',
            'layout-static': config.menuMode === 'static',
            'layout-static-inactive': state.staticMenuDesktopInactive && config.menuMode === 'static',
            'layout-overlay-active': state.overlayMenuActive,
            'layout-mobile-active': state.staticMenuMobileActive,
            'p-input-filled': config.inputStyle === 'filled',
            'p-ripple-disabled': !config.ripple
        };
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
