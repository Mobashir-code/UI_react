import TableComponent from "../shared-components/Table";
import Button from 'react-bootstrap/Button';
import { BsPlusCircleFill } from "react-icons/bs";
import Card from 'react-bootstrap/Card';

const UserList = (props) => {
    const initialData = { 'firstName': '', 'lastName': '', 'city': '', 'country': '' };
    const headingData = ['First Name', 'Last Name', 'City', 'Country', 'Actions'];
    return (
        <div className="d-grid gap-3 margin-val">
            <Button variant="info" size="lg" onClick={() => props.showModal('Add detail', initialData)}>
                <BsPlusCircleFill /> <span className="add-style"><b>Add</b></span>
            </Button>
            {props.items.length? <TableComponent items={props.items} headingData={headingData} editShow={props.showModal} deleteCall={props.deleteRow}
                getSingleCall={props.viewDetail} />: 
                <Card>
                <Card.Body className="card-with-no-data">No data available</Card.Body>
              </Card>}
        </div>

    )
}

export default UserList;