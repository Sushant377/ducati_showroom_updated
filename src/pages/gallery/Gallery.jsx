import "./Gallery.css";
import Card from "../../components/card/card/Card";
function Gallery() {
  const cards = [
    {
      title: "Monster",
      image: "monster.jpg",
      specs:
        "  A modern take on the Monster that highlights the personality of the bike and maximises enjoyment for colourway further emphasises its contemporary style and combination of elegant and sports-oriented details.",
    },
    {
      title: "Panigale V4",
      image: "light.jpg",
      specs:
        "Ducati Panigale V4 is powered by 998 cc engine. This Panigale V4 engine generates a power of 220 PS @ 15250 rpm and a torque of 112 Nm @ 11500 rpm. The claimed mileage of Panigale V4 is 13.1 kmpl. Ducati Panigale V4 gets Disc brakes in the front and rear.",
    },
    {
      title: "StreetfighterV4",
      image: "streetfighter.jpg",
      specs:
        "The Streetfighter V4 was an instant success and set new performance benchmarks in the super sports naked segment. Universally appreciated for its aggressive and minimalist aesthetic, characterized by a front inspired by the Joker of the comics, the Streetfighter V4 immediately entered the hearts of enthusiasts.",
    },
  ];
  return (
    <div className="gallery">
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          image={card.image}
          specs={card.specs}
        />
      ))}
    </div>
  );
}

export default Gallery;
