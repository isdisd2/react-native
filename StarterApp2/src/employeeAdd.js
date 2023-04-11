import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Button,
    useColorScheme,
    Pressable,
    TextInput,
} from "react-native";
// import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function EmployeeAdd(props) {
    const [show, setShow] = useState(false);
    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [image, setImage] = useState('');
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button
                className="buttonModal"
                onClick={handleShow}
                variant="primary"
            >
                Add +
            </button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Update employee</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            setRole('');
                            setName('');
                            setImage('');
                            props.newEmployee(name, role, image);
                        }}
                        id="editmodal"
                    >
                        <label>Name</label>
                        <TextInput
                            id="name"
                            value={props.name}
                            onChange={setName}
                            editable={true}
                        />
                        <label>Role</label>
                        <TextInput
                            id="role"
                            value={props.role}
                            onChange={setRole}
                        />
                        <label>Image</label>
                        <TextInput
                            id="image"
                            value={props.image}
                            onChange={setImage}
                        />
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <button form="editmodal" onClick={handleClose}>
                        Close
                    </button>
                    <button form="editmodal"  onClick={handleClose}>Add</button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default EmployeeAdd;
