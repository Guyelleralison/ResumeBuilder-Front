import { Injectable } from "@angular/core";
import { Validators } from "@angular/forms";
import { SidebarMenu } from "../sidebar/models/sidebar-menu.model";

@Injectable({
    providedIn: 'root'
})
export class SidebarMenuService{

    getHomeSidebarMenu(): SidebarMenu[] {
        return [
            {
                "elementName": 'Liste des candidats',
                "fontawesome": 'fa-user',
                "clicked": true,
                "link": 'home'
            },
            {
                "elementName": 'Paramètres',
                "fontawesome": 'fa-gear',
                "clicked": false,
                "link": 'home/config'
            }
        ];
    }

    getResumeBuilderMenu(): SidebarMenu[] {
        return [
            {
                "elementName": 'Informations',
                "fontawesome": 'fa-circle-info',
                "clicked": true,
                "link": 'resume/info',
                "nextLink": 'resume/experiences'
            },
            {
                "elementName": 'Expériences',
                "fontawesome": 'fa-briefcase',
                "clicked": false,
                "link": 'resume/experiences',
                "nextLink": 'resume/skills',
                "previousLink": 'resume/info'
            },
            {
                "elementName": 'Compétences',
                "fontawesome": 'fa-code',
                "clicked": false,
                "link": 'resume/skills',
                "nextLink": 'resume/education',
                "previousLink": 'resume/experiences'
            },
            {
                "elementName": 'Formations',
                "fontawesome": 'fa-graduation-cap',
                "clicked": false,
                "link": 'resume/education',
                "nextLink": 'resume/career',
                "previousLink": 'resume/skills'
            },
            {
                "elementName": 'Parcours',
                "fontawesome": 'fa-trophy',
                "clicked": false,
                "link": 'resume/career',
                "nextLink": 'resume/profile',
                "previousLink": 'resume/education'
            },
            {
                "elementName": 'Profil',
                "fontawesome": 'fa-address-card',
                "clicked": false,
                "link": 'resume/profile',
                "previousLink": 'resume/career'
            }
        ];
    }

    getCurrentActiveSideBar(route?: string): SidebarMenu | undefined {
        return this.getResumeBuilderMenu().filter(sidebar => route?.match(sidebar.link))[0];
    }
}
