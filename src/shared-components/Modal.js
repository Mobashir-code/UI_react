import React, { useRef, useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
//import UserCard from "./Card";

function ModalPopUp(props) {
  const firstNameInput = useRef(props.dataToDisplay.firstName);
  const secondNameInput = useRef(props.dataToDisplay.lastName);
  const cityInput = useRef(props.dataToDisplay.city);
  const countryInput = useRef(props.dataToDisplay.country);
  const [value, setValue] = useState(true);
  //const professionInput = useRef(props.dataToDisplay.profession);
 // const hobbyInput = useRef(props.dataToDisplay.hobby);
 const valueOfField = () =>{
  if(firstNameInput.current.value.trim() && secondNameInput.current.value.trim() && cityInput.current.value.trim() && countryInput.current.value.trim()){
    console.log('false')
    setValue(false);
    return false;
  }
  setValue(true);
  console.log('true')
  return true;
 }
  return (
    <>
      <Modal show={props.show} onHide={props.hide}>
        <Modal.Header closeButton className="table-heading-style">
          <Modal.Title><b>{props.heading}</b></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {props.heading === 'Edit detail' || props.heading === 'View detail'? 
          <Form.Group className="mb-3" controlId="UniqueId">
              <Form.Label>ID</Form.Label>
              <p>
                <b>
                  {props.dataToDisplay._id}
                </b>
              </p> 
            </Form.Group> : ''}
            <Form.Group className="mb-3" controlId="firstName">
              <Form.Label>First Name 
                <span className="required-asterik">
                  *
                </span>
              </Form.Label>
              {props.heading === 'View detail'? (<p>
                <b>
                  {props.dataToDisplay.firstName}
                </b>
              </p> ):
              <Form.Control type="text" placeholder="Enter first name" defaultValue={props.dataToDisplay.firstName}
                ref={firstNameInput} onChange={valueOfField}/>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="secondName">
              <Form.Label>Last Name 
                <span className="required-asterik">
                  *
                </span></Form.Label>
                {props.heading === 'View detail'? (<p>
                <b>
                  {props.dataToDisplay.lastName}
                </b>
              </p> ):
              <Form.Control type="text" placeholder="Enter last name" defaultValue={props.dataToDisplay.lastName}
                ref={secondNameInput} onChange={valueOfField}/>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="city">
              <Form.Label>City
              <span className="required-asterik">
                  *
                </span>
              </Form.Label>
              {props.heading === 'View detail'? (<p>
                <b>
                  {props.dataToDisplay.city}
                </b>
              </p> ):
              <Form.Control type="text" placeholder="Enter city" defaultValue={props.dataToDisplay.city}
                ref={cityInput} onChange={valueOfField}/>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="country">
              <Form.Label>Country
              <span className="required-asterik">
                  *
                </span>
              </Form.Label>
              {props.heading === 'View detail'? (<p>
                <b>
                  {props.dataToDisplay.country}
                </b>
              </p> ):
              <Form.Control type="text" placeholder="Enter country" defaultValue={props.dataToDisplay.country}
                ref={countryInput} onChange={valueOfField}/>}
            </Form.Group>
            {/* <Form.Group className="mb-3" controlId="profession">
              <Form.Label>Profession
              <span className="required-asterik">
                  *
                </span>
              </Form.Label>
              <Form.Control type="text" placeholder="Enter Profession" defaultValue={props.dataToDisplay.profession}
                ref={professionInput} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Hobby">
              <Form.Label>Hobby</Form.Label>
              <Form.Control type="text" placeholder="Enter Hobby" defaultValue={props.dataToDisplay.hobby}
                ref={hobbyInput} />
            </Form.Group> */}
          </Form>
          {/* <UserCard data={props}/> */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.hide}>
            Close
          </Button>
          {props.heading !== 'View detail'? 
          <Button variant="primary" disabled={value} onClick={() => props.saveUpdate({ "firstName": firstNameInput.current.value, "lastName": secondNameInput.current.value, "city": cityInput.current.value, "country": countryInput.current.value })}>
            {props.heading === 'Edit detail' ? 'Update': 'Add'}
          </Button>: ''}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalPopUp;