## Single Responsibility Principle

The main idea is that class should only be responsible for one thing

```
class News {
    constructor(title, text) {
        this.title = title;
        this.text = text;
        this.modified = false;
    }

    update(text) {
        this.text = text;
        this.modified = true;
    }
}

class NewsPrinter {
    constructor(news) {
        this.news = news;
    }

    html() {
        return `
            <div>
                <h1>${this.news.title}</h1>
                <p>${this.news.text}</p>
            </div>
        `
    }
}

const printer = new NewsPrinter(new News('title', 'text of article'));
```