// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Code,
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

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
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
  systemDiagram: require("../assets/gotta-go-diagram.jpg"),
  verifyScreenshot: require("../assets/verify-screenshot.png"),
  viperModule: require("../assets/viper-module.png"),
  contactScreenshot: require("../assets/save-contact.png"),
  excuseScreenshot: require("../assets/excuse-screenshot.png"),
  chelseaQuestions: require("../assets/chelsea-questions.png"),
  emojiKeyboardScreenshot: require("../assets/emoji-keyboard-screenshot.png"),
  moreNumbers: require("../assets/more-numbers.jpg"),
  todayRuff: require("../assets/today-ruff.jpg"),
  hundredEmoji: require("../assets/100-emoji.png"),
  oops: require("../assets/oops.gif"),
  coolDog: require("../assets/cool-dog.jpg"),
  sentryLogo: require("../assets/sentry-icon.png"),
  newRelicLogo: require("../assets/new-relic-logo.jpg"),
  fabricLogo: require("../assets/fabric-logo.png")
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
                  <ListItem>RestKit + Core Data</ListItem>
                  <ListItem>Plivo for Telephony Service</ListItem>
                </List>
              </Fill>
              <Fit>
                <Image src={images.systemDiagram.replace("/", "")} margin="60px 0 0 60px" height="350px"/>
              </Fit>
            </Layout>
          </Slide>
          <Slide maxWidth={1250}>
            <Heading fit caps>Verifying Your Number</Heading>
            <Layout>
              <Fit>
                <Image src={images.verifyScreenshot.replace("/", "")} margin="60px 60px 0 0" height="500px"/>
              </Fit>
              <Fill>
                <List padding="60px 0 0">
                  <ListItem>User enters their number</ListItem>
                  <ListItem>Server pings telephony service to text code</ListItem>
                  <ListItem>User inputs code to verify their number</ListItem>
                  <ListItem>Pretty standard</ListItem>
                </List>
              </Fill>
            </Layout>
          </Slide>
          <Slide>
            <Heading fit caps>Verifying Cont. - VIPER</Heading>
            <Text textSize="1.5em" textColor="secondary">RestKit API Call</Text>
            <CodePane
              lang="swift"
              source={require("raw!../assets/code_samples/interactor.example")}
              margin="20px auto"
            />
            <Layout>
              <Fill>
                <Text textSize="1.5em" textColor="secondary">A VIPER Module</Text>
                <Image src={images.viperModule.replace("/", "")} margin="20px 0 0 0" height="200px"/>
              </Fill>
              <Fill>
                <Text textSize="1.5em" textColor="secondary">Core Data Classes</Text>
                <CodePane
                  lang="swift"
                  source={require("raw!../assets/code_samples/core-data.example")}
                  margin="20px auto"
                />
              </Fill>
            </Layout>
          </Slide>
          <Slide maxWidth={1250}>
            <Heading fit caps>Adding Contacts - AddressBook</Heading>
            <Layout>
              <Fit>
                <Image src={images.contactScreenshot.replace("/", "")} margin="60px 60px 0 0" height="500px"/>
              </Fit>
              <Fill>
                <List padding="60px 0 0 0">
                  <ListItem>Add/Edit contact with our numbers</ListItem>
                  <ListItem>Allow user to edit name + photo</ListItem>
                  <ListItem>When editing, delete then re-add</ListItem>
                  <ListItem>Built before iOS 9's new contact framework</ListItem>
                </List>
              </Fill>
            </Layout>
          </Slide>
          <Slide>
            <Heading fit caps>Adding Contacts Cont.</Heading>
            <Text textSize="1.5em" textColor="secondary" margin="20px 0 0">
              Store numbers appropriate to user's country
            </Text>
            <CodePane
              lang="swift"
              source={require("raw!../assets/code_samples/numbers.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide>
            <Heading fit caps>Adding Contacts Cont. II</Heading>
            <Text textSize="1.5em" textColor="secondary" margin="20px 0 0">
              Find contact with a matching number
            </Text>
            <CodePane
              lang="swift"
              source={require("raw!../assets/code_samples/find-contact.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide>
            <Heading fit caps>Adding Contacts Cont. III</Heading>
            <Text textSize="1.5em" textColor="secondary" margin="20px 0 0">
              Set name, image, and numbers on new contact
            </Text>
            <CodePane
              lang="swift"
              source={require("raw!../assets/code_samples/create-contact.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide>
            <Heading fit caps>Saving & Creating Excuses</Heading>
            <Layout>
              <Fit>
                <Image src={images.excuseScreenshot.replace("/", "")} margin="60px 60px 0 0" height="500px"/>
              </Fit>
              <Fill>
                <List padding="60px 0 0 0">
                  <ListItem>Craft a believable story</ListItem>
                  <ListItem>Add up to 1 phone call and 7 texts</ListItem>
                  <ListItem>Excuses stored locally in Core Data</ListItem>
                  <ListItem>Schedule it for X mins/hours later</ListItem>
                </List>
              </Fill>
            </Layout>
          </Slide>
          <Slide>
            <Heading fit caps>Saving & Creating Excuses Cont.</Heading>
            <Text textSize="1.5em" textColor="secondary" margin="20px 0 0">
              Fetch user's excuses from Core Data
            </Text>
            <CodePane
              lang="swift"
              source={require("raw!../assets/code_samples/get-excuses.example")}
              margin="20px auto"
            />
            <Text textSize="1.5em" textColor="secondary" margin="40px 0 0">
              Create default excuses first time through (Emoji's in Xcode!)
            </Text>
            <CodePane
              lang="swift"
              source={require("raw!../assets/code_samples/default-excuse.example")}
              margin="20px auto"
            />
          </Slide>          
          <Slide maxWidth={1250}>
            <Heading fit caps>Emoji Keyboard for Excuses</Heading>
            <Layout>
              <Fit>
                <Image src={images.emojiKeyboardScreenshot.replace("/", "")} margin="50px 60px 0 0" height="500px"/>
              </Fit>
              <Fill>
                <Heading textSize="1.5em" textColor="secondary" margin="50px 0 0 0" caps>
                  Some Considerations
                </Heading>
                <List padding="0 0 0 0">
                  <ListItem>Older OS's don't support new emojis</ListItem>
                  <ListItem>Different skin toned emojis</ListItem>
                  <ListItem>Saving emoji preference</ListItem>
                  <ListItem>Grouping emojis together</ListItem>
                  <ListItem>Credit @leemcdole</ListItem>
                </List>
              </Fill>
            </Layout>
          </Slide>
          <Slide>
            <Heading fit caps>Scheduling Excuses (Server)</Heading>
            <Text textSize="1.5em" textColor="secondary" margin="40px 0 0">
              Schedule a task to ping the telephony service X mins later
            </Text>
            <CodePane
              lang="python"
              source={require("raw!../assets/code_samples/send_message.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide>
            <Heading fit caps>Scheduling Excuses (Server) Cont.</Heading>
            <Text textSize="1.5em" textColor="secondary" margin="40px 0 0">
              Plivo provided a library for sending SMS or Voice
            </Text>
            <CodePane
              lang="python"
              source={require("raw!../assets/code_samples/plivo_api.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide maxWidth={1250}>
            <Heading fit caps>Fixing the Fires Part #1</Heading>
            <Layout>
              <Fill>
                <List padding="60px 0 0 0">
                  <ListItem>Purchased 10 more numbers</ListItem>
                  <ListItem>Round robin sending texts between them</ListItem>
                  <ListItem>Texts coming from wrong number</ListItem>
                  <ListItem>Traffic on the app was increasing</ListItem>
                  <ListItem>Banned again after an hour</ListItem>
                </List>
              </Fill>
              <Fit>
                <Image src={images.moreNumbers.replace("/", "")} margin="150px 0 0 25px" height="275px"/>
              </Fit>
            </Layout>
          </Slide>
          <Slide maxWidth={1250}>
            <Heading fit caps>Fixing the Fires Part #2</Heading>
            <Layout>
              <Fit>
                <Image src={images.todayRuff.replace("/", "")} margin="100px 60px 0 0" height="400px"/>
              </Fit>
              <Fill>
                <List padding="60px 0 0 0">
                  <ListItem>Bought a Shortcode</ListItem>
                  <ListItem>Meant for high volume texts</ListItem>
                  <ListItem>Much more expensive then before</ListItem>
                  <ListItem>Hindsight 50/50</ListItem>
                  <ListItem>Weekend had ~20k verified users</ListItem>
                </List>
              </Fill>
            </Layout>
          </Slide>
          <Slide maxWidth={1250}>
            <Heading fit caps>Fixing the Fires Part #3</Heading>
            <Text textSize="1.5em" textColor="secondary" margin="40px 0 0">
              iOS app has hardcoded numbers 😫
            </Text>
            <Text textSize="1.5em" textColor="secondary" margin="40px 0 0">
              Submitted emergency build to Apple, approved next day 👏
            </Text>
          </Slide>
          <Slide>
            <Heading fit caps>What did we do wrong?</Heading>
            <Layout>
              <Fill>
                <List padding="60px 0 0 0">
                  <ListItem>Contact numbers should be dynamic</ListItem>
                  <ListItem>^ Served via the API</ListItem>
                  <ListItem>Load balance tested SMS/Voice sending</ListItem>
                  <ListItem>Beta test was not enough messages/second</ListItem>
                </List>
              </Fill>
              <Fit>
                <Image src={images.oops.replace("/", "")} margin="100px 0 0 25px" height="300px"/>
              </Fit>
            </Layout>
          </Slide>
          <Slide>
            <Heading fit caps>What did we do right?</Heading>
            <Text textSize="2em" textColor="secondary" margin="40px 0">
              Analytics and Monitoring!
            </Text>
            <Layout>
              <Fill>
                <Image src={images.sentryLogo.replace("/", "")} height="200px"/>
              </Fill>
              <Fill>
                <Image src={images.newRelicLogo.replace("/", "")} height="200px"/>
              </Fill>
              <Fill>
                <Image src={images.fabricLogo.replace("/", "")} height="200px"/>
              </Fill>
            </Layout>
          </Slide>
          <Slide bgImage={images.hundredEmoji.replace("/", "")} bgDarken={0.75}>
            <Heading fit caps>Thanks to Devs @ Yeti!</Heading>
            <Layout>
              <Fill>
                <List padding="60px 0 0 0">
                  <ListItem>@alekhinen</ListItem>
                  <ListItem>@anyatran</ListItem>
                  <ListItem>@baylee</ListItem>
                  <ListItem>@leemcdole</ListItem>
                  <ListItem>@paolopaolopaolo</ListItem>
                </List>
              </Fill>
              <Fill>
                <List padding="60px 0 0 0">
                  <ListItem>@rmutter</ListItem>
                  <ListItem>@tonydotsc</ListItem>
                  <ListItem>@walkingtowork</ListItem>
                  <ListItem>@winnietong</ListItem>
                  <ListItem>@ZachGawlik</ListItem>
                </List>
              </Fill>
            </Layout>
          </Slide>
          <Slide bgImage={images.chelseaQuestions.replace("/", "")} bgDarken={0.5}>
            <Image src={images.yetiHead.replace("/", "")} margin="0" height="300px"/>
            <Heading fit caps>Any Questions?</Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
