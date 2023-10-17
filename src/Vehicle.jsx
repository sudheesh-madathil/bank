
import { useState } from "react";
// import "./vehicle.css";


import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
// import { Button } from 'react-bootstrap';


import "bootstrap/dist/css/bootstrap.min.css";
function VehicleCard({ title, description }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

function Vehicle() {
  //  const [vehicle,setvehicle] = useState([]);
  const [searchlist, setsearchlist] = useState([]);
  const [list, setlist] = useState([{}]);
  const [one_road, setonroad] = useState(0);
  const [ip, setip] = useState(0);
  const [dc, setdc] = useState(0);
  const [tree, setTree] = useState(0); // Initialize tree with an initial value of 0
  const [towhalf, settwohalf] = useState(0);
  const [two, settwo] = useState(0);
  const [one, setone] = useState(0);
  const [onehalf, setonehalf] = useState(0);
  const [png, setpng] = useState(0);
  const [month, setmonth] = useState(0);

  const click = () => {
    const values = Number(one_road) - Number(ip);
    const result = Number(values) + Number(dc);
    const emi =
      ((Number(result) * Number(png)) / Number(100)) * Number(3) +
      Number(result);
    const newtree = Number(emi) / Number(month);
    const twohalf =
      ((Number(result) * Number(png)) / Number(100)) * Number(2.5) +
      Number(result);
    const newsettwohalf = Number(twohalf) / Number(29);
    const two =
      ((Number(result) * Number(png)) / Number(100)) * Number(2) +
      Number(result);
    const newtwo = Number(two) / Number(23);
    const onehalf =
      ((Number(result) * Number(png)) / Number(100)) * Number(1.5) +
      Number(result);
    const newonehalf = Number(onehalf) / Number(17);
    const one =
      ((Number(result) * Number(png)) / Number(100)) * Number(1) +
      Number(result);
    const newone = Number(one) / Number(11);
    setone(newone);
    setTree(newtree);
    settwohalf(newsettwohalf);
    setonehalf(newonehalf);
    settwo(newtwo);
    console.log(values);
    console.log(result,'lone ammount');

    console.log(two);
  };

  // useEffect(() => {
  //   axios
  //     .get('http://localhost:4000/api/v1/user/vehicle')
  //     .then((response) => {
  //       setvehicle(response.data);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching data:', error);
  //     });
  // }, []);
  // console.log(vehicle)
  // const handilclick = () => {
  //   axios
  //     .get(
  //       `http://localhost:4000/api/v1/user/vehicle-search?vehicle=${searchlist}`
  //     )

  //     .then((response) => setlist(response.data));
  //   setsearchlist("");
  // };
  // const [validated, setValidated] = useState(false);

  // const handleSubmit = (event) => {
  //   const form = event.currentTarget;
  //   if (form.checkValidity() === false) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //   }

  //   setValidated(true);
  // };

  return (
    <>
      {/* <input
        onChange={(e) => setsearchlist(e.target.value)}
        type="text"
        placeholder="search"
      />
      <button style={{ background: "blue" }} onClick={handilclick}>
        search
      </button>
      <div>
        <table>
          <thead>
            <tr>
              <th>vehicle</th>
              <th>ex_price</th>
              <th>b2b</th>
              <th>tax</th>
              <th>ragistration</th>
              <th>accessories</th>
              <th>wrnty</th>
              <th>one_road</th>
              <th>insurance</th>
            </tr>
          </thead>
          <tbody>
            {list.map((item) => (
              <tr key={item._id}>
                <td>{item.vehicle}</td>
                <td>{item.ex_price}</td>
                <td>{item.b2b}</td>
                <td>{item.tax}</td>
                <td>{item.ragistration}</td>
                <td>{item.accessories}</td>
                <td>{item.wrnty}</td>
                <td>{item.one_road}</td>
                <td>{item.insurance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}

      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">Calculate EMI</h3>
                <div className="mb-3">
                  <label
                    htmlFor="onRoad"
                    className="form-label"
                    style={{ color: "red" }}
                  >
                    On Road
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="onRoad"
                    value={one_road}
                    onChange={(e) => setonroad(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="ip" className="form-label">
                    IP
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="ip"
                    value={ip}
                    onChange={(e) => setip(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="dc" className="form-label">
                    doumentation charge
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="dc"
                    value={dc}
                    onChange={(e) => setdc(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="png" className="form-label">
                    Percentage
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="png"
                    value={png}
                    onChange={(e) => setpng(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="month" className="form-label">
                    Month
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="month"
                    value={month}
                    onChange={(e) => setmonth(e.target.value)}
                  />
                </div>
                <button className="btn btn-warning" onClick={click}>
                  Calculate Result
                </button>
              </div>
            </div>
          </div>
      
        </div>
      </div>

      <div className="container">
        <div className="row justify-content-center mt-5">
          <VehicleCard title="3 Year" description={`${tree.toFixed(0)}*35`} />
          <VehicleCard
            title="2.5 Year"
            description={`${towhalf.toFixed(0)}*29`}
          />
          <VehicleCard title="2 Year" description={`${two.toFixed(0)}*23`} />
          <VehicleCard
            title="1.5 Year"
            description={`${onehalf.toFixed(0)}*17`}
          />
          <VehicleCard title="1 Year" description={`${one.toFixed(0)}*11`} />
        </div>
      </div>
    </>
  );
}

export { Vehicle };
