import React, { useState, useContext } from 'react';
import { Form, FormGroup, Button, Input, Label } from 'reactstrap';
import { Link, useHistory } from 'react-router-dom';
import { GlobalContext } from "../context/GlobalState";
import {v4 as uuid} from 'uuid';

export const AddUser = () => {
    const [name, setName] = useState('');
    const { addUser } = useContext(GlobalContext);
    const history = useHistory();
    const onSubmit = () => {
        const newUser = {
            id: uuid(),
            name: name
        }
        addUser(newUser);
        history.push('/');
    }
    const onChange = (e) => {
        setName(e.target.value);
    }
    return (
        <Form onSubmit={onSubmit}>
            <FormGroup>
                <Label>Name:</Label>
                <Input type="text" placeholder="Enter Name" value={name} onChange={onChange}></Input>
            </FormGroup>
            <Button type="submit">Submit</Button>
            <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
        </Form>
    )
}
export default AddUser;
