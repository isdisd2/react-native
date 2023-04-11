import { Component, useState } from "react";
import Emploee from "./employee";
import EmploeeAdd from "./employeeAdd";
import { v4 as uuidv4 } from "uuid";
import "../App.css";

function Emploees() {
    const [role, setRole] = useState("dev");
    const [employes, setEmployes] = useState([
        { id: 1, name: "nnnn1", role: "rrr1", image: "./img1.png" },
        { id: 2, name: "nnnn2", role: "rrr1", image: "./img1.png" },
        { id: 3, name: "nnnn3", role: "rrr2", image: "./img1.png" },
        { id: 4, name: "nnnn4", role: "rrr2", image: "./img1.png" },
    ]);
    const showEmploees = true;
    function updateEmployee(id, newName, newRole) {
        console.log(id, newName, newRole);
        const updatedEmployee = employes.map((item) => {
            if (item.id == id) {
                return { ...item, name: newName, role: newRole };
            }
            return item;
        });
        setEmployes(updatedEmployee);
    }
    
    function newEmployee(name, role, image) {
        const newEmployee = {id: uuidv4(),
            name, role, img: image
        };
        setEmployes([...employes, newEmployee]);
    }

    return (
        <div className="App">
            {showEmploees ? (
                <>
                    <input
                        type="text"
                        onChange={(e) => {
                            setRole(e.target.value);
                        }}
                    />
                    <div className="flexEmployee">
                        {employes.map((item) => {
                            return (
                                <Emploee
                                    key={item.id}
                                    id={item.id}
                                    name={item.name}
                                    role={item.role}
                                    image={item.image}
                                    updateEmployee={updateEmployee}
                                />
                            );
                        })}
                    </div>
                    <EmploeeAdd newEmployee={newEmployee}/>
                </>
            ) : (
                <p>You cannot see employes</p>
            )}
        </div>
    );
}

export default Emploees;
