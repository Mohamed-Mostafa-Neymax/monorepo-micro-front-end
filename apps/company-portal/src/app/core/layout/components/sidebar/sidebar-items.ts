import { SidebarItem } from "../../models/sidebar-items.model";

export const SIDEBAR_ITEMS: SidebarItem[] = [
    {
        id: 1,
        title: 'Home',
        description: '',
        route: '/',
        iconName: 'living'
    },
    {
        id: 2,
        title: 'App One',
        description: '(Table)',
        route: '/app-one',
        iconName: 'subtitles_gear'
    },
    {
        id: 3,
        title: 'App Two',
        description: '(Data)',
        route: '/app-two',
        iconName: 'laptop_windows'
    }
];