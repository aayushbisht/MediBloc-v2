import HomePng from '../assets/homebf.png'
import { Link, useNavigate } from 'react-router-dom';


const Home = ({ token, account, setAccount, setToken }) => {
  const navigate = useNavigate()
    
  const logout = () => {
      localStorage.removeItem('token')
      localStorage.removeItem('account')
      setToken('')
      setAccount('');
      navigate('/login');
  }
    return (
      <section class="text-gray-600 body-font">

        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center mt-[100px] rounded-full" >
        {/* <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900" >Revolutionizing Healthcare
            <br class="hidden lg:inline-block" />With Blockchain !
          </h1>
          <p class="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
          <div class="flex justify-center">
            <button class="inline-flex text-white bg-[#09335e] border-0 py-2 px-6 focus:outline-none hover:bg-[#0e2235] rounded text-lg">Button</button>
            <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
          </div>
        </div> */}
        <div class="flex flex-col items-start text-left mb-16 md:mb-0">
  <h1 class="title-font sm:text-4xl text-3xl mb-4 text-gray-900 font-bold" style={{fontSize:"40px"}}>Electronic  Health Records
    <br class="hidden lg:inline-block" />On Blockchain!
  </h1>
  <p class="mb-8 leading-relaxed" style={{maxWidth:"80%",fontSize:"19px"}}> Transforming healthcare by facilitating decentralized storage of    Electronic Health Records and Medical Insurance Data. Experience a transparent and patient-centric healthcare ecosystem like never before.</p>
  <div class="flex justify-start">
    
    <Link to="/login">
    <button class="inline-flex text-white bg-[#09335e] border-0 py-2 px-6 focus:outline-none hover:bg-[#0e2235] rounded text-lg">Login</button>
    </Link>
    <Link to="/register">
    <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Register</button>
    </Link>
  </div>
</div>

        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img class="object-cover object-center rounded" alt="hero" src={HomePng} />
        </div>
      </div>
      </section>
    
    )
}

export default Home