import { Injectable } from "@angular/core";
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
                "link": ''
            },
            {
                "elementName": 'Paramètres',
                "fontawesome": 'fa-gear',
                "clicked": false,
                "link": 'config'
            }
        ];
    }

    getResumeBuilderMenu(): SidebarMenu[] {
        return [
            {
                "elementName": 'Informations',
                "fontawesome": 'fa-circle-info',
                "clicked": true,
                "link": 'info'
            },
            {
                "elementName": 'Expériences',
                "fontawesome": 'fa-briefcase',
                "clicked": false,
                "link": 'experiences'
            },
            {
                "elementName": 'Compétences',
                "fontawesome": 'fa-code',
                "clicked": false,
                "link": 'skills'
            },
            {
                "elementName": 'Formations',
                "fontawesome": 'fa-graduation-cap',
                "clicked": false,
                "link": 'education'
            },
            {
                "elementName": 'Parcours',
                "fontawesome": 'fa-trophy',
                "clicked": false,
                "link": 'career'
            },
            {
                "elementName": 'Profil',
                "fontawesome": 'fa-address-card',
                "clicked": false,
                "link": 'profile'
            }
        ];
    }
}