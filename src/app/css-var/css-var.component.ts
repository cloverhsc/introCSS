import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-css-var',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './css-var.component.html',
  styleUrl: './css-var.component.scss'
})
export class CssVarComponent implements OnInit {
  html = document.querySelector("html");

  ngOnInit(): void {

  }

  lightMode() {
    if (this.html) {
      this.html.classList.remove("dark");
      this.html.classList.add("light");
    }
  }

  darkMode() {
    if (this.html) {
      this.html.classList.remove("light");
      this.html.classList.add("dark");
    }
  }

}
