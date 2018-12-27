import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { Book } from '../book.model';
@Component({
  selector: 'book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent {
 model = new Book(1, '', '', 'http://');;
 
   constructor() { }
 
   ngOnInit() {
   }
 
   get currentBook() { return JSON.stringify(this.model); }
}
