import Navbar from "../components/Navbar";//add navbar content to the home page from components
import Hero from "../components/Hero";
import Problem from "../components/Problem";
import HowItWorks from "@/components/HowItWorks";

export default function Home() { //function where what all shd be shown in home page is present like navbar,header etc from components
  return ( //gives whatever is inside home page to the user
    <>
      <Navbar />  
      <Hero />
      <Problem />
      <HowItWorks />
    </> //calls the navbar component to be shown in the home page
  );
} 