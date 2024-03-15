import Nav from '../components/nav'
import { useState } from 'react'

const Home = () => {
    const [showModal, setShowModal] = useState(false)

    const authToken = false

    const handleClick = () => {
        console.log('clicked')
        setShowModal(true)
    }
    return (
        // wrap in two empty divs because jsx needs to be wrapped
        <div className='overlay'> 
        <Nav minimal={false} authToken={authToken}/>
        <div  className = "home" >
            <h1> Swipe Right </h1>
            <button className="primary-button" onClick={handleClick}>
                {authToken ? 'Signout' : 'Create Account'}
            </button>


        </div>
        </div>
    )
}
export default Home