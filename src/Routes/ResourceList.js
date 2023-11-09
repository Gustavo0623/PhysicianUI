import React, { useState, useEffect } from "react";

// Resource List

export const ResourceList = () => {
    const [resources, setResources] = useState([])
    const [filter, setFilter] = useState("")

    useEffect(() => {
        fetch('/resources.json')
          .then((response) => response.json())
          .then((jsonData) => {
            const allResources = []
            Object.keys(jsonData).forEach((category) => {
                const resources = jsonData[category].map((resource) => {
                    return {...resource, category}
                })
            allResources.push(...resources)
            })
            setResources(allResources)
          })
          .catch((error) => {
            console.error('Error fetching resource list:', error);
          })
      }, [])

      function newFilterSelected(event) {
        setFilter(event.target.value);
    }

    function renameCategory(category) {
        return category === "hungerresources" ? "Hunger Resource" :
               category === "housingresources" ? "Housing Resource" :
               category === "transporation" ? "Transportation" :
               category === "intrapersonalhelp" ? "Intrapersonal Help" :
               category === "suicidehelp" ? "Suicide Help" :
               category === "depressionhelp" ? "Depression Help" :
               category === "emotionalheath" ? "Emotional Health" : // Have to change emotionalheath -> to emotionalhealth
               category === "substanceAbuse" ? "Substance Abuse" :
               category;
      }

    let filteredResources = resources.filter(resource => filter === "" || resource.name === filter)

    return(
        <div className="newResource">
            <h1 className="resourceHeader">Resource List</h1>
            <div className="resourceListHeader">
                <p className="resourceListCount">{filteredResources.length} results</p>
                <select onChange={newFilterSelected} >
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
                    <p className="resourceListModifyHeader"></p>
                </div>
                    {filteredResources.map((filteredResource, index) => (
                        <div className="resourceListRow">
                            <div className="resourceListContent" key={index}>
                                <p className="resourceListNameItem">{filteredResource.name}</p>
                                <p className="resourceListCategoryItem">{renameCategory(filteredResource.category)}</p>
                                <p className="resourceListAddressItem">{filteredResource.address}</p>
                                <div className="modifyButtonsContainer">
                                    <a className="edit" href="/NewResource">
                                        <img src="../images/pencil.png" alt="pencil" class="modifyIcons" />
                                    </a>
                                    <button class="delete">
                                        <img src="../images/bin.png" alt="bin" class="modifyIcons" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default ResourceList