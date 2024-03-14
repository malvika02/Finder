import Nav from '../components/nav'

const Home = () => {
    const authToken = true

    const handleClick = () => {
        console.log('clicked')
    }
    return (
        // wrap in two empty divs because jsx needs to be wrapped
        <> 
        <Nav/>
        <div  className = "home" >
            <h1> Swipe Right </h1>
            <button className="primary-button" onClick={handleClick}>
                {authToken ? 'Signout' : 'Create Account'}
            </button>


        </div>
        </>
    )
}
export default Home