import AbstractSharedButton from "./AbstractShareButton"
import ShareButtonTwitter from "./ShareButtonTwitter";
import ShareButtonFacebook from "./ShareButtonFacebook";
import ShareButtonLinkedin from "./ShareButtonLinkedin";
import ShareButtonPrint from "./ShareButtonPrint";
import DOMEventHandler from "./DOMEventHandler";
import MockEventHandler from "./MockEventHandler"

// const eventHandler = new DOMEventHandler();
const eventHandler = new MockEventHandler();

const twitter: AbstractSharedButton = new ShareButtonTwitter(eventHandler, ".btn-twitter", "https://wwww.youtube.com/rodrigobranas");
twitter.bind();
const facebook: AbstractSharedButton = new ShareButtonFacebook(eventHandler, ".btn-facebook", "https://wwww.youtube.com/rodrigobranas");
facebook.bind();
const linkedin: AbstractSharedButton = new ShareButtonLinkedin(eventHandler, ".btn-linkedin", "https://wwww.youtube.com/rodrigobranas");
linkedin.bind();
const print: AbstractSharedButton = new ShareButtonPrint(eventHandler, ".btn-print");
print.bind();