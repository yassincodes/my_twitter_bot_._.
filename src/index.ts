import Twitter from "twitter";


const client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY as string,
  consumer_secret: process.env.TWITTER_CONSUMER_KEY as string,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY as string,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET as string
});


async function main() {
    const params = {
      location: "hi"
    };
    await client.post("account/update_profile", params);
    console.log("🎉 Success! Updated Twitter bio/location and website");
}


main().catch(err=> console.log(err))