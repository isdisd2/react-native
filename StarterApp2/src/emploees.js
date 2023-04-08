import { Component, useState } from "react";
import Emploee from "./employee";

function Emploees() {
    const [role, setRole] = useState("dev");
    const showEmploees = true;

    return (
        <div className="App bg-red-300">
            {showEmploees ? (
                <>
                    <input
                        type="text"
                        onChange={(e) => {
                            setRole(e.target.value);
                        }}
                    />
                    <Emploee name="Name1" role="role1" />
                    <Emploee name="Name2" role="role2" />
                    <Emploee name="Name3" role="role3" />
                </>
            ) : (
                <p>You cannot see employes</p>
            )}
        </div>
    );
}

export default Emploees;
