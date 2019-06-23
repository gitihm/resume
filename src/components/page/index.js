import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import './style.css'
import Header from '../header/';
import Body from '../body/';
import Imgprofile from '../imgprofile/';
function Page() {
  return (
    <div className="App">
      
      <Card className="test">
      <Header/>
      <Imgprofile/>
      
      <Body/>
      </Card>

    </div>
  );
}
const ColoredLine = ({ color }) => (
  <hr
      style={{
          color: color,
          backgroundColor: color,
          height: 10
      }}
  />
);

export default Page;
