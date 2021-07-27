import './Home.css';
import PropTypes from 'prop-types';

function HomeDetail({ children }) {
  return (
    <div className="hero">
        {children.map((link) => (
          <div className="homeDetail" key={link.id}>{link}</div>
        ))}
    </div>
  );
}

HomeDetail.propTypes = {
  children: PropTypes.node.isRequired,
}

export default HomeDetail;
