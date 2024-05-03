import { Component, OnInit } from "@angular/core";
import { Hero } from "../hero";
import { NgIf, UpperCasePipe, NgFor } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HeroService } from "../hero.service";
import { HeroDetailComponent } from "../hero-detail/hero-detail.component";
import { MessageService } from "../message.service"

@Component({
  selector: "app-heroes",
  standalone: true,
  imports: [
    UpperCasePipe,
    FormsModule,
    NgFor,
    NgIf,
    HeroDetailComponent
  ],
  templateUrl: "./heroes.component.html",
  styleUrl: "./heroes.component.css"
})
export class HeroesComponent implements OnInit{
  selectedHero?: Hero;

  heroes: Hero[] = [];

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
}
