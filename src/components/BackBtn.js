import {useNavigate} from 'react-router-dom';

function BackButton() {

    const navigate = useNavigate()

    return (
        <div className='returnBox'>
            <button className='backButton' onClick={() => {navigate('/patients')}}>
                Back
            </button>
        </div>
    )
}

export default BackButton