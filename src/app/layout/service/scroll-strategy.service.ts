import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class ScrollStrategyService {
    blockScroll() {
        document.body.classList.add('blocked-scroll');
    }

    unblockScroll() {
        document.body.classList.remove('blocked-scroll');
    }
}