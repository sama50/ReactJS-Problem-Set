import React, { useEffect, useState } from "react";

const list = [
  {
    id: 1,
    arr1: [1, 2,3, 4, 5],
  },
  {
    id: 2,
    arr1: [1, 2, 3, 4, 5, 6, 7],
  },
  {
    id: 4,
    arr1: [1, 2, 3],
  },
  {
    id: 5,
    arr1: [1, 2, 3],
  },
  {
    id: 6,
    arr1: [1, 2, 3],
  },
];

function Main() {
  const [no, setno] = useState(0); 
  const [fno, setfno] = useState(0);
  const [formvalue, setformvalue] = useState(0);

  let arr = list[no].arr1;
  const [meanValue, setmeanValue] = useState(0);
  const [medianValue, setmedianValue] = useState(0);
  const [sdvalue, setsdvalue] = useState(0);
  const [modevalue, setmodevalue] = useState(0);

  const handleClick = () => {
    console.log(no);
    console.log(list.length);
    if (no == arr.length) {
      setno(0);
    } else {
      setno(no + 1);
    }
  };

  const meanhandle = () => {
    let sum = 0;
    arr.map((val) => {
      sum += val;
    });
    setmeanValue(sum / arr.length);
  };
  const medianhandle = () => {
    if (arr.length % 2 === 0) {
      setmedianValue((arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2);
      console.log(arr.length / 2);
      console.log(arr.length / 2 - 1);
    } else {
      setmedianValue(arr[arr.length / 2 - 0.5]);
      // console.log(arr[arr.length/2])
    }
  };
  const changehandle = (e) => {
   
     setformvalue(e.target.value);
     console.log(formvalue);
  };
  const mostfre = () => {
    if (arr.length == 0) return null;
    var modeMap = {};
    var maxEl = arr[0],
      maxCount = 1;
    for (var i = 0; i < arr.length; i++) {
      var el = arr[i];
      if (modeMap[el] == null) modeMap[el] = 1;
      else modeMap[el]++;
      if (modeMap[el] > maxCount) {
        maxEl = el;
        maxCount = modeMap[el];
      }
    }
    setmodevalue(maxEl);
  };
  const standevi = () => {
    let sum = 0;
    arr.map((val) => {
      sum += val;
    });
    sum = sum / arr.length;
    let sd = 0;
    arr.map((val) => {
      sd += (val - sum) * (val - sum);
    });
    sd = sd / arr.length;
    setsdvalue(Math.sqrt(sd));
  };
  const handleSubmit =(e)=>{
    
  
    console.log("click")
    console.log(formvalue)
    setfno(formvalue)
    console.log(fno)
    list[no].arr1.push(fno)
    console.log(list[no].arr1)
    // console.log(list[no].arr1.length)
    e.preventDefault();
  }

  useEffect(() => {
    meanhandle();
    medianhandle();
    standevi();
    mostfre();
  }, [no,fno]);

  return (
    <>
      <div className="container mt-5">
        <table className="table">
          <tbody>
            <tr>
              <td>Mean</td>
              <td>{meanValue}</td>
            </tr>
            <tr>
              <td>Median</td>
              <td>{medianValue}</td>
            </tr>
            <tr>
              <td>StdDev</td>
              <td>{sdvalue}</td>
            </tr>
            <tr>
              <td>Mode</td>
              <td>{modevalue}</td>
            </tr>
          </tbody>
        </table>
        <button className="btn btn-primary" onClick={handleClick}>
          Reload Data
        </button>
        <div>
          <form className="mt-5" onSubmit={handleSubmit}>
            <label>
              Push Value
              <input style={{marginLeft:"2%"}} type="number" value={formvalue} onChange={changehandle} />
            </label>
            <input style={{marginLeft:"5%"}} type="submit" value="Submit" className="btn btn-success"/>
          </form>
        </div>
      </div>
    </>
  );
}

export default Main;
