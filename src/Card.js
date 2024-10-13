import "./Card.css";
import Button from "./Button";
import React from "react";
// function Card(){
//     return(
//       <div className="col">
//       <div className="card">
//         <img src="./images/01.png" alt="" />
//         <div className="card-body">
//           <h5 className="card-title">shoe 1</h5>
//           <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi aliquam nesciunt, perferendis tenetur incidunt odit.</p>
//           <Button />
//         </div>
//       </div>
//     </div>
//     )
//   }

class Card extends React.Component {
  render() {
    return (
      <div className="col">
        <div className="card">
          <img src="./images/01.png" alt="" />
          <div className="card-body">
            <h5 className="card-title">shoe 1</h5>
            <p className="card-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
              aliquam nesciunt, perferendis tenetur incidunt odit.
            </p>
            <Button />
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
