import { Component } from '@angular/core';  //necessary for using @component 

@Component({
    selector: 'app-header',                 //identifier for index.html
    standalone: true,
    templateUrl: './header.component.html',  //reference for header.component.html
    styleUrl: './header.component.css'
})
export class HeaderComponent {}             //how this is used by others