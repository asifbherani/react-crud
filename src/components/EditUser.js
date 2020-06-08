import React, { useState, useContext, useEffect }  from 'react';
import { Form, FormGroup, Button, Input, Label } from 'reactstrap';
import { Link, useHistory } from 'react-router-dom';
import { GlobalContext } from "../context/GlobalState";
// import {v4 as uuid} from 'uuid';

export const EditUser = (props) => {
    const [selectedUser, setSelecteUser] = useState({
        id: '',
        name: ''
    });
    const { users, editUser } = useContext(GlobalContext);
    console.log(users);
    const history = useHistory();
    const currentUserId = props.match.params.id;
    console.log("currentUser",currentUserId)

    useEffect(() => {
        const userId = currentUserId;
        const selectedUser = users.find(user => user.id === Number(userId));
        console.log("selectedUSER",selectedUser)
        setSelecteUser(selectedUser)
    }, [currentUserId, users])

    const onSubmit = () => {
        console.log("onSubmit selectedUser", selectedUser)
        editUser(selectedUser)

        history.push('/');
    }
    const onChange = (e) => {
        setSelecteUser({...selectedUser, [e.target.name]: e.target.value})
    }
    return (
        <Form onSubmit={onSubmit}>
            <FormGroup>
                <Label>Name:</Label>
                <Input type="text" placeholder="Enter Name" name="name" value={selectedUser.name} onChange={onChange}></Input>
            </FormGroup>
            <Button type="submit" >Edit Name</Button>
            <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
        </Form>
    )
}
export default EditUser;

