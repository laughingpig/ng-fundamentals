import { Component } from '@angular/core';
import { templateSourceUrl } from '@angular/compiler';
import { AuthService } from '../user/auth.service';
import { ISession, EventService } from '../events';

@Component({
    selector: 'nav-bar',
    templateUrl: './nav-bar.component.html',
    styles: [`
    .nav.navbar-nav{font-size:15px;}
    #searchForm {margin-right:100px;}
    @media(max-width:1200px){#searchForm{display:none;}}
    li > a.active{ color: red;}
    `]
})
export class NavbarComponent {
    searchTerm: string = ""
    foundSessions: ISession[]

    constructor(private authservice:AuthService, private eventservice: EventService){
        
    }

    searchSessions(searchTerm){
        this.eventservice.searchSessions(searchTerm).subscribe(sessions => {this.foundSessions = sessions} )
    }
}