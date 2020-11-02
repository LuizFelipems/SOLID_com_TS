import ShareButtonTwitter from "./ShareButtonTwitter";
import ShareButtonFacebook from "./ShareButtonFacebook";
import ShareButtonLinkedin from "./ShareButtonLinkedin";
import ShareButtonPrint from "./ShareButtonPrint";

const twitter = new ShareButtonTwitter(".btn-twitter", "https://wwww.youtube.com/rodrigobranas");
twitter.bind();
const facebook = new ShareButtonFacebook(".btn-facebook", "https://wwww.youtube.com/rodrigobranas");
facebook.bind();
const linkedin = new ShareButtonLinkedin(".btn-linkedin", "https://wwww.youtube.com/rodrigobranas");
linkedin.bind();
const print = new ShareButtonPrint(".btn-print");
print.bind();