import "./style.css";
import NavBar from "./components/Nav";
import Card from "./components/Card";
import katiezaferes from "./images/katie-zaferes.png"

export default function App() {

  return (
    <div>
      <NavBar />
      <Card 
        img={katiezaferes}
        rating={"5.0"}
        reviewCount={6}
        country={"USA"}
        title={"Life Lessons with Katie Zaferes"}
        price={136}
      />
    </div>

    
  );
}
