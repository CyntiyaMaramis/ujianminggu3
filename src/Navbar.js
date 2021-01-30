import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
        <h1>Ujian Minggu 3</h1>
        <div className="links">
            <Link to="/">Home</Link>
            <Link to="/create">Create Quiz</Link>
        </div>
        </nav>
    );
}
 
export default Navbar;