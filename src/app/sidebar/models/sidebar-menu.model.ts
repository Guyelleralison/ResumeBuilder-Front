export class SidebarMenu {
    constructor(
        public elementName: string,
        public fontawesome: string,
        public clicked: boolean,
        public link: string,
        public nextLink?: string,
        public previousLink?:string
    ){}
}