import { Component } from '@angular/core';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { AboutComponent } from "./components/about/about.component";
import { SkillsComponent } from "./components/skills/skills.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { ContactComponent } from "./components/contact/contact.component";

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, AboutComponent, SkillsComponent, ProjectsComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
