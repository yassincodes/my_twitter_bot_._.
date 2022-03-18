// I took a 3 hour course on typescript 
// and built 2 small websites with it 
// should I add it to my resume?

// oh I also solved 5kyu question on codewars with it

// I was just playing with my locations on twitter
// and I found something really weird
// you can basically change your location to any square color 
// but only blue!!!! why is that @twitter
// I just wanted to add typescript to my list of tech I know here
// then twitter told me I can't use the emoji lol

// whenever a user follows me, my twitter photo will change to his photo 
// in no time .. go and try it out 
const dotenv = require("dotenv")
const Twitter = require("twitter")

dotenv.config({path: "./.env"})

const client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

async function main() {
    const params = {
      description: "css/js/react/firebase"
    };
    await client.post("account/update_profile", params);
    console.log("🎉 Success! Updated Twitter bio/location and website");
}


main().catch(err=> console.log(err))