import {Component, Input} from '@angular/core';

/**
 * @title Basic Inputs
 */
@Component({
  selector: 'contact',
  styleUrls: ['contact.component.css'],
  templateUrl: 'contact.component.html',
})
export class ContactComponent {

    @Input()
    isShown : String;

    constructor(){

    }

}