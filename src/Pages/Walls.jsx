import React, { useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { wallsdesigningPrice } from "../redux/reducer";
import Painting from "../Images/painting.png" 
import PaintingandWallPutty from "../Images/paintingandwallputty.png" ;
import paintingwallputtywallpaper from "../Images/paintingwallputtywallpaper.png" ;


const Walls = ({roomID}) => {

  const [allwallsImg, setAllWallsImg] = useState(false);
 
  const dispatch = useDispatch();

  const wallsonClick = () => {
    if (allwallsImg === false) {
      setAllWallsImg(true);
    } else {
      setAllWallsImg(false);
    }
  };

  

  const wallsImg = [
    {
      img:Painting,
      title: "Painting",
      cost: 20000,
    },

    {
      img: PaintingandWallPutty,
      title: "Painting & Wall Putty",
      cost: 40000,
    },

    {
      img: paintingwallputtywallpaper,
      title: "Painting ,Wall Putty & Wallpaper",
      cost: 65000,
    },
  ];
  return (
    <Card className="p-2 m-2">
      {allwallsImg ? (
        <Row>
          <Col>
            <Form.Check.Input onClick={() => wallsonClick()} />
            <Form.Check.Label>Walls</Form.Check.Label>{" "}
          </Col>
          <Row>
            {wallsImg.map((walls,index) => (
              <Col key={index} className="px-3 column">
                <img
                  src={walls.img}
                  alt=""
                  style={{ width: "110px", height: "110px" }}
                  className="img"
                  onClick={() => {
                    dispatch(wallsdesigningPrice({walls,roomID}))
                  }}
                />

                <p className="text-center font-monospace">{walls.title}</p>
              </Col>
            ))}
          </Row>
        </Row>
      ) : (
        <Col>
          <Form.Check.Input type="checkbox" onClick={() => wallsonClick()} />
          <Form.Check.Label>Walls</Form.Check.Label>
        </Col>
      )}
    </Card>
  );
};

export default Walls;
