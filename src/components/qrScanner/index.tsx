import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';

declare type Props = {};

const QrScanner: React.FC<Props> = (Props) => {
  const [data, setData] = useState('No Result');

  return (
    <div>
      <QrReader
        onResult={(result, error) => {
          if (!!result) {
            console.log({result});
          }

          if (!!error) {
            console.info(error);
          }
        }}
        constraints={{ facingMode: 'user' }}
        containerStyle={{ width: '100%' }}
      />
      <p>{data}</p>
    </div>
  );
};

export default QrScanner;
