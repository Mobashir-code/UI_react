import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import ModalPopUp from './shared-components/Modal';
import './App.css';
import UserList from './page-component/UserList';
import React, { useState, useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';

function App() {
  const [items, setItems] = useState([]);
  useEffect(()=>{
    getAllCall();
  }, [])

  const [show, setShow] = useState(false);
  const [alertText, setAlertText] = useState('');
  const initialData = {'firstName': '', 'lastName':'', 'city': '', 'country': ''};
  const [modalHeading, setModalHeading] = useState('');
  
  const [ModalData, setEditData] = useState(initialData);
  const handleSaveUpdate = async (value) => {
    console.log(value)
    if(modalHeading === 'Add detail'){
      await postCall(value);
      setAlertText('Records is added successfully');
    }else{
      await putCall(value);
      setAlertText('Records is updated successfully');
    }
    setShow(false);
    getAllCall();
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 4000);
  }
  async function postCall(value){
    try {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(value)
    };
      const response = await fetch('http://localhost:3001/add', requestOptions)
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  async function putCall(value){
    try {
      const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(value)
      };
      const response = await fetch(`http://localhost:3001/users/${ModalData._id}`, requestOptions)
      const data = await response.json();
      console.log(data);
    } catch (error) {
        console.log(error);
    }
  }

  async function getAllCall(){
    try {
      const response = await fetch(`http://localhost:3001/users`)
      const data = await response.json();
      console.log(data);
      setItems(data);
    } catch (error) {
        console.log(error);
    }
  }

  async function getSingleCall(value){
    try {
      const response = await fetch(`http://localhost:3001/users/${value._id}`)
      const data = await response.json();
      console.log(data);
      setEditData(value);
      setModalHeading('View detail')
      setShow(true);
      //setItems(data);
    } catch (error) {
        console.log(error);
    }
  }
  
  async function deleteCall(data) {
    console.log(data)
    const info = await fetch(`http://localhost:3001/users/${data._id}`, { method: 'DELETE' });
    console.log('Delete successful', info);
    getAllCall();
    setShowAlert(true);
    setAlertText('Records is deleted successfully');
    setTimeout(() => {
      setShowAlert(false);
    }, 4000);
  }

  const handleClose = () => setShow(false);
  const handleShow = (val, data) => {
    setEditData(data)
    console.log(data)
    setModalHeading(val)
    setShow(true);
  }
  const [showAlert, setShowAlert] = useState(false)
  return (
    <div className="margin-val">
      <Container>
      <Row>
        <ModalPopUp show={show} saveUpdate={handleSaveUpdate} hide={handleClose} heading={modalHeading} dataToDisplay={ModalData}/>
      </Row>
      {showAlert? <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
        <Alert.Heading>{alertText}</Alert.Heading>
      </Alert>:''}
      <UserList showModal={handleShow} items={items} deleteRow={deleteCall} viewDetail={getSingleCall}/>
    </Container>
    </div>
  );
}

export default App;
