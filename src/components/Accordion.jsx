export default function Accordion({ title, description }) {
  return (
    <div className="accordion-card">
      <div className="accordion-name">
        <h3 className="title">{title}</h3>
        <button type="button">+</button>
      </div>
      <div className="accordion-info">
        <p>{description}</p>
      </div>
    </div>
  );
}
