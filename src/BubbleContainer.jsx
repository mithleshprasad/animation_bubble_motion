
import React, { useState, useEffect } from "react";
import "./style.css";

const BubbleContainer = () => {
  const [bubbles, setBubbles] = useState([]);
  const names=[
"Ui Design",
"Pitch deck",
"community manager",
"Content strategy",
"Big data",
"Branding",
"S-media marketing",
"Films & prod..",
"Email marketing",
"E-commerse",
"Live events",
"Design system",
"crypto",
"A-I",
"Mashine learning",
"Java",
"contact",
"Digital",
"AI marketing",
"Python",
"Crypto-marketing",
"Saas marketing"
]

const colors = [
    "#ff5733",
    "#33ff57",
    "#5733ff",
    "#ff3399",
    "#33ffff",
    "#ffff33",
    "#ff33ff",
    "#33ff99",
    "#ff99cc",
    "#9966ff",
    "#ff6633",
    "#33ff66",
    "#ffcc33",
    "#3366ff",
    "#ff9966",
    "#33ccff",
    "#ff6633",
    "#ff9933",
    "#ff33cc",
    "#33cc99"
  ];

const createBubbles = () => {
  const bubbleCount = 20;
  const newBubbles = [];
  for (let i = 0; i < bubbleCount; i++) {
    const bubble = {
      id: i,
      name: names[i % names.length],
      color: colors[i % colors.length],
      x: Math.random() * (window.innerWidth - 140) + "px",
      y: 0,
      speed: Math.random() * 3 + 1,
      directionX: Math.random() > 0.5 ? 1 : -1, // Added directionX property
      directionY: Math.random() > 0.5 ? 1 : -1, // Added directionY property
    };
    newBubbles.push(bubble);
  }
  setBubbles(newBubbles);
};

const moveBubbles = () => {
  setBubbles((prevBubbles) => {
    return prevBubbles.map((bubble) => {
      let newX = parseFloat(bubble.x) + bubble.speed * bubble.directionX;
      let newY = parseFloat(bubble.y) + bubble.speed * bubble.directionY;

      if (newX <= 0 || newX >= window.innerWidth - 140) {
        bubble.directionX *= -1;
        newX = parseFloat(bubble.x) + bubble.speed * bubble.directionX;
      }

      if (newY <= 0 || newY >= window.innerHeight - 50) {
        bubble.directionY *= -1;
        newY = parseFloat(bubble.y) + bubble.speed * bubble.directionY;
      }

      return {
        ...bubble,
        x: newX + "px",
        y: newY + "px",
      };
    });
  });
};

useEffect(() => {
  createBubbles();
}, []);

useEffect(() => {
  const interval = setInterval(moveBubbles, 50);
  return () => clearInterval(interval);
}, []);

const handleContainerMouseMove = (event) => {
  const containerRect = event.target.getBoundingClientRect();
  const mouseX = event.clientX - containerRect.left;
  const mouseY = event.clientY - containerRect.top;

  setBubbles((prevBubbles) => {
    return prevBubbles.map((bubble) => {
      const distanceX = mouseX - parseFloat(bubble.x);
      const distanceY = mouseY - parseFloat(bubble.y);
      const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
      const speed = bubble.speed;
      const ratio = speed / distance;

      return {
        ...bubble,
        x: parseFloat(bubble.x) + distanceX * ratio,
        y: parseFloat(bubble.y) + distanceY * ratio,
      };
    });
  });
};

return (
  <div className="card  ">
    <div  className="card-body ">
     

      <div
        className="bubble-container bg-dark "
        onMouseMove={handleContainerMouseMove}
        onTouchMove={handleContainerMouseMove} // Handle touch move event
      >
        {bubbles.map((bubble) => (
          <div
            key={bubble.id}
            className="bubble rounded"
            style={{
              top: bubble.y,
              left: bubble.x,
              backgroundColor: bubble.color,
            }}
          >
            {bubble.name}
          </div>
        ))}
      </div>
      <a href="#" class="block mt-4 text-center text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded-lg">
  Go somewhere that is on the .....
</a>


    </div>
  </div>
);
};

export default BubbleContainer;