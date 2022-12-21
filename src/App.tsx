import React, { useState } from "react";
import QrCodeScanner from "./components/QrCodeScanner";
import { IData } from "./ts/types";

import "./App.css";

function App() {
  const [user, setUser] = useState<IData[]>([]);

  const getDataFromChild = (data: IData) => {
    setUser((prev) => [...prev, data].splice(-5));
  };

  return (
    <div className="App">
      <QrCodeScanner getDataFromChild={getDataFromChild} />
      <div className="users">
        {user.map((item) => (
          <div
            className={
              item.updated_at && (item.count || item.count === 0)
                ? "user-red"
                : "user"
            }
            key={item.hash}
          >
            <div className="user-header">
              <p className="name">{item.name}</p>
              <p className="">
                {item.updated_at ? item.updated_at.toString() : " "}
              </p>
            </div>
            <div className="user-header">
              <p>{item.hash}</p>
              <p>{item.count ? item.count : null}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
