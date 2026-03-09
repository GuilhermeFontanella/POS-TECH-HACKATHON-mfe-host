import { Injectable } from "@angular/core";
import { MenuItem } from "src/app/shared/models/menu-item.model";

@Injectable({providedIn: 'root'})
export class MenuService {
    getMenuStructure(): MenuItem[] {
        return [
            {
                label: 'Página inicial',
                items: [
                    { 
                        label: 'Tarefas', 
                        icon: 'pi pi-fw pi-list', 
                        routerLink: ['/'] 
                    }
                ]
            },
            {
                label: 'Configurações',
                icon: 'pi pi-fw pi-briefcase',
                routerLink: ['/pages'],
                items: [
                    {
                        label: 'Preferências',
                        icon: 'pi pi-fw pi-user-edit',
                        routerLink: ['/pages/crud']
                    },
                    {
                        label: 'Pomodoro',
                        icon: 'pi pi-fw pi-clock',
                        routerLink: ['/pages/pomodoro']
                    },
                ]
            },
        ]
    }
}