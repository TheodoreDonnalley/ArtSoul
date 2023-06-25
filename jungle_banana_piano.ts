import { Artists, Studios, Environment } from './data';

interface ArtStudio {
    welcomeMessage: string;
    environment: Environment;
    artists: Artists[];
    studios: Studios[];
}

class ArtStudio implements ArtStudio {
    welcomeMessage = 'Welcome to our Art Studio!';
    environment: Environment;
    artists: Artists[];
    studios: Studios[];
    constructor(env: Environment, artists: Artists[], studios: Studios[]) {
        this.environment = env;
        this.artists = artists;
        this.studios = studios;
    }
    public createEnvironment(env: Environment) {
        this.environment = env;
    }
    public addArtist(artist: Artists) {
        this.artists.push(artist);
    }
    public addStudio(studio: Studios) {
        this.studios.push(studio);
    }
    public getWelcomeMessage() {
        return this.welcomeMessage;
    }
    public getEnvironment() {
        return this.environment;
    }
    public getArtists() {
        return this.artists;
    }
    public getStudios() {
        return this.studios;
    }
}

const environment: Environment = {
    lighting: 'natural',
    temperature: 'comfortable',
};

const artists: Artists[] = [
    {
        name: 'John Doe',
        experienceLevel: 'beginner',
        background: 'fine arts',
    },
    {
        name: 'Jane Doe',
        experienceLevel: 'intermediate',
        background: 'graphic design',
    },
];

const studios: Studios[] = [
    {
        name: 'Studio 1',
        size: 'medium',
        resources: 'drawing tables, easels, and lighting',
    },
    {
        name: 'Studio 2',
        size: 'large',
        resources: 'sculpture tables, easels, and lighting',
    },
];

const studio = new ArtStudio(environment, artists, studios);
console.log(studio.getWelcomeMessage());
console.log(studio.getEnvironment());
console.log(studio.getArtists());
console.log(studio.getStudios());