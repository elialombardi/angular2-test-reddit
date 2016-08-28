export class Article {
    static articlesCounter: number = 0
    id: number;
    title: string;
    link: string;
    votes: number;
    image: string;
    categories: string[];

    constructor(title: string, link: string, votes?:number, image?: string, categories?: string[]) {
        this.id = Article.articlesCounter++;
        this.title = title;
        this.link = link;
        this.votes = votes || 0;
        this.image = image || '';
        this.categories = categories || [];
    }

    voteUp() {
        this.votes += 1;
    }

    voteDown() {
        this.votes -= 1;
    }

    domain(): string {
        try {
            let link: string = this.link.split('//')[1];
            
            link = link.split('/')[0];
            
            if(/^www./.test(link)) link = link.split('www.')[1];

            return link;
        } catch (err) {
            return this.link;
        }
    }

    equals(article: Article): boolean {
        return (article.id === this.id);
    }
}