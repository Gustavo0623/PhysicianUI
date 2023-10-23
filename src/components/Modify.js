import React from "react"
import { Link } from "react-router-dom"

function Modify({currentUser, setUser}) {

    // app.post("/updatePatient", (req, res) => {
    //     const { patientName, MRN, newData } = req.body
    // app.post("/deletePatient", (req, res) => {
    //     const { patientName, MRN } = req.body

    return (
        <div className='modifyBox'>
            <Link className='edit' onClick={() => {setUser(currentUser)}} to={`./${currentUser.MRN}`}>
                <img src='../images/pencil.png' alt='pencil' className='modifyIcons'/>
            </Link>
            <button className='delete'>
                <img src='../images/bin.png' alt='bin' className='modifyIcons'/>
            </button>
        </div>
    )
}

export default Modify