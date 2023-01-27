import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { BsFillPencilFill, BsFillXCircleFill, BsFillEyeFill } from "react-icons/bs";

function TableComponent(props) {
    return (
        <Table striped bordered hover>
            <thead>
                <tr className='table-heading-style'>
                    {props.headingData.map(value =><th key={value}>{value}</th>)}
                </tr>
            </thead>
            <tbody>
                {props.items.map((data)=>(
                <tr key={data._id}>
                <td>{data.firstName}</td>
                <td>{data.lastName}</td>
                <td>{data.city}</td>
                <td>{data.country}</td>
                <td>
                    <Button variant='outline-info' title="View" onClick={()=>props.getSingleCall(data)}><BsFillEyeFill /></Button>{' '}
                    <Button variant='outline-primary' title="Edit" onClick={()=>props.editShow('Edit detail', data)}><BsFillPencilFill /></Button>{' '}
                    <Button variant='outline-danger' title="Delete" onClick={()=>props.deleteCall(data)}><BsFillXCircleFill /></Button>
                </td>
                </tr>
                )
                )}
            </tbody>
        </Table>
    )
}
export default TableComponent;