import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class MenuStateService {
    isActive(currentKey: string, activeKey: string): boolean {
        return activeKey === currentKey || activeKey.startsWith(currentKey + '-');
    }

    generateKey(parentKey: string | undefined, index: number): string {
        return parentKey ? `${parentKey}-${index}` : String(index);
    }
}