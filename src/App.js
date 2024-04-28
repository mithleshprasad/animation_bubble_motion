import React from "react";
import BubbleContainer from "./BubbleContainer";
import Header from "./Header";
import HeaderButton from "./HeaderButton";

const App = () => {
  return (
  
    <div className="container mx-auto flex flex-col items-center justify-center mt-4">
        <HeaderButton />
        <Header />
        <BubbleContainer />
  </div>
  );
};

export default App;
