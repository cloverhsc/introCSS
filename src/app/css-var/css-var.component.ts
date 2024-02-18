import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css-var',
  standalone: true,
  imports: [],
  templateUrl: './css-var.component.html',
  styleUrl: './css-var.component.scss'
})
export class CssVarComponent implements OnInit {
  body = document.querySelector("body");

  ngOnInit(): void {

  }

  lightMode() {
    if (this.body) {
      this.body.classList.remove("dark");
      this.body.classList.add("light");
    }
  }

  darkMode() {
    if (this.body) {
      this.body.classList.remove("light");
      this.body.classList.add("dark");
    }
  }

}
