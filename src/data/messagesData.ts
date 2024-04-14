import Cookies from "universal-cookie";
import Alex from "../assets/images/alex.jpeg";
import Cam from "../assets/images/cam.jpeg";
import Claire from "../assets/images/claire.jpeg";
import Gloria from "../assets/images/gloria.jpeg";
import Haley from "../assets/images/haley.jpeg";
import Jay from "../assets/images/jay.jpeg";
import Lily from "../assets/images/lily.jpeg";
import Luke from "../assets/images/luke.jpeg";
import Manny from "../assets/images/manny.jpeg";
import Mitchell from "../assets/images/mitchell.jpeg";
import Phil from "../assets/images/phil.jpeg";

const cookies = new Cookies();

export const messagesData = [
  {
    name: "Jay Pritchett",
    profilePic: Jay,
    messages: [
      {
        text: "Hi Jay, really love your take on 'Closet Designs' collection!",
        time: "16:32",
        incoming: false,
      },
      {
        text: "Thanks for the appreciation kid! I've been in the business for 40 years, every single design has been bestseller of their category.",
        time: "16:39",
        incoming: true,
      },
      {
        text: "That's awesome. How much for the tribal design piece?",
        time: "16:39",
        incoming: false,
      },
      { text: "Not for sale.", time: "17:01", incoming: true },
      {
        text: "Why'd you put up the collection then?",
        time: "17:01",
        incoming: false,
      },
      {
        text: "Come on I'll give you a good price. ",
        time: "17:02",
        incoming: false,
      },
      {
        text: "NOT FOR SALE!",
        time: "17:40",
        incoming: true,
      },
    ],
  },
  {
    name: "Cameron Tucker",
    profilePic: Cam,
    messages: [
      {
        text: "Hi Cam, I'm thinking of starting an informative class on blockchain.",
        time: "13:32",
        incoming: false,
      },
      {
        text: "Do you think you could be the instructor?",
        time: "13:32",
        incoming: false,
      },
      { text: "That's great! When do I join?", time: "13:34", incoming: true },
      {
        text: "You don't want to know the pay?",
        time: "13:37",
        incoming: false,
      },
      {
        text: "Teaching is my passion. The pay is secondary.",
        time: "13:37",
        incoming: true,
      },
      { text: "Cool. You can start Monday.", time: "13:42", incoming: false },
      { text: "Awesome!", time: "13:44", incoming: true },
    ],
  },
  {
    name: "Alex Dunphy",
    profilePic: Alex,
    messages: [
      { text: "Hey", time: "8:01", incoming: true },
      {
        text: "I am writing a research paper and the topic is 'The impact of NFTs on the 21st Century'",
        time: "8:02",
        incoming: true,
      },
      { text: "Can you help me with that?", time: "8:02", incoming: true },
      { text: "Sure. How can I?", time: "12:12", incoming: false },
      {
        text: "You do you. I'll just shadow you for a couple of days and take notes.",
        time: "12:14",
        incoming: true,
      },
      { text: "Ummm.. ok", time: "12:25", incoming: false },
      { text: "Great. See you tomorrow", time: "12:29", incoming: true },
      {
        text: "But how do you know where I live?",
        time: "12:43",
        incoming: false,
      },
      { text: "Helloooo????", time: "12:45", incoming: false },
    ],
  },
  {
    name: "Gloria Pritchett",
    profilePic: Gloria,
    messages: [
      {
        text: "Hi " + cookies?.get("firstname"),
        time: "21:07",
        incoming: true,
      },
      {
        text: "I will buy your entire collection on fashion.",
        time: "21:07",
        incoming: true,
      },
      { text: "Hi Gloria, that's great! ", time: "21:12", incoming: false },
      {
        text: "It will be instatntly delivered. What will be your mode of payment?",
        time: "21:12",
        incoming: false,
      },
      {
        text: "For the collection, I will give you 20 jars of tomato sauce made from my grandmother's secret recipe.",
        time: "21:24",
        incoming: true,
      },
      {
        text: "Please tell me you are joking.",
        time: "21:25",
        incoming: false,
      },
      {
        text: "I am not joking, why will I be joking?",
        time: "21:28",
        incoming: true,
      },
      { text: "Hey!", time: "21:28", incoming: true },
      { text: "This is your last chance.", time: "21:28", incoming: true },
      {
        text: "I will still make an exception for you!",
        time: "21:29",
        incoming: true,
      },
    ],
  },
  {
    name: "Luke Dunphy",
    profilePic: Luke,
    messages: [
      {
        text: "Hey man, can you loan me one of your Bored Monkey NFTs?",
        time: "10:32",
        incoming: true,
      },
      {
        text: "I really need this for my school project, to be submitted tomorrow morning!",
        time: "10:32",
        incoming: true,
      },
      {
        text: "Hey Luke, You can buy anything you think fits your project description, why rent?",
        time: "10:46",
        incoming: false,
      },
      {
        text: "It's not like I don't have money saved up, but that's for a gift for my dad, and it's anyway a one-week submission.",
        time: "10:47",
        incoming: true,
      },
      {
        text: "After that I don't have any use of this.",
        time: "10:47",
        incoming: true,
      },
      {
        text: "No man, renting is not in my seller policy, sorry!",
        time: "11:01",
        incoming: false,
      },
      {
        text: "Comeon, it'll just be for a week!",
        time: "11:03",
        incoming: true,
      },
      { text: "Let me think about it.", time: "11:32", incoming: false },
    ],
  },
  {
    name: "Mitchell Pritchett",
    profilePic: Mitchell,
    messages: [
      {
        text: "You regularly buy and sell NFTs right?",
        time: "15:32",
        incoming: true,
      },
      { text: "That's right.", time: "15:40", incoming: false },
      {
        text: "What if a seller does not deliver after the payment?",
        time: "15:45",
        incoming: true,
      },
      { text: "You, my friend, need a lawyer.", time: "15:45", incoming: true },
      {
        text: "That... is not how NFTs work. That is not how any of this works!",
        time: "15:52",
        incoming: false,
      },
      {
        text: "You need a lawyer nonetheless.",
        time: "15:57",
        incoming: true,
      },
      {
        text: "And who better than THE Mitchell Pritchett!",
        time: "15:57",
        incoming: true,
      },
      { text: "I think I'm good, thanks.", time: "16:04", incoming: false },
    ],
  },
  {
    name: "Manny Delgado",
    profilePic: Manny,
    messages: [
      {
        text: "Whatever Luke offers, I'll double it",
        time: "15:04",
        incoming: true,
      },
      { text: "What?", time: "15:08", incoming: false },
      {
        text: "Luke asked you for renting a NFT right?",
        time: "15:13",
        incoming: true,
      },
      {
        text: "Don't lend it to him, give it to me I'll pay double the price",
        time: "15:13",
        incoming: true,
      },
      {
        text: "Sorry man, I already gave my word",
        time: "15:21",
        incoming: false,
      },
      {
        text: "I don't need if for the project, I just want him to work on it on his own",
        time: "15:28",
        incoming: true,
      },
      {
        text: "Oh, I think you should settle this betwwen the two of you.",
        time: "15:31",
        incoming: false,
      },
    ],
  },
  {
    name: "Phil Dunphy",
    profilePic: Phil,
    messages: [
      {
        text: "There was a collector who couldn't pronounce 'Y'. What did he say the colour of the sun was?",
        time: "14:36",
        incoming: true,
      },
      { text: " 'ELLO ", time: "14:36", incoming: true },
      {
        text: "I want to buy your NFT collection of real estate projects.",
        time: "14:37",
        incoming: true,
      },
      {
        text: "But I don't have any such collection?",
        time: "14:39",
        incoming: false,
      },
      {
        text: "That's where I can help you! I am three-time winner of Dunphy Best Realtor awards. I can help you setup an NFT collection of amazing real-estate properties.",
        time: "14:42",
        incoming: true,
      },
      {
        text: "That is indeed a good idea. When can we meet?",
        time: "14:46",
        incoming: false,
      },
      { text: "How does this Saturday sound?", time: "14:50", incoming: true },
      { text: "Awesome. Done.", time: "14:51", incoming: false },
    ],
  },
  {
    name: "Lily Pritchett",
    profilePic: Lily,
    messages: [
      {
        text: "Do you have any NFT based on Vietnamese culture?",
        time: "18:17",
        incoming: true,
      },
      {
        text: "I do have some Vietnamese artists' creations.",
        time: "18:22",
        incoming: false,
      },
      {
        text: "The culture thing however is not very central in them.",
        time: "18:22",
        incoming: false,
      },
      {
        text: "I would still like to take a look",
        time: "18:26",
        incoming: true,
      },
      {
        text: "You can search anywhere for 'Strolling about in Spring'",
        time: "18:32",
        incoming: false,
      },
      { text: "Sure sure, thanks!", time: "18:35", incoming: true },
      { text: "No problem", time: "18:38", incoming: false },
    ],
  },
  {
    name: "Claire Dunphy",
    profilePic: Claire,
    messages: [
      {
        text: "Hey, did my dad reject your offer for the tribal design piece?",
        time: "21:17",
        incoming: true,
      },
      {
        text: "Yeah I complimented him and asked him how much for the piece. But he shoved me off saying its not for sale.",
        time: "21:21",
        incoming: false,
      },
      { text: "Geez Dad.", time: "21:24", incoming: true },
      {
        text: "He's an old man now. He doesn't understand modern business.",
        time: "21:25",
        incoming: true,
      },
      {
        text: "I setup this collection to attract buyers. He doesn't like the idea so keeps shrugging off whoever approches us",
        time: "21:25",
        incoming: true,
      },
      {
        text: "Oh! So are you ready to sell the tribal design NFT?",
        time: "21:30",
        incoming: false,
      },
      {
        text: "Yeah yeah! But not anything less than the quoted price.",
        time: "21:32",
        incoming: true,
      },
      {
        text: "I think we can arrange something.",
        time: "21:36",
        incoming: false,
      },
    ],
  },
  {
    name: "Haley Dunphy",
    profilePic: Haley,
    messages: [
      {
        text: "Hey Haley, will any of your friends in Community College be interested in a introductory class on NFTs?",
        time: "19:23",
        incoming: false,
      },
      {
        text: "What's NFT? Is it worse than a D? Did I get one? How do you know?",
        time: "19:28",
        incoming: true,
      },
      {
        text: "What?? No NFT is a Non-fungible Token, it's a crypto thing.",
        time: "19:34",
        incoming: false,
      },
      {
        text: "No no we guys have no interest in this nerdy stuff",
        time: "19:39",
        incoming: true,
      },
      {
        text: "Okay... then why are you on this website?",
        time: "19:53",
        incoming: false,
      },
      { text: "I get a lot of attention here", time: "19:56", incoming: true },
      { text: "Forget I asked", time: "20:01", incoming: false },
    ],
  },
];
