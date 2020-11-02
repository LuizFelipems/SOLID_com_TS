import AbstractSharedButton from "./AbstractShareButton"
import ShareButtonTwitter from "./ShareButtonTwitter";
import ShareButtonFacebook from "./ShareButtonFacebook";
import ShareButtonLinkedin from "./ShareButtonLinkedin";
import ShareButtonPrint from "./ShareButtonPrint";

const twitter: AbstractSharedButton = new ShareButtonTwitter(".btn-twitter", "https://wwww.youtube.com/rodrigobranas");
twitter.bind();
const facebook: AbstractSharedButton = new ShareButtonFacebook(".btn-facebook", "https://wwww.youtube.com/rodrigobranas");
facebook.bind();
const linkedin: AbstractSharedButton = new ShareButtonLinkedin(".btn-linkedin", "https://wwww.youtube.com/rodrigobranas");
linkedin.bind();
const print: AbstractSharedButton = new ShareButtonPrint(".btn-print");
print.bind();