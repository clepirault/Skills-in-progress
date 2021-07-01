import './Home.css';

function HomeDetail({ children }) {
  return (
    <div className="hero">
        {children.map((link) => (
          <div className="homeDetail">{link}</div>
        ))}
    </div>
  );
}

export default HomeDetail;
