"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const twitter_1 = __importDefault(require("twitter"));
dotenv_1.default.config({ path: "./.env" });
const client = new twitter_1.default({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_KEY,
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
main().catch(err => console.log(err));
//# sourceMappingURL=index.js.map