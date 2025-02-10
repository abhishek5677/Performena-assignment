import { useState } from 'react'
import './App.css'
import { SuccessModal } from './components/SuccessModal'
import { FiUser } from 'react-icons/fi'
import { LuPhone } from 'react-icons/lu'
import { MdOutlineMailOutline, MdSportsEsports } from 'react-icons/md'
import { PiCityThin } from 'react-icons/pi'
import { RiTeamLine } from 'react-icons/ri'
import { GiSportMedal } from 'react-icons/gi'

function App() {

  // state variables
  const [name, setName] = useState('')
  const [nameError, setNameError] = useState(false)

  const [phone, setPhone] = useState('')
  const [phoneError, setPhoneError] = useState(false)
  const [showPhone, setShowPhone] = useState(false)

  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState(false)
  const [showEmail, setShowEmail] = useState(false)

  const [city, setCity] = useState('')
  const [cityError, setCityError] = useState(false)
  const [showCity, setShowCity] = useState(false)

  const [favSport, setFavSport] = useState('')
  const [favSportError, setFavSportError] = useState(false)
  const [showFavSport, setShowFavSport] = useState(false)

  const [favTeam, setFavTeam] = useState('')
  const [favTeamError, setFavTeamError] = useState(false)
  const [showFavTeam, setShowFavTeam] = useState(false)

  const [favIcon, setFavIcon] = useState('')
  const [favIconError, setFavIconError] = useState(false)
  const [showFavIcon, setShowFavIcon] = useState(false)

  const [disabledInput, setDisabledInput] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [showEdit, setShowEdit] = useState(false)

  // email regex
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // handle form submit
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents form from reloading the page
    console.log('Form submitted', email, phone);

    if (name.length < 3) {
      setNameError(true)
      return;
    } else {
      setNameError(false)
      setShowPhone(true)
    }

    if (phone.length !== 10 && showPhone) {
      console.log('phone', phone)
      setPhoneError(true)
      return;
    } else if (phone.length > 1) {
      setPhoneError(false)
      setShowEmail(true)
    }

    if (!emailRegex.test(email) && showEmail) {
      console.log('email', email)
      setEmailError(true)
      return;
    } else if (email.length > 1) {
      setEmailError(false)
      setShowCity(true)
    }

    if (city.length < 3 && showCity) {
      setCityError(true)
      return;
    } else if (city.length > 1) {
      setCityError(false)
      setShowFavSport(true)
    }

    if (favSport.length < 1 && showFavSport) {
      setFavSportError(true)
      return;
    } else if (favSport.length >= 1) {
      setFavSportError(false)
      setShowFavTeam(true)
    }

    if (favTeam.length < 1 && showFavTeam) {
      setFavTeamError(true)
      return;
    } else if (favTeam.length >= 1) {
      setFavTeamError(false)
      setShowFavIcon(true)
    }


    if (favIcon.length < 1 && showFavIcon) {
      setFavIconError(true)
      return;
    } else if (favIcon.length >= 1) {
      setFavIconError(false)
      console.log('all data submit');
      setDisabledInput(true)
      setShowSuccessModal(true)
      setShowEdit(true)
    }

  }

  return (
    <>
      <div className="flex justify-center">
        <div className="shadow-xl m-6 lg:p-10 p-6 w-2xl border border-gray-300 rounded-lg">

          <div className='flex justify-center items-center mb-4 gap-1'>
            <img width={60} height={60} src="https://cdn-icons-png.flaticon.com/512/5968/5968528.png" alt="" srcSet="" />
            <h2 className='font-medium text-3xl'>Create Profile</h2>
          </div>
          <form onSubmit={handleSubmit} className="">

            {/* fullname block */}
            <div className="relative mb-6">
              <label className="flex  items-center mb-2 text-gray-600 text-sm font-medium">Full Name
                <span style={{ fontSize: 20, paddingLeft: 4, color: 'red' }}>*</span>
              </label>
              <div className="relative  text-gray-500 focus-within:text-gray-900">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
                  <FiUser size={22} />
                </div>
                <input
                  disabled={disabledInput}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  id="default-search"
                  className="block w-full h-11 pr-5 pl-12 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none "
                  placeholder="Enter Full Name" />
              </div>
              {nameError && <label className="flex  items-center mb-2 text-red-600 text-sm font-medium" htmlFor="">Minimum 3 characters are required for Full Name.</label>}
            </div>

            {/* phone block block */}
            {showPhone && <div className="relative mb-6">
              <label className="flex  items-center mb-2 text-gray-600 text-sm font-medium">
                Phone Number
                <span style={{ fontSize: 20, paddingLeft: 4, color: 'red' }}>*</span>
              </label>
              <div className="relative  text-gray-500 focus-within:text-gray-900">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
                  <LuPhone size={20} />
                </div>
                <input
                  disabled={disabledInput}
                  value={phone}
                  onChange={(e) => {
                    const onlyNums = e.target.value.replace(/[^0-9]/g, ''); // Remove non-numeric characters
                    if (onlyNums.length <= 10) {
                      setPhone(onlyNums); // Allow only up to 10 digits
                    }
                  }}
                  type="text"
                  id="default-search"
                  className="block w-full h-11 pr-5 pl-12 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
                  placeholder="Enter Phone No"
                />
              </div>
              {phoneError && <label className="flex items-center mb-2 text-red-600 text-sm font-medium" htmlFor="">Phone Number must be 10 digits.</label>}
            </div>}

            {/* email block */}
            {showEmail && <div className="relative mb-6">
              <label className="flex  items-center mb-2 text-gray-600 text-sm font-medium">
                Email
                <span style={{ fontSize: 20, paddingLeft: 4, color: 'red' }}>*</span>
              </label>
              <div className="relative  text-gray-500 focus-within:text-gray-900">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
                  <MdOutlineMailOutline size={22} />
                </div>
                <input
                  disabled={disabledInput}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  id="default-search"
                  className="block w-full h-11 pr-5 pl-12 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
                  placeholder="Enter Email" />
              </div>
              {emailError && <label className="flex items-center mb-2 text-red-600 text-sm font-medium" htmlFor="">Enter a valid Email.</label>}

            </div>}

            {/* city block */}
            {showCity && <div div className="relative mb-6">
              <label className="flex  items-center mb-2 text-gray-600 text-sm font-medium">
                City
                <span style={{ fontSize: 20, paddingLeft: 4, color: 'red' }}>*</span>
              </label>
              <div className="relative  text-gray-500 focus-within:text-gray-900">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
                  <PiCityThin size={20} />
                </div>
                <input
                  disabled={disabledInput}
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  type="text"
                  id="default-search"
                  className="block w-full h-11 pr-5 pl-12 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none "
                  placeholder="Enter City" />
              </div>
              {cityError && <label className="flex  items-center mb-2 text-red-600 text-sm font-medium" htmlFor="">Minimum 3 characters are required for City.</label>}
            </div>}

            {/* fav sport block */}
            {showFavSport && <div div className="relative mb-6">
              <label className="flex  items-center mb-2 text-gray-600 text-sm font-medium">
                Your Favorite Sport
                <span style={{ fontSize: 20, paddingLeft: 4, color: 'red' }}>*</span>
              </label>
              <div className="relative  text-gray-500 focus-within:text-gray-900">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
                  <MdSportsEsports size={20} />
                </div>
                <input
                  disabled={disabledInput}
                  value={favSport}
                  onChange={(e) => setFavSport(e.target.value)}
                  type="text"
                  id="default-search"
                  className="block w-full h-11 pr-5 pl-12 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none "
                  placeholder="Enter Your Favorite Sport" />
              </div>
              {favSportError && <label className="flex  items-center mb-2 text-red-600 text-sm font-medium" htmlFor="">Favorite Sport is required.</label>}
            </div>}

            {/* fav team block */}
            {showFavTeam && <div div className="relative mb-6">
              <label className="flex  items-center mb-2 text-gray-600 text-sm font-medium">
                Your Favorite Team
                <span style={{ fontSize: 20, paddingLeft: 4, color: 'red' }}>*</span>
              </label>
              <div className="relative  text-gray-500 focus-within:text-gray-900">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
                  <RiTeamLine size={20} />
                </div>
                <input
                  disabled={disabledInput}
                  value={favTeam}
                  onChange={(e) => setFavTeam(e.target.value)}
                  type="text"
                  id="default-search"
                  className="block w-full h-11 pr-5 pl-12 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none "
                  placeholder="Enter Your Favorite Team" />
              </div>
              {favTeamError && <label className="flex  items-center mb-2 text-red-600 text-sm font-medium" htmlFor="">Favorite Team is required.</label>}
            </div>}

            {/* fav icon block */}
            {showFavIcon && <div div className="relative mb-6">
              <label className="flex  items-center mb-2 text-gray-600 text-sm font-medium">
                Your Favorite Sports Icon
                <span style={{ fontSize: 20, paddingLeft: 4, color: 'red' }}>*</span>
              </label>
              <div className="relative  text-gray-500 focus-within:text-gray-900">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
                  <GiSportMedal size={20} />
                </div>
                <input
                  disabled={disabledInput}
                  value={favIcon}
                  onChange={(e) => setFavIcon(e.target.value)}
                  type="text"
                  id="default-search"
                  className="block w-full h-11 pr-5 pl-12 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none "
                  placeholder="Enter Your Favorite Sports Icon" />
              </div>
              {favIconError && <label className="flex  items-center mb-2 text-red-600 text-sm font-medium" htmlFor="">Favorite Sports Icon is required.</label>}
            </div>}

            <div className="flex items-center justify-center mb-3">
              <button className="w-52 cursor-pointer h-12 shadow-sm rounded-full bg-purple-600 hover:bg-purple-800 transition-all duration-700 text-white text-base font-semibold leading-7">{showFavIcon ? 'Submit' : 'Next'}</button>
            </div>

          </form>
          {showEdit && <div div className="flex items-center justify-center mb-3">
            <button onClick={() => setDisabledInput(false)} className="w-52 cursor-pointer h-12 shadow-sm rounded-full bg-purple-600 hover:bg-purple-800 transition-all duration-700 text-white text-base font-semibold leading-7">Edit</button>
          </div>}
        </div>

      </div >

      {/* success modal */}
      {showSuccessModal && <SuccessModal setShowSuccessModal={setShowSuccessModal} />}

    </>
  )
}

export default App;