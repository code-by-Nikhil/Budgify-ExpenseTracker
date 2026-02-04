import { useNavigate } from "react-router-dom"

export default function Home() {  

    const navigate = useNavigate();
    

  return (
    <div className='bg-gray-200 text-center font-bold p-20 min-h-screen flex flex-col justify-center gap-5'>
      <h1 className='text-blue-600 font-bold text-6xl'>💸Budgify - Expense Tracker</h1>
      <h1 className='text-gray-500 font-semibold text-2xl'>Welcome to the next level expense tracker you will ever met</h1>
      <div className="flex justify-center gap-5">
        <button className='bg-blue-600 text-white p-2 border rounded-md font-bold text-xl cursor-pointer hover:bg-blue-500' onClick={()=>navigate('/register')}>Sign Up</button>
        <button className='bg-blue-600 text-white p-2 border rounded-md font-bold text-xl cursor-pointer hover:bg-blue-500' onClick={()=>navigate('/login')}>Log In</button>
      </div>
    </div>
  )
}
