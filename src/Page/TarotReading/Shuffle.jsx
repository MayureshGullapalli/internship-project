import React, { useState } from "react";
import "./Cards.css";
import { animate, motion } from "framer-motion";
import IMG from "./IMGS/shuffle card girl.png";
import CARDS from "./IMGS/wizard-tarot-card-rider-site-scry.png";
const Shuffle = () => {
  const variants = [];
  for (let i = 0; i < 20; i++) {
    if (i > 9) {
      variants[i] = {
        open: { x: -(100 + 60 * i), y: -100, opacity: 0 },
        closed: { x: 0, y: 150 - i * 15, opacity: 1 },
      };
    } else {
      variants[i] = {
        open: { x: 100 + 60 * i, y: -100, opacity: 0 },
        closed: { x: 0, y: 0 + (i - 9) * 15, opacity: 1 },
      };
    }
  }

  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="Main-Tarot">
      <div className="Tarot-Heading">
        <h1>Weekend Tarot Fortune</h1>
        <h3>Choose a Card</h3>
      </div>
      <div className="girl-pic">
        <img src={IMG} alt="" />
      </div>
      <div className="deck">
        <div className="cards-collection">
          {variants.map((variant, index) => {
            return (
              <motion.img
                key={index}
                animate={isOpen ? "open" : "closed"}
                variants={variant}
                transition={{ duration: 0.2, delay: 0.1 * index }}
                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4cac51c9-c3a8-4cda-9fe5-97ce7eb245de/d3jyror-c5f8b752-ad1b-4bba-8e72-3d404bbbb044.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzRjYWM1MWM5LWMzYTgtNGNkYS05ZmU1LTk3Y2U3ZWIyNDVkZVwvZDNqeXJvci1jNWY4Yjc1Mi1hZDFiLTRiYmEtOGU3Mi0zZDQwNGJiYmIwNDQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.q_gOS0PY9QL7Rzj4OkL-TnSWj_P3O02UxCKTOuwoa1c"
                alt=""
              />
            );
          })}
        </div>
        <div className="buttons">
          <button onClick={() => setIsOpen((isOpen) => !isOpen)}>
            Shuffle
          </button>
        </div>
      </div>
    </div>
  );
};

export default Shuffle;