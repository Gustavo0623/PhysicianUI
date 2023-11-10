import React from "react";

const Nav = ({url}) => {

    return(
        <aside id='nav'>
            <span className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none background">
                <img src={ url ? url : "./images/vertex-updated-logo.webp"} alt="Logo" id="Logo"/>
            </span>
            {/* options to be changed with buttons that manage the state of the view or reroutes to a different view page */}
            <a id='newButton' href="/patients">Patients</a>
            <a id='newButton' href="/resourceList">Resources</a>
            <button id='newButton'>TBD</button>
            <button id='newButton'>TBD</button>
        </aside>
    )
}

export default Nav