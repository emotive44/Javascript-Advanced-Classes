class Post {
    constructor(title, content) {
        this.title = title;
        this.content = content;
    }
    toString() {
        return `Post: ${this.title}\nContent: ${this.content}`;
    }
}

class SocialMediaPost extends Post {
    comments = [];
    constructor(title, content, likes, dislikes) {
        super(title, content);
        this.likes = likes;
        this.dislikes = dislikes;
    }
    addComment(comment) {
        this.comments.push(' -' + comment);
    }
    toString() {
        if(this.comments.length === 0) {
            //// inheritance a method from another class (with 'super');
            return `${super.toString()}\nRating: ${this.likes - this.dislikes}`;
        }
        return `${super.toString()}\nRating: ${this.likes - this.dislikes}\nComments:\n${this.comments.join('\n')}`;
    }
}

class BlogPost extends Post {
    constructor(title, content, views = 0) {
        super(title, content);
        this.views = views;
    }
    view() {
        this.views++;
    } 
    toString() {
        return `${super.toString()}\nViews: ${this.views}`;
    }
}

let post = new Post('post', 'content');
console.log(post.toString());

let smp = new SocialMediaPost('testTitle', 'testContent', 25, 30);
smp.addComment('one');
smp.addComment('two');
smp.addComment('three');
console.log(smp.toString());

let bp = new BlogPost('title', 'content');
bp.view();
bp.view();
console.log(bp.toString());
