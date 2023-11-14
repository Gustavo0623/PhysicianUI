import React, { useState, useEffect } from "react";
import Nav from "../components/PhysNav";

// Resource List

export const ResourceList = () => {
    const [resources, setResources] = useState([])
    const [filter, setFilter] = useState("")

    
    useEffect(() => {
        async function fetchData() {
            try {
                const url = 'http://128.101.131.217:2260/allResources';
                const headers = new Headers();
                headers.append('Content-Type', 'application/json'); // You can add other headers if needed
            
                const requestOptions = {
                    method: 'GET',
                    headers: headers,
                };
            
                const response = await fetch(url, requestOptions);
            
                if (response.ok) {
                    const data = await response.json();
                    const dataArray = []
                    for (const category in data.return) {
                        if (data.return.hasOwnProperty(category)) {
                            dataArray.push(...data.return[category].map(resource => ({ category, ...resource })));
                        }
                    }
                    setResources(dataArray);
                } else {
                    console.error('Failed to fetch data');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData()
        
    }, [])

    function newFilterSelected(event) {
        setFilter(event.target.value);
    }

    let filteredResources = resources.filter(resource => filter === "" || resource.name === filter)

    return(
        <div className="newResource page">
            <Nav/>
            <div className="mainView">
                <h1 className="resourceHeader">Resource List</h1>
                <div className="resourceListHeader">
                    <p className="resourceListCount">{filteredResources.length} results</p>
                    <select className='filterSelect' name='filter' onChange={newFilterSelected} >
                        <option value="">No Filter</option>
                        <option value="M Health Fairview University of Minnesota Medical Center - West Bank">UM Medical Center West Bank</option>
                        <option value="Metro Transit Office">Metro Transit Office</option>
                        <option value="People Serving People">People Serving People</option>
                        <option value="Cynthia Van Hoof">Cynthia Van Hoof</option>
                        <option value="Bosch Rehabilitation">Bosch Rehabilitation</option>
                        <option value="House of Charity - Food Distribution Center">House of Charity - Food Distribution Center</option>
                    </select>
                    <a href="/newResource" className="formSubmitButton newResourceButton">New</a>
                </div>
                <div className="resourceListContainer">
                    <div className="resourceListHeaderRow">
                        <p className="resourceListNameHeader">Name</p>
                        <p className="resourceListCategoryHeader">Category</p>
                        <p className="resourceListAddressHeader">Address</p>
                    </div>
                        {filteredResources.map((filteredResource, index) => (
                            <div className="resourceListRow" key={index}>
                                <div className="resourceListContent" key={index}>
                                    <p className="resourceListNameItem">{filteredResource.name}</p>
                                    <p className="resourceListCategoryItem">{filteredResource.category}</p>
                                    <p className="resourceListAddressItem">{filteredResource.address}</p>
                                    <div className="modifyButtonsContainer">
                                        <a className="edit" href="/NewResource">
                                            <img src="../images/pencil.png" alt="pencil" className="modifyIcons" />
                                        </a>
                                        <button className="delete">
                                            <img src="../images/bin.png" alt="bin" className="modifyIcons" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}

export default ResourceList