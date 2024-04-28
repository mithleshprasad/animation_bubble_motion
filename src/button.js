// import React, { useState, useEffect } from "react";
// import "./style.css";

// const BubbleContainer = () => {
//   const [bubbles, setBubbles] = useState([]);
//   const names = [
//     "DevOps",
//     "Data Scientist",
//     "Developer",
//     "UI/UX",
//     "Designer",
//     "Frontend Developer",
//     "Backend Developer",
//     "Product Manager",
//     "Quality Assurance",
//     "System ",
//     "Network Engineer",
//     "Database ",
//     "Security Analyst",
//     "Cloud Architect",
//     "AI Engineer",
//     "Game Developer",
//     "Mobile Developer",
//     "Embedded Engineer",
//     "DevOps Engineer",
//     "Blockchain Developer",
//   ];

//   const colors = [
//     "#ff5733",
//     "#33ff57",
//     "#5733ff",
//     "#ff3399",
//     "#33ffff",
//     "#ffff33",
//     "#ff33ff",
//     "#33ff99",
//     "#ff99cc",
//     "#9966ff",
//     "#ff6633",
//     "#33ff66",
//     "#ffcc33",
//     "#3366ff",
//     "#ff9966",
//     "#33ccff",
//     "#ff6633",
//     "#ff9933",
//     "#ff33cc",
//     "#33cc99",
//   ];

//   const createBubbles = () => {
//     const bubbleCount = 20;
//     const newBubbles = [];
//     for (let i = 0; i < bubbleCount; i++) {
//       const bubble = {
//         id: i,
//         name: names[i % names.length],
//         color: colors[i % colors.length],
//         x: Math.random() * (window.innerWidth - 140) + "px",
//         y: 0,
//         speed: Math.random() * 3 + 1,
//       };
//       newBubbles.push(bubble);
//     }
//     setBubbles(newBubbles);
//   };

//   const moveBubbles = () => {
//     setBubbles((prevBubbles) => {
//       return prevBubbles.map((bubble) => {
//         const newY = bubble.y + bubble.speed;
//         if (newY >= window.innerHeight - 50) {

//           return {
//             ...bubble,
//             y: window.innerHeight - 50,
//           };
//         } else {
//           return {
//             ...bubble,
//             y: newY,
//           };
//         }
//       });
//     });
//   };

//   useEffect(() => {
//     createBubbles();
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(moveBubbles, 50);
//     return () => clearInterval(interval);
//   }, []);

//   const handleContainerMouseMove = (event) => {
//     const containerRect = event.target.getBoundingClientRect();
//     const mouseX = event.clientX - containerRect.left;
//     const mouseY = event.clientY - containerRect.top;

//     setBubbles((prevBubbles) => {
//       return prevBubbles.map((bubble) => {
//         const distanceX = mouseX - parseFloat(bubble.x);
//         const distanceY = mouseY - parseFloat(bubble.y);
//         const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
//         const speed = bubble.speed;
//         const ratio = speed / distance;

//         return {
//           ...bubble,
//           x: parseFloat(bubble.x) + distanceX * ratio,
//           y: parseFloat(bubble.y) + distanceY * ratio,
//         };
//       });
//     });
//   };

//   return (
//     <div class="card">
//     <h5 class="card-header">Featured</h5>
//     <div class="card-body">
//     <h3 class="card-text warning">With supporting text below as a natural lead-in to additional content.</h3>

//     <div
//       className="bubble-container bg-dark"
//       onMouseMove={handleContainerMouseMove}
//     >
//       {bubbles.map((bubble) => (
//         <div
//           key={bubble.id}
//           className="bubble rounded"
//           style={{
//             top: bubble.y + "px",
//             left: bubble.x,
//             backgroundColor: bubble.color,
//           }}
//         >
//           {bubble.name}
//         </div>
//       ))}
//     </div>

//       <h5 class="card-title">Special title treatment</h5>
//       <a href="#" class="btn btn-primary">Go somewhere</a>
//     </div>
//   </div>

//   );
// };

// export default BubbleContainer;
import React, { useState, useEffect } from "react";
import "./style.css";

const BubbleContainer = () => {
  const [bubbles, setBubbles] = useState([]);
  const names = [
    "DevOps",
    "Data Scientist",
    "Developer",
    "UI/UX",
    "Designer",
    "Frontend Developer",
    "Backend Developer",
    "Product Manager",
    "Quality Assurance",
    "System ",
    "Network Engineer",
    "Database ",
    "Security Analyst",
    "Cloud Architect",
    "AI Engineer",
    "Game Developer",
    "Mobile Developer",
    "Embedded Engineer",
    "DevOps Engineer",
    "Blockchain Developer",
  ];

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
    "#33cc99",
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
    <div class="card">
      <div class="card-body">
        <button class="card-header btn">We co-create with you</button>
        <h3 class="card-text warning">
          Build a team to meet your growth goals
        </h3>

        <div
          className="bubble-container bg-dark"
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

        <h5 class="card-title">Special title treatment</h5>
        <a href="#" class="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default BubbleContainer;
