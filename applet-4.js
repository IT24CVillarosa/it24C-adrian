class HeroList {
    
    constructor(dataUrl) {
        this.dataUrl = dataUrl;
        this.heroes = [];
        this.init();
    }

    async init() {
        await this.fetchData();
        this.renderHeroList(this.heroes); 
        this.bindSearchEvent();
    }

    async fetchData() {
        try {
            const response = await fetch(this.dataUrl);
            this.heroes = await response.json();
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    renderHeroList(heroes) {
        const heroListContainer = document.getElementById('heroList');
        heroListContainer.innerHTML = heroes.map(hero => 
            `<button class="btn btn-primary" style="margin-top:15px; 
                                                    width:25rem">
                ${hero.hero_id} | ${hero.hero_name} | ${hero.hero_program} | ${hero.hero_address} | ${hero.hero_age} | ${hero.hero_birthdate} | ${hero.hero_contributions}
            </button><br>`
        ).join('');
    }

    bindSearchEvent() {
        const heroSearchBar = document.getElementById('heroSearchBar');
        const heroSearchListContainer = document.getElementById('heroSearchList');

        heroSearchBar.addEventListener('input', () => {
            this.filterHeroes(heroSearchBar.value, heroSearchListContainer);
        });

        this.renderHeroList(this.heroes, heroSearchListContainer);
    }

    filterHeroes(query, searchListContainer) {
        const filteredHeroes = this.heroes.filter(hero => {
            const fullName = ` ${hero.hero_id} ${hero.hero_name} ${hero.hero_program} ${hero.hero_address} ${hero.hero_age} ${hero.hero_birthdate} ${hero.hero_contributions}`;
            return fullName.toLowerCase().includes(query.toLowerCase());
        });

        searchListContainer.innerHTML = '';

        this.renderHeroList(filteredHeroes, searchListContainer);
    }
    
}

const heroList = new HeroList('applet-4.json');
