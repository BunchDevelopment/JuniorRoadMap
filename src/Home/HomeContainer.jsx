import React from "react";
import InfoBlock from "./InfoBlock";

const infoToRender = [
  {
    title: "Front End Information",
    description: `The user interface(UI) and user experience(UX) is the front end developers main priority. it is their responsability to ensure the interface is designed in a pleasing way, while the actual usability flows well creating a pleasent user experience.The primary tools of a front end developer are going to HTML, CSS, JavaScript, and typically a framework of some sort.`,
    listTitle: "Popular front end frameworks/libraries :",
    frameworks: ["React", "VueJS", "Angular", "Svelte", "Alpine.js"],
  },
  {
    title: "Back-End Information",
    description: `Servers! Back-end developers primarily focus on creating servers, creating Application Programming Interfaces(API) to communicate with databases. They develop the logic to support the front end work. Common examples is creating an API for login, or creating an API to pull data from a database to populate the front end.`,
    listTitle: "Popular back end languages :",
    frameworks: ["NodeJS", "Java", "PHP", "Ruby on Rails", "Python", ".Net"],
  },
  {
    title: "Database Information",
    description: `Almost every project out there uses a database of some sort these days. Usually to store login information, or emails for mailing lists or news letters, or even just storing data to easily populate information accross the web. Databases can be broken down into many different types. Each have different data structures and best practices. `,
    listTitle: "Types of databases :",
    frameworks: [
      "Relational",
      "NoSQL",
      "Hierarchical",
      "Network",
      "Object Oriented",
    ],
  },
];

const HomeContainer = () => {
  return <div>{infoToRender && <InfoBlock infoToRender={infoToRender} />}</div>;
};

export default HomeContainer;
