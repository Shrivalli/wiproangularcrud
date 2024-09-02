import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent  {
  title = 'Wipro DNA Batch';
  cname="India";

  
  currentClasses: Record<string, boolean> = {};
  currentStyles: Record<string, string> = {};
  saveable=true;
  modified=false;
  special=true;
  canSave=true;
  isUnchanged=true;
  isSpecial=true;
  flag=false;

/* . . . */
setCurrentClasses() {
  // CSS classes: added/removed per current state of component properties
  this.currentClasses = {
    saveable: this.canSave,
    modified: !this.isUnchanged,
    special: this.isSpecial,
  };
}

  setCurrentStyles() {
    // CSS styles: set per current state of component properties
    this.currentStyles = {
      'font-style': this.canSave ? 'italic' : 'normal',
      'font-weight': !this.isUnchanged ? 'bold' : 'normal',
      'font-size': this.isSpecial ? '24px' : '12px',
    };
  }
//constructor
ngonInit()
{
  this.setCurrentClasses();
  this.setCurrentStyles();
}
}
