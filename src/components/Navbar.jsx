import { Link, useMatch, useResolvedPath } from "react-router-dom";
import logoImage from '../assets/RichardR.png';

export default function Navbar() {
    return <nav className="nav">
        <Link to="/home" className="site-logo">
            <img src={logoImage} alt="Richard Rosenberg Full Stack Developer" />
        </Link>
        <ul>
            <CustomLink to="/home">Home</CustomLink>
            <CustomLink to="/resume">Resume</CustomLink>
            <CustomLink to="/projects">Projects</CustomLink>
            <CustomLink to="https://github.com/RichardRosenberg?tab=repositories">Github</CustomLink>
            <CustomLink to="https://www.linkedin.com/in/richard-rosenberg-5391442b8/">Linked In</CustomLink>
        </ul>
    </nav>
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });
    //make external links open in another tab
    const isExternalLink = /^https?:\/\//.test(to);
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...(isExternalLink && { target: "_blank", rel: "noopener noreferrer" })} {...props}>
                {children}
            </Link>
        </li>
    );
}
