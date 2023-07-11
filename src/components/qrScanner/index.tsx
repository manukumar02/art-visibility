import React, { useEffect, useState } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';

declare type Props = {};

const QrScanner: React.FC<Props> = (Props) => {
  const [data, setData] = useState('No Result');
  const [scanresult, setScanresult] = useState(null);



  useEffect(() => {
    const scanner = new Html5QrcodeScanner('reader', {
      qrbox: {
        width: 300,
        height: 300,
      },
      fps: 5,
      
    }, true);
    scanner.render(success, error);

    function success(result: any) {
      scanner.clear();
      setScanresult(result);
    };

    function error(error: any) {
      console.log(error);
    };
  }, []);

  return (
    <div>
      <h1>QR Code Scan</h1>
      {scanresult
      ? <div><a href={scanresult}>{scanresult}</a></div>
      : <div id="reader"></div>
      }
    </div>
  );
};

export default QrScanner;
