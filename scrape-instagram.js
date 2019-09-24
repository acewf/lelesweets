const request = require('request-promise');
const fs = require('fs');
const cheerio = require('cheerio');
const ProgressBar = require(`progress`);
const mkdirp = require(`mkdirp`);
const download = require(`./utils/download-file`);

let posts = [];
let profileData = {};

// Create the images directory
const distDir = 'images/posts';
mkdirp.sync(distDir);

const savePostsJSON = _ =>
  fs.writeFileSync(`./data/posts.json`, JSON.stringify(posts, '', 2))

const saveProfileJSON = _ =>
  fs.writeFileSync(`./data/profile.json`, JSON.stringify(profileData, '', 2))


const bar = new ProgressBar(
  `Downloading instagram posts [:bar] :current/:total :elapsed secs :percent`,
  {
    total: 0,
    width: 30,
  }
)

/* Create the base function to be ran */
const start = async () => {
  /* Here you replace the username with your actual instagram username that you want to check */
  const USERNAME = 'lelesweets_';
  const BASE_URL = `https://www.instagram.com/${USERNAME}/`;

  /* Send the request and get the html content */
  let response = await request(
    BASE_URL,
    {
      'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
      'accept-encoding': 'gzip, deflate, br',
      'accept-language': 'en-US,en;q=0.9,fr;q=0.8,ro;q=0.7,ru;q=0.6,la;q=0.5,pt;q=0.4,de;q=0.3',
      'cache-control': 'max-age=0',
      'upgrade-insecure-requests': '1',
      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36'
    }
  );

  var options = {
    uri: 'https://www.instagram.com/graphql/query/?query_hash=',
    qs: {
      query_hash: 'f2405b236d85e8296cf30347c9f08c2a',
      variables: '{"id":"8521467401","first":12,"after":"QVFBQ0lLZ0tvVUhIVXdFbThGWVZ2RkZVaEYwaXZGbm5mUHNHSFBPWmxQNkVCbnZYS01tZVNjbTJWUVRFcVRFTFBFOGJvVTJNT3hUaTR6cGcydnAwaHZmeQ=="}'
    },
    headers: {
      'User-Agent': 'Request-Promise'
    },
    json: true // Automatically parses the JSON string in the response
  }

  /* Initiate Cheerio with the response */
  let $ = cheerio.load(response);

  /* Get the proper script of the html page which contains the json */
  let script = $('script').eq(4).html();

  /* Traverse through the JSON of instagram response */
  let { entry_data: { ProfilePage: { [0]: { graphql: { user } } } } } = JSON.parse(/window\._sharedData = (.+);/g.exec(script)[1]);

  profileData = {
    biography: user.biography,
    followers: user.edge_followed_by
  }



  let secondHash = await request(options);


  const edgesList = [
    ...user.edge_owner_to_timeline_media.edges,
    ...secondHash.data.user.edge_owner_to_timeline_media.edges
  ]

  edgesList.map(item => {
    return item;
  })

  posts = edgesList.map(({
    node
  }) => {
    const { id, display_url, __typename, dimensions, is_video,
      shortcode, edge_liked_by } = node;
    bar.total++
    const imgURL = `${distDir}/${id}.jpg`;
    download(display_url, `data/${imgURL}`, _ => bar.tick())
    return {
      id,
      shortcode,
      dimensions,
      is_video,
      type: __typename,
      display_url: imgURL,
      likes: (edge_liked_by) ? edge_liked_by.count : 0
    }
  })

  savePostsJSON();
  saveProfileJSON();
}

start();