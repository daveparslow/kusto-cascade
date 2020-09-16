import React, { useState } from 'react';
import './App.css';

import csvtojson  from 'csvtojson';
import { fromHar } from 'perf-cascade';
import { getHar } from './har/getHar';
import { Entry } from './har/Har.types';
import { getEntry } from './har/getEntry';

let element: SVGSVGElement | undefined; 

function App() {

  const [rows, setFileText] = useState<object[] | undefined>(undefined);

  const onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const files = evt.target.files;
    if (files) {

      var reader = new FileReader();
    
      reader.addEventListener('load', function (e) {
        const text = typeof e.target?.result === "string" ? e.target?.result : '';
        csvtojson().fromString(text.toString()).then((row) => {
          setFileText(row);
        });
        
      });
    
      reader.readAsText(files[0]);
    }
  };

  if (rows) {
      console.log(rows);
      if (!element) {
      const har = getHar(rows.map(mapRow));
      element = fromHar(har, {
        rowHeight: 23, //default: 23
        showAlignmentHelpers: true, //default: true
        showIndicatorIcons: true //default: true
        //leftColumnWith: 25, //default: 25
      });

    
      document.getElementsByClassName('App')[0]?.appendChild(element);
    }
  }

  return <div className="App"><label>
  Click Me
  <input
    type='file'
    id='harFile'
    onChange={onChange}
  ></input>
</label></div>;
}

function mapRow(row: any, index: number): Entry {
  const entry = getEntry({
    startedDateTime: row.timestamp,
    request: {
      url: 'http://' + row.operation_Name || row.event_Name
    }
  });
  return entry;
}

export default App;
