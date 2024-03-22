import { truncate } from "fs";
import ProfilePic from "../assets/images/ProfilePic.png";

export const messagesData = [
  {
    name: "Jay Pritchett",
    profilePic: ProfilePic,
    messages: [
      {
        text: "Hi Jay, really love your take on 'Closet Designs' collection!",
        time: "4:32",
        incoming: false,
      },
      {
        text: "Thanks for the appreciation kid! I've been in the business for 40 years, every single design has been bestseller of their category.",
        time: "4:32",
        incoming: true,
      },
      {
        text: "That's awesome. How much for the mandala piece?",
        time: "4:32",
        incoming: false,
      },
      { text: "Not for sale.", time: "4:32", incoming: true },
      {
        text: "Why'd you put up the collection then?",
        time: "4:32",
        incoming: false,
      },
      {
        text: "Come on I'll give you a good price. ",
        time: "4:32",
        incoming: false,
      },
      {
        text: "To show my art, kid. To show my art.",
        time: "4:32",
        incoming: true,
      },
    ],
  },
  {
    name: "Cameron Tucker",
    profilePic: ProfilePic,
    messages: [
      { text: "To be edited 1 ", time: "4:32", incoming: false },
      { text: "To be edited 2", time: "4:32", incoming: true },
      { text: "To be edited 3", time: "4:32", incoming: true },
      { text: "To be edited 4", time: "4:32", incoming: false },
      { text: "To be edited 5", time: "4:32", incoming: false },
      { text: "To be edited 6", time: "4:32", incoming: true },
      { text: "To be edited 7", time: "4:32", incoming: false },
    ],
  },
  {
    name: "Alex Dunphy",
    profilePic: ProfilePic,
    messages: [
      { text: "To be edited 1 ", time: "4:32", incoming: false },
      { text: "To be edited 2", time: "4:32", incoming: true },
      { text: "To be edited 3", time: "4:32", incoming: true },
      { text: "To be edited 4", time: "4:32", incoming: false },
      { text: "To be edited 5", time: "4:32", incoming: false },
      { text: "To be edited 6", time: "4:32", incoming: true },
      { text: "To be edited 7", time: "4:32", incoming: false },
    ],
  },
  {
    name: "Gloria Pritchett",
    profilePic: ProfilePic,
    messages: [
      { text: "Hi Akshat", time: "4:32", incoming: true },
      {
        text: "I will buy your entire collection on fashion.",
        time: "4:32",
        incoming: true,
      },
      { text: "Hi Gloria, that's great! ", time: "4:32", incoming: false },
      {
        text: "It will be instatntly delivered. What will be your mode of payment?",
        time: "4:32",
        incoming: false,
      },
      {
        text: "For the collection, I will give you 20 jars of tomato sauce made from my grandmother's secret recipe.",
        time: "4:32",
        incoming: true,
      },
      { text: "Please tell me you are joking.", time: "4:32", incoming: false },
      {
        text: "I am not joking, why will I be joking?",
        time: "4:32",
        incoming: true,
      },
      { text: "Hey!", time: "4:32", incoming: true },
      { text: "This is your last chance.", time: "4:32", incoming: true },
      {
        text: "I will still make an exception for you!",
        time: "4:32",
        incoming: true,
      },
    ],
  },
  {
    name: "Luke Dunphy",
    profilePic: ProfilePic,
    messages: [
      {
        text: "Hey man, can you loan me one of your Bored Monkey NFTs?",
        time: "4:32",
        incoming: true,
      },
      {
        text: "I really need this for my school project, to be submitted tomorrow morning!",
        time: "4:32",
        incoming: true,
      },
      {
        text: "Hey Luke, You can buy anything you think fits your project description, why rent?",
        time: "4:32",
        incoming: false,
      },
      {
        text: "It's not like I don't have money saved up, but that's for a gift for my dad, and it's anyway a one-week submission.",
        time: "4:32",
        incoming: true,
      },
      {
        text: "After that I don't have any use of this.",
        time: "4:32",
        incoming: true,
      },
      {
        text: "No man, renting is not in my seller policy, sorry!",
        time: "4:32",
        incoming: false,
      },
      {
        text: "Comeon, it'll just be for a week!",
        time: "4:32",
        incoming: true,
      },
      { text: "Let me think about it.", time: "4:32", incoming: false },
    ],
  },
  {
    name: "Mitchell Pritchett",
    profilePic: ProfilePic,
    messages: [
      { text: "To be edited 1 ", time: "4:32", incoming: false },
      { text: "To be edited 2", time: "4:32", incoming: true },
      { text: "To be edited 3", time: "4:32", incoming: true },
      { text: "To be edited 4", time: "4:32", incoming: false },
      { text: "To be edited 5", time: "4:32", incoming: false },
      { text: "To be edited 6", time: "4:32", incoming: true },
      { text: "To be edited 7", time: "4:32", incoming: false },
    ],
  },
  {
    name: "Manny Delgado",
    profilePic: ProfilePic,
    messages: [
      { text: "To be edited 1 ", time: "4:32", incoming: false },
      { text: "To be edited 2", time: "4:32", incoming: true },
      { text: "To be edited 3", time: "4:32", incoming: true },
      { text: "To be edited 4", time: "4:32", incoming: false },
      { text: "To be edited 5", time: "4:32", incoming: false },
      { text: "To be edited 6", time: "4:32", incoming: true },
      { text: "To be edited 7", time: "4:32", incoming: false },
    ],
  },
  {
    name: "Phil Dunphy",
    profilePic: ProfilePic,
    messages: [
      {
        text: "There was a collector who couldn'T pronounce 'Y'. What did he say the colour of the sun was?",
        time: "4:32",
        incoming: true,
      },
      { text: " 'ELLO ", time: "4:32", incoming: true },
      {
        text: "I want to buy your NFT collection of real restate projects.",
        time: "4:32",
        incoming: true,
      },
      {
        text: "But I don't have any such collection?",
        time: "4:32",
        incoming: false,
      },
      {
        text: "That's where I can help you! I am three-time winner of Dunphy Best Realtor awards. I can help you setup an NFT collection of amazing real-estate properties.",
        time: "4:32",
        incoming: true,
      },
      {
        text: "That is indeed a good idea. When can we meet?",
        time: "4:32",
        incoming: false,
      },
      { text: "How does this Saturday sound?", time: "4:32", incoming: true },
      { text: "Awesome. Done.", time: "4:32", incoming: false },
    ],
  },
  {
    name: "Lily Pritchett",
    profilePic: ProfilePic,
    messages: [
      { text: "To be edited 1 ", time: "4:32", incoming: false },
      { text: "To be edited 2", time: "4:32", incoming: true },
      { text: "To be edited 3", time: "4:32", incoming: true },
      { text: "To be edited 4", time: "4:32", incoming: false },
      { text: "To be edited 5", time: "4:32", incoming: false },
      { text: "To be edited 6", time: "4:32", incoming: true },
      { text: "To be edited 7", time: "4:32", incoming: false },
    ],
  },
  {
    name: "Claire Dunphy",
    profilePic: ProfilePic,
    messages: [
      {
        text: "Hey, did my dad reject your offer for the mandala piece?",
        time: "4:32",
        incoming: true,
      },
      {
        text: "Yeah I complimented him and asked him how much for the piece. But he shoved me off saying its not for sale.",
        time: "4:32",
        incoming: false,
      },
      { text: "Geez Dad.", time: "4:32", incoming: true },
      {
        text: "He's an oldie. He doesn't understand modern business.",
        time: "4:32",
        incoming: true,
      },
      {
        text: "I setup this collection to attract buyers. He doesn't like the idea so keeps shrugging off whoever approches us",
        time: "4:32",
        incoming: true,
      },
      {
        text: "Oh! So are you ready to sell the mandala NFT?",
        time: "4:32",
        incoming: false,
      },
      {
        text: "Yeah yeah! But not anything less than the quoted price.",
        time: "4:32",
        incoming: true,
      },
      {
        text: "I think we can arrange something.",
        time: "4:32",
        incoming: false,
      },
    ],
  },
  {
    name: "Joe Pritchett",
    profilePic: ProfilePic,
    messages: [
      { text: "To be edited 1 ", time: "4:32", incoming: false },
      { text: "To be edited 2", time: "4:32", incoming: true },
      { text: "To be edited 3", time: "4:32", incoming: true },
      { text: "To be edited 4", time: "4:32", incoming: false },
      { text: "To be edited 5", time: "4:32", incoming: false },
      { text: "To be edited 6", time: "4:32", incoming: true },
      { text: "To be edited 7", time: "4:32", incoming: false },
    ],
  },
  {
    name: "Haley Dunphy",
    profilePic: ProfilePic,
    messages: [
      { text: "To be edited 1 ", time: "4:32", incoming: false },
      { text: "To be edited 2", time: "4:32", incoming: true },
      { text: "To be edited 3", time: "4:32", incoming: true },
      { text: "To be edited 4", time: "4:32", incoming: false },
      { text: "To be edited 5", time: "4:32", incoming: false },
      { text: "To be edited 6", time: "4:32", incoming: true },
      { text: "To be edited 7", time: "4:32", incoming: false },
    ],
  },
];
