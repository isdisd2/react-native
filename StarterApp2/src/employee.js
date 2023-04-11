import { useEffect } from "react";
import EmployeeEdit from "./employeeEdit";
import { useParams } from "react-router-dom";

function Employee(props) {
    let { search } = useParams();

    useEffect(() => {
        console.log("Parameter: " + search);
    }, []);

    return (
        <>
            <div>
                <img scr={props.image} />
                <div>
                    <div style={{ display: "flex" }}>
                        <p>{props.name}</p>&nbsp;
                        <p>{props.role}</p>
                        <EmployeeEdit
                            updateEmployee={props.updateEmployee}
                            id={props.id}
                            name={props.name}
                            role={props.role}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Employee;
