import './NotFound.css';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="tw-notfound">
      <h1>404</h1>
      <p>Oops! The page you’re looking for doesn’t exist.</p>
      <Link to="/" className="back-home">← Back to Home</Link>
    </div>
  );
};

export default NotFound;

