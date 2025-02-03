import { useState } from "react";
import languages from "./data/languages";

export default function App() {
  return (
    <div className="container">
      <div className="accordion-card">
        <div className="accordion-name">
          <h3 className="title">Titolo</h3>
          <button type="button">+</button>
        </div>
        <div className="accordion-info">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            consequatur quidem suscipit et fugit unde autem sed placeat. Quis
            maiores nisi ratione debitis, laborum dolorum reprehenderit
            voluptatibus impedit dolore numquam?
          </p>
        </div>
      </div>
    </div>
  );
}
