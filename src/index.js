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
      location: "hi"
    };
    await client.post("account/update_profile", params);
    console.log("🎉 Success! Updated Twitter bio/location and website");
}


main().catch(err=> console.log(err))