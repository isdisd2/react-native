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

function EmployeeEdit(props) {
    const [show, setShow] = useState(false);
    const [name, setName] = useState(props.name);
    const [role, setRole] = useState(props.role);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button
                className="buttonModal"
                onClick={handleShow}
                variant="primary"
            >
                Edit
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
                            handleClose();
                            props.updateEmployee(props.id, name, role);
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
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <button form="editmodal" onClick={handleClose}>
                        Close
                    </button>
                    <button form="editmodal">Update</button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default EmployeeEdit;
