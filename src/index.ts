import ShareButtonTwitter from "./ShareButtonTwitter";
import ShareButtonFacebook from "./ShareButtonFacebook";
import ShareButtonLinkedin from "./ShareButtonLinkedin";

const twitter = new ShareButtonTwitter(".btn-twitter", "https://wwww.youtube.com/rodrigobranas");
twitter.bind();
const facebook = new ShareButtonFacebook(".btn-facebook", "https://wwww.youtube.com/rodrigobranas");
facebook.bind();
const linkedin = new ShareButtonLinkedin(".btn-linkedin", "https://wwww.youtube.com/rodrigobranas");
linkedin.bind();