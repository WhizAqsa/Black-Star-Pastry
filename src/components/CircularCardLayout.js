import Card from "./Card";
import Navigation from "./Navigation";
import { useState, useRef } from "react";
function CircularCardLayout() {
  // some points to note.
  // if you have lesser number of required cards, make sure the number of cards is divisible by 6
  // keep these configurations, i.e. number of cards as 36 and remaining stuff
  // but you will ask what if I have only 5 cards?
  // well don't ask, cuz i am gonna answer right away... repeat the cards to maech this criteria
  // HEHEHEHEH:D
  // enjoy HEHEHUHUAO ba byeeeee
  //u there?sunainoeu aoeu aoeu aoeu aoeu
  //mjhy ye code smjha dein
  //i hav so many Qs
  // mai type to nahi kr skita
  //call k
  //done
  //and thank you kesy krun? kis lye// mery lye time nikaal k mery help krny k lye, for these things, no need...phr bhi
  // is k baad "phir bi" hota...kifya kya?....
  // Love you
  //love you more...
  // byeeeeee, enjoy acha jaein byeeee 😘😍😘😘😘😘😘😘 much happy!!!!!!!!!!!!
  const size = 5000;
  const cardCount = 36;
  const cardWidth = 300;
  const cardHeight = 420;
  const radius = size / 2;

  const [rotationAngle, setRotationAngle] = useState(0);
  const containerRef = useRef(null);

  const getCardStyle = (index) => {
    const angle = index * (360 / cardCount);

    const xComp = Math.cos((angle * Math.PI) / 180);
    const yComp = Math.sin((angle * Math.PI) / 180);

    const x =
      radius * xComp + radius - cardWidth / 2 - (cardHeight / 2) * xComp;
    const y =
      radius * yComp + radius - cardHeight / 2 - (cardHeight / 2) * yComp;

    return {
      position: "absolute",
      left: `${x}px`, // Adjust left position for card centering
      top: `${y}px`, // Adjust top position for card centering
      transform: `rotate(${angle + 90}deg)`,
    };
  };
  const handleRotate = (direction) => {
    setRotationAngle(
      (prevAngle) => prevAngle + (direction === "left" ? -30 : 30)
    );
  };

  const handleScroll = (event) => {
    const { deltaY } = event;
    const possibleAngleSnaps = Array.from({ length: cardCount }).map(
      (_, i) => i * (360 / cardCount)
    );

    const index = possibleAngleSnaps.findIndex(
      (angle) => angle === rotationAngle
    );

    if (deltaY < 0) {
      setRotationAngle(
        possibleAngleSnaps[(index + 1) % possibleAngleSnaps.length]
      );
    } else if (deltaY > 0) {
      setRotationAngle(
        possibleAngleSnaps[(index - 1) % possibleAngleSnaps.length]
      );
    }
  };
  // We have to place the cards in exact center of the paret
  // mujy apna cursor nahi dik raha tha, wapis kr lena ap theme
  // space ka kuch kr len...yar mainy pura aik folder del kr dya ha ab or kia krun
  return (
    <>
      <div
        className="fixed top-0 left-0 -z-10 w-[100vw] h-[100vh] overflow-hidden"
        ref={containerRef}
        onWheel={handleScroll}
      >
        <div
          className="absolute top-48 left-1/2 -translate-x-1/2 grid place-items-center"
          style={{ width: `${size}px`, height: `${size}px` }}
        >
          <div
            className="transition-transform duration-300 ease-in-out absolute top-0 left-0 right-0 bottom-0"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              transform: `rotate(${rotationAngle}deg)`,
              transformOrigin: `center`, //why do dfa x y
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {Array.from({ length: cardCount }).map((_, index) => (
              <div key={index} style={getCardStyle(index)}>
                <Card />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default CircularCardLayout;
