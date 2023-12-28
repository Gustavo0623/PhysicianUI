import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import resourceIcons from '../components/resourceIcons'

export default function TraumaInformedTools() {
    const [isFilling, setIsFilling] = useState(false)
    const [buttonClicked, setButtonClicked] = useState({ tools: false, plan: false, platform: false })
    const navigate = useNavigate()

    function handleClick() {
        setIsFilling(true)
        setTimeout(() => {
            navigate('/resourcelist')
            setIsFilling(false);
          }, 500);
    }   

    function handleBtnClick(btnKey) {
        setButtonClicked(prevState => ({ 
            ...prevState, 
            [btnKey]: !prevState[btnKey] 
        }))
    }
    return (
        <div className="customization-page">
            <div className="trauma-resource-container">
                <div className="trauma-content-container">
                    <h1>Trauma-Informed Care Toolbox</h1>
                    <p className="trauma-subheading">Trauma-Informed care involves recognizing and addressing the impacts of trauma on individuals and responding in a way that promotes healing and recovery.</p>
                    <div className="trauma-divider"></div>
                    <h2 className="trauma-h2">Trauma-Informed Screening Tools</h2>
                    <p className="trauma-h2-subheading">
                        Validated questionnaires to assess for common impacts of trauma and provide targeted interventions without the re-traumatization of directly screening for trauma.
                    </p>
                    <button 
                        onClick={() => handleBtnClick('tools')} 
                        className="trauma-add-button"
                        style={{ backgroundColor: buttonClicked.tools ? '#2FC217' : '#212254' }}>Add</button>
                    <div className="trauma-divider"></div>
                    <h2 className="trauma-h2">Trauma-Informed Care Plan</h2>
                    <p className="trauma-h2-subheading">
                        A collaborative care plan that informs care providers of relevant trauma history and helps guide interactions with clients in a trauma-informed, client-centered way.
                    </p>
                    <button 
                        onClick={() => handleBtnClick('plan')} 
                        className="trauma-add-button"
                        style={{ backgroundColor: buttonClicked.plan ? '#2FC217' : '#212254' }}>Add</button>
                    <div className="trauma-divider"></div>
                    <h2 className="trauma-h2">Trauma-Informed Care Training Platform</h2>
                    <p className="trauma-h2-subheading">
                        A trauma-informed training series of educational sessions and workshops designed to provide organizations and individuals with the knowledge and skills needed to realize 
                        the impact of trauma, recognize signs of trauma, respond in a trauma-informed manner, and resist re-traumatization of vulnerable clients.
                    </p>
                    <button 
                        onClick={() => handleBtnClick('platform')} 
                        className="trauma-add-button"
                        style={{ backgroundColor: buttonClicked.platform ? '#2FC217' : '#212254' }}>Add</button>
                    <div className="trauma-divider"></div>
                    <button className="progress-bar" onClick={handleClick}>
                        <div className="fill-effect" style={{ width: isFilling ? '100%' : '66%' }}></div>
                        <p className="progress-bar-label">Submit</p>
                        <img className="progress-bar-arrow" src={resourceIcons.arrow} alt="" />
                    </button>
                </div>
            </div>
        </div>
    )
}
