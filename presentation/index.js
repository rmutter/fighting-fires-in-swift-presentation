// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),
  everythingIsFine: require("../assets/everything-is-fine.jpg"),
  netflixAndChill: require("../assets/netflix-and-chill.jpg"),
  yetiHead: require("../assets/yeti-head-white.png"),
  chelseaPromo: require("../assets/chelsea-promo.jpg"),
  chelseaDoes: require("../assets/chelsea-does.png"),
  swiftLogo: require("../assets/swift-logo.png"),
  cartoonFire: require("../assets/cartoon-fire.png"),
  rudyMagic: require("../assets/rudy-magic.jpg"),
  appStore1: require("../assets/appstore-6-1.png"),
  appStore2: require("../assets/appstore-6-2.png"),
  appStore3: require("../assets/appstore-6-3.png"),
  appStore4: require("../assets/appstore-6-4.png"),
  appStore5: require("../assets/appstore-6-5.png"),
  plivoLogs: require("../assets/plivo-logs.png"),
  tinyEyeLogo: require("../assets/tiny-eye-logo.png"),
  sfDjango: require("../assets/django-sf.jpg"),
  terminalIcon: require("../assets/terminal-icon.png"),
  systemDiagram: require("../assets/gotta-go-diagram.jpg")
};

preloader(images);

const theme = createTheme({
  primary: "#222",
  secondary: "#FFF",
  tertiary: "#42affa",
  quartenary: "#FFF"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["slide"]} progress="pacman">
          <Slide>
            <Heading fit caps>
              Fighting Fires in Swift
            </Heading>
            <Text fontSize={1} fit caps textColor="secondary">
              Lessons Learned Launching Gotta Go!
            </Text>
            <Layout>
              <Fill>
                <Image src={images.swiftLogo.replace("/", "")} margin="60px auto 0" height="300px"/>
              </Fill>
              <Fill>
                <Image src={images.cartoonFire.replace("/", "")} margin="60px auto 0" height="300px"/>
              </Fill>
            </Layout>
          </Slide>
          <Slide bgImage={images.rudyMagic.replace("/", "")} bgDarken={0.75}>
            <Heading fit caps>
              Rudy Mutter
            </Heading>
            <List>
              <ListItem><Image src={images.yetiHead.replace("/", "")} margin="0" height="40px"/> Co-founder & Head of Tech @ Yeti</ListItem>
              <ListItem><Image src={images.sfDjango.replace("/", "")} margin="0" height="40px"/> Organizer of the SF Django Meetup</ListItem>
              <ListItem><Image src={images.terminalIcon.replace("/", "")} margin="0" height="40px"/> Polyglot Developer (Python, Swift, JavaScript, Java, C#)</ListItem>
              <ListItem><Image src={images.tinyEyeLogo.replace("/", "")} margin="0" height="35px"/> Recently just launched Tiny Eye, a VR iOS & Android game!</ListItem>
            </List>
          </Slide>
          <Slide>
            <Heading fit caps>
              Quick Backstory!
            </Heading>
            <Text textSize="4rem" caps textColor="secondary">
              Let's get some context.
            </Text>
            <Image src={images.yetiHead.replace("/", "")} margin="60px auto 0" height="300px"/>
          </Slide>
          <Slide>
            <Heading fit caps>Chelsea Does: Silicon Valley on Netflix</Heading>
            <Layout>
              <Fill>
                <Image src={images.chelseaDoes.replace("/", "")} margin="60px auto 0" height="300px"/>
              </Fill>
              <Fill>
                <Image src={images.chelseaPromo.replace("/", "")} margin="60px auto 0" height="300px"/>
              </Fill>
            </Layout>
          </Slide>
          <Slide maxWidth={1250}>
            <Heading fit caps>Chelsea Handler's: Gotta Go!</Heading>
            <Layout>
              <Fill>
                <Image src={images.appStore1.replace("/", "")} margin="60px auto 0" height="400px"/>
              </Fill>
              <Fill>
                <Image src={images.appStore2.replace("/", "")} margin="60px auto 0" height="400px"/>
              </Fill>
              <Fill>
                <Image src={images.appStore3.replace("/", "")} margin="60px auto 0" height="400px"/>
              </Fill>
              <Fill>
                <Image src={images.appStore4.replace("/", "")} margin="60px auto 0" height="400px"/>
              </Fill>
              <Fill>
                <Image src={images.appStore5.replace("/", "")} margin="60px auto 0" height="400px"/>
              </Fill>
            </Layout>
          </Slide>
          <Slide>
            <Heading fit caps>Jan 22: Launch Evening</Heading>
            <Image src={images.netflixAndChill.replace("/", "")} margin="60px auto 0" height="300px"/>
          </Slide>
          <Slide>
            <Heading fit caps>Jan 23: Launch Morning</Heading>
            <Image src={images.everythingIsFine.replace("/", "")} margin="60px auto 0" height="300px"/>
          </Slide>
          <Slide>
            <Heading fit caps>What's Going Wrong!?</Heading>
            <Layout>
              <Fit>
                <Image src={images.plivoLogs.replace("/", "")} margin="60px 60px 0" height="300px"/>
              </Fit>
              <Fill>
                <List padding="60px 0 0">
                  <ListItem>100s of Verification Codes sent</ListItem>
                  <ListItem>Small amount of users verified</ListItem>
                  <ListItem>SMS Logs saying Undelivered</ListItem>
                  <ListItem>Our phone number was banned 😅</ListItem>
                </List>
              </Fill>
            </Layout>
          </Slide>
          <Slide maxWidth={1250}>
            <Heading fit caps>Rewind: System Overview</Heading>
            <Layout>
              <Fill>
                <List>
                  <ListItem>Python/Django Backend 🐍</ListItem>
                  <ListItem>Celery/RabbitMQ for async</ListItem>
                  <ListItem>Swift iOS App</ListItem>
                  <ListItem>Core Data</ListItem>
                  <ListItem>Plivo for Telephony Service</ListItem>
                </List>
              </Fill>
              <Fit>
                <Image src={images.systemDiagram.replace("/", "")} margin="60px 0 0 60px" height="350px"/>
              </Fit>
            </Layout>
          </Slide>
          <Slide>
            <Heading fit caps>Verifying Number</Heading>
          </Slide>
          <Slide>
            <Heading fit caps>Adding Contacts</Heading>
          </Slide>
          <Slide>
            <Heading fit caps>Saving & Creating Excuses</Heading>
          </Slide>
          <Slide>
            <Heading fit caps>Emoji Keyboard (Credit @leemcdole)</Heading>
          </Slide>
          <Slide>
            <Heading fit caps>Scheduling Excuses (Python)</Heading>
          </Slide>
          <Slide>
            <Heading fit caps>Fixing the Fires Part #1</Heading>
          </Slide>
          <Slide>
            <Heading fit caps>Fixing the Fires Part #2</Heading>
          </Slide>
          <Slide>
            <Heading fit caps>What did we do Right?</Heading>
          </Slide>
          <Slide>
            <Heading fit caps>What should we have done differently?</Heading>
          </Slide>
          <Slide>
            <Heading fit caps>Questions?</Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
