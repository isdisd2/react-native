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

function EmployeeAdd(props) {
    const [show, setShow] = useState(false);
    const [name, setName] = useState("");
    const [role, setRole] = useState("");
    const [image, setImage] = useState("");
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
                    <SafeAreaView>
                        <label>Name</label>
                        <TextInput
                            id="name"
                            value={props.name}
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                            editable={true}
                        />
                        <label>Role</label>
                        <TextInput
                            id="role"
                            value={props.role}
                            onChange={(e) => {
                                setRole(e.target.value);
                            }}
                        />
                        <label>Image</label>
                        <TextInput
                            id="image"
                            secureTextEntry={true}
                            value={props.image}
                            onChange={(e) => {
                                setImage(e.target.value);
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
                            handleClose();
                            setRole("");
                            setName("");
                            setImage("");
                            props.newEmployee(name, role, image);
                        }}
                    >
                        Add
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default EmployeeAdd;
