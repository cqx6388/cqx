class NavObject {
    name: string;
    router: string;
}

export class SideBarItem {
    title: string;
    router: string;
    items: Array<NavObject>;
}
