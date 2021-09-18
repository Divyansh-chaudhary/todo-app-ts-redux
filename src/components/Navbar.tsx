import styled from 'styled-components'
import { Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <Nav>
            <NavItem to="/" >Home</NavItem>
            <NavItem to="/profile" >Profile</NavItem>
        </Nav>
    )
}

export default Navbar
const Nav = styled.nav`
    display:flex;
    align-items:center;
    background: #664E88;
`;
const NavItem = styled(Link)`
    padding: 1rem 0.5rem;
    background: #4B3869;
    color:white;
    margin: 3px;
    border-radius: 5px;
    text-decoration: none;
`;