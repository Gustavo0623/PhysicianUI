import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import resourceIcons from '../components/resourceIcons'

export default function UploadResources() {
    const [isFilling, setIsFilling] = useState(false)
    const navigate = useNavigate()

    function handleClick() {
        setIsFilling(true)
        setTimeout(() => {
            navigate('/standarizedassessments')
            setIsFilling(false); 
          }, 500);
    }
    
    return (
        <div className="customization-page">
            <div className="resource-container">
                <h1>Let's Upload Your Resources.</h1>
                <div className="rows-container">
                    <div className="circle-row top">
                        <div className="circle-container">
                            <button className="circle-button">
                                <img className="circle-icon" src={resourceIcons.housing} alt="Housing Icon" />
                            </button>
                            <span className="circle-icon-label">Housing</span>
                        </div>
                        <div className="circle-container">
                            <button className="circle-button">
                                <img className="circle-icon" src={resourceIcons.food} alt="Food Icon" />
                            </button>
                            <span className="circle-icon-label">Food</span>
                        </div>
                        <div className="circle-container">
                            <button className="circle-button">
                                <img className="circle-icon" src={resourceIcons.transportation} alt="Transportation Icon" />
                            </button>
                            <span className="circle-icon-label">Transportation</span>
                        </div>
                        <div className="circle-container">
                            <button className="circle-button">
                                <img className="circle-icon" src={resourceIcons.safety} alt="Safety Icon" />
                            </button>
                            <span className="circle-icon-label">Safety</span>
                        </div>
                    </div>
                    <div className="circle-row">
                        <div className="circle-container">
                            <button className="circle-button">
                                <img className="circle-icon" src={resourceIcons.suicide} alt="Suicide Icon" />
                            </button>
                            <span className="circle-icon-label">Suicide</span>   
                        </div>
                        <div className="circle-container">
                            <button className="circle-button">
                                <img className="circle-icon" src={resourceIcons.depression} alt="Depression Icon" />
                            </button>
                            <span className="circle-icon-label">Depression</span>
                        </div>
                        <div className="circle-container">
                            <button className="circle-button">
                                <img className="circle-icon" src={resourceIcons.stress} alt="Stress Icon" />
                            </button>
                            <span className="circle-icon-label">Stress</span>    
                        </div>
                        <div className="circle-container">
                            <button className="circle-button">
                                <img className="circle-icon-substance" src={resourceIcons.substanceAbuse} alt="Substance Abuse Icon" />
                            </button>
                            <span className="circle-icon-label">Substance Abuse</span>
                        </div>
                    </div>
                </div>
                <button className="progress-bar" onClick={handleClick}>
                    <div className="fill-effect" style={{ width: isFilling ? '33%' : '0' }}></div>
                    <p className="progress-bar-label">Assessments</p>
                    <img className="progress-bar-arrow" src={resourceIcons.arrow} alt="" />
                </button>
            </div>
        </div>
    )
}
