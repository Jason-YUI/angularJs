//组件
export class HeroListComponent implements Onint {
    heroes: Hero[];
    selectHero: Hero;

    constructor(private service: HeroService) { }

    ngOnInit() {
        this.heroes = this.service.getHeroes();
    }

    selectHero(hero: Hero) {
        this.selectHero = hero;
    }
}