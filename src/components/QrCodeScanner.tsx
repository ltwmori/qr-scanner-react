import React, { useState, useEffect } from "react";
import { QrReader } from "react-qr-reader";
import { getUser } from "../requests/request";
import { IData } from "../ts/types";

import "./QrCodeScanner.css";

interface IProps {
  getDataFromChild: (data: IData) => void;
}

const QrCodeScanner: React.FC<IProps> = ({ getDataFromChild }) => {
  const [prevResullt, setPrevResult] = useState<string>("No result");
  const [result, setResult] = useState<string>("No result");
  const [scanned, setScanned] = useState<boolean>(false);

  const handleScan = (data: string | null) => {
    if (data) {
      if (prevResullt !== data) {
        setPrevResult(result);
        setResult(data.toString());
        setScanned(true);
      } else {
        setScanned(false);
      }
    } else {
      setScanned(false);
    }
  };

  useEffect(() => {
    if (scanned) {
      getUser(result).then((res) => {
        if (res.status) getDataFromChild(res.data);
      });
    }
  }, [result]);

  return (
    <div className="qr-container">
      <QrReader
        constraints={{
          facingMode: "environment",
          width: 640,
          height: 480,
        }}
        scanDelay={500}
        // create on result function
        onResult={handleScan as any}
        containerStyle={{ width: "300px", height: "300px" }}
      />
      <p className="text">{result}</p>
    </div>
  );
};

export default QrCodeScanner;
