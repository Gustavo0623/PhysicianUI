import React from "react"
import { Link } from "react-router-dom"

function Modify({currentUser, setUser, setEdit, fetchData}) {

    // app.post("/updatePatient", (req, res) => {
    //     const { patientName, MRN, newData } = req.body
    // app.post("/deletePatient", (req, res) => {
    //     const { patientName, MRN } = req.body

    // TODO: fix fetch to delete
    async function deletePatient() {

        try {
            const MRNToDelete = currentUser.MRN;
            // http://160.94.179.166/
            const response = await fetch('http://160.94.179.166:2270/deletePatient', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    patientName: currentUser.patientName,
                    MRN: MRNToDelete,
                })
            });
          
            if (!response.ok) {
              throw new Error('Failed to delete the patient');
            }
            const data = await response.json();
            console.log(data.message); // Assuming the server sends a message upon successful deletion
            fetchData()
        } catch (error) {
            console.error(error);
            fetchData()
        }
    }
      

    return (
        <div className='modifyBox'>
            <Link className='edit' onClick={() => {
                setUser(currentUser)
                setEdit(true)
            }} to='../editPatient'>
                <img src='../images/pencil.png' alt='pencil' className='modifyIcons'/>
            </Link>
            <button className='delete' onClick={() => {
                console.log(currentUser.patientName)
                deletePatient()
            }}>
                <img src='../images/bin.png' alt='bin' className='modifyIcons'/>
            </button>
        </div>
    )
}

export default Modify