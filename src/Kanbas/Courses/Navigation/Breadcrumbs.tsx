import { FaBars } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

function Breadcrumbs() {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((pathname) => pathname);

    return (
        <div className='wd-breadcrumbs'>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    {pathnames.slice(2).map((pathname, index) => (
                        <li className="breadcrumb-item" key={index}>
                            {index === pathnames.length - 3 ? (
                                <span style={{ color: 'gray' }}>{pathname}</span>
                            ) : (
                                <Link to={`/${pathnames.slice(0, index + 4).join('/')}`}>
                                     <FaBars/>{pathname}
                                </Link>
                            )}
                        </li>
                    ))}
                </ol>
            </nav>
        </div>
    );
}

export default Breadcrumbs;
