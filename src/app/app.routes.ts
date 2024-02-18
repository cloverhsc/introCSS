import { FontsizeComponent } from './fontsize/fontsize.component';
import { PrivilegeComponent } from './privilege/privilege.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
import { CssVarComponent } from './css-var/css-var.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'privilege', component: PrivilegeComponent },
  { path: 'font', component: FontsizeComponent },
  { path: 'cssvar', component: CssVarComponent }
];
