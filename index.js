require('dotenv').config()

const Snoowrap = require('snoowrap');
const { CommentStream } = require('snoostorm');

const BOT_START = Date.now() / 1000

const client = new Snoowrap({
    userAgent: 'yo-angelo-bot',
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    username: process.env.REDDIT_USER,
    password: process.env.REDDIT_PASS,
});


//Shit Post Cursaders
const commentsShitPost = new CommentStream(client, { 
    subreddit: 'ShitPostCrusaders',
    limit: 25,
    pollTime: 3000
});

commentsShitPost.on('item', (item) => {
    if(item.created_utc < BOT_START) return
    console.log(item.body)
    if(item.body.includes('🗿')){
      item.reply('[Yo, Angelo!](https://www.youtube.com/watch?v=M_7chfjC8kY)')
    }
});


//Stardust Crusaders
const commentsStardust = new CommentStream(client, { 
    subreddit: 'StardustCrusaders',
    limit: 25,
    pollTime: 3000
});

commentsStardust.on('item', (item) => {
    if(item.created_utc < BOT_START) return;
    console.log(item.body)
    if(item.body.includes('🗿')){
      item.reply('[Yo, Angelo!](https://www.youtube.com/watch?v=M_7chfjC8kY)')
    }
});