export default function Card(props) {
  const { title, sub, img } = props;
  return (
    <div className="card">
      <img
        src={
          img ||
          "https://cdn.britannica.com/50/11350-004-678A25EF/species-guenon.jpg"
        }
        alt="idk"
      />
      <div className="card-info">
        <div className="card-person-info">
          <h3>{title}</h3>
          <p>{sub}</p>
        </div>
        <p>Description</p>
      </div>
    </div>
  );
}
