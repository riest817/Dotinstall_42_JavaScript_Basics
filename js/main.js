'use strict';

{
  class Post {  // 親クラス
    constructor(text) {
      this.text = text,
      this.likeCount = 0;
    }

    show() {
      console.log(`${this.text} - ${this.likeCount} likes`);
    }

    like() {
      this.likeCount++;
      this.show();
    }
  
  }
  
  class SponsoredPost extends Post { //子クラス
    constructor(text, sponsor) {
      super(text);  // 継承
      this.sponsor = sponsor;
    }

    show() {
      super.show(); // 継承
      console.log(`... sponsored by ${this.sponsor}`);
    }
  }

  const posts = [
    new Post('JavaScript'),
    new Post('Haskell'),
    new SponsoredPost('３分間でマスター！', 'dotinstall')
  ];

  posts[0].like();
  // posts[0].likeCount++; // 直接プロパティにアクセスすることは推奨されない

  // posts[0].show();
  posts[2].show();
  posts[2].like();
}