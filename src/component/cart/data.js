import React, { Component } from 'react';

import { Row, Col, Image, Button } from 'react-bootstrap';
import { FaRupeeSign, FaPlusCircle, FaMinusCircle } from 'react-icons/fa';




class ItemsCart extends Component {
    constructor(props) {
        super(props)

        this.state = {
          
        }
    }


    render() {
    return (
        <div className="addItem">
          <Row>
            <Col lg="3">
              <Image src="https://cdn.mos.cms.futurecdn.net/r75W7xKkPwuFG6gvxjL26o-650-80.jpg" />
            </Col>
            <Col lg="9">
              <ul className="addItem-content">
                <li>
                <h6>Items 1</h6>
                <h3>
                  <FaRupeeSign /> 
                  <span className="price">300</span>
                  <strike>900</strike>
                  <span className="off">off 15%</span>
                </h3>
                </li>
                <li>
                  <FaMinusCircle className="round-btn" />
                  <input type="text" className="item-count"/>
                  <FaPlusCircle className="round-btn" />
                </li>
                <li>
                <Button className="remove-btn">REMOVE</Button>
                </li>
              </ul>
            </Col>
          </Row>
        </div>
    );
  }
 }

 export default ItemsCart;








