import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Button,
    useColorScheme,
    Pressable,
    TextInput,
    SafeAreaView,
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
                keyboard={true}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Update employee</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <SafeAreaView>
                        <TextInput
                            editable
                            placeholder="Name..."
                            id="name"
                            label="Name"
                            // value={props.name}
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                            activeUnderlineColor="green"
                            underlineColor="purple"
                        />

                        <TextInput
                            editable
                            placeholder="Role..."
                            label="Role"
                            id="role"
                            // value={props.role}
                            onChange={(e) => {
                                setRole(e.target.value);
                            }}
                        />
                    </SafeAreaView>
                </Modal.Body>
                <Modal.Footer>
                    <button form="editmodal" onClick={handleClose}>
                        Close
                    </button>
                    <button
                        form="editmodal"
                        onClick={(e) => {
                            // e.preventDefault();
                            handleClose();
                            props.updateEmployee(props.id, name, role);
                        }}
                    >
                        Update
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default EmployeeEdit;
