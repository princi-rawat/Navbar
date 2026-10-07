import { Link } from 'react-router-dom'
import book from './book.jpg'
const Nav = () => {
    return (
        <div className=" bg-blue-200 flex w-full h-15">
            <div className="">
            <ul className="flex h-15 w-full gap-5 items-center text-xl">
                <li><Link to='/'><img src={book} className="h-10 w-15"/></Link></li>
                <li><Link to='/' className ="hover:text-blue-700">ReactProject2</Link></li>
            </ul>
            </div>
            <div className="">
            <ul className="flex h-15 w-full gap-5 items-center">
                <li><Link to='/' className="hover:text-amber-800">Home</Link></li>
                <li><Link to='/about' className="hover:text-amber-800">About</Link></li>
                <li><Link to='/createUser' className="hover:text-amber-800">CreateUser</Link></li>
                <li><Link to='/allUser' className="hover:text-amber-800">AllUser</Link></li>
            </ul>
            </div>
            <div>
            <ul className="flex h-15 w-full gap-5 items-center">
                <li><Link to='/login'className="hover:text-amber-700">Login</Link></li>
                <li><Link to='/signUp'className="hover:text-amber-700">SignUp</Link></li>
            </ul>
            </div>
        </div >
    )
}

export default Nav