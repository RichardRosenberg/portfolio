import { Link, useMatch, useResolvedPath } from "react-router-dom";
import jac from '../assets/JAC.png';

export default function Footer() {
    return <footer className="footer">
        <div className="left-footer">
            <p>All rights reserved</p>
            <p>Created with React and JSX</p>
        </div>
        <div className="mid-footer">
            <br />
            <p>
                <CustomLink to="https://continuingeducation.johnabbott.qc.ca/programs/full-stack-developer/"><img src={jac} alt="John Abbott College" className="jac" /></CustomLink></p>
        </div>
        <div className="right-footer">
            <p>Email: <a href="mailto:richard.rosenberg.1987@gmail.com">richard.rosenberg.1987@gmail.com</a></p>
            <p>Phone: <a href="tel:514-714-7331">514-714-7331</a></p>
        </div>
    </footer>

    function CustomLink({ to, children, ...props }) {
        const resolvedPath = useResolvedPath(to);
        const isActive = useMatch({ path: resolvedPath.pathname, end: true });
        //make external links open in another tab
        const isExternalLink = /^https?:\/\//.test(to);
        return (
            <span>
                <Link to={to} {...(isExternalLink && { target: "_blank", rel: "noopener noreferrer" })} {...props}>
                    {children}
                </Link>
            </span>
        );
    }
}