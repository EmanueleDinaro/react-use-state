import languages from "../data/languages";

export default function AccordionList() {
  return (
    <div className="container">
      {languages.map((language) => {
        return (
          <div className="accordion-card">
            <div className="accordion-name">
              <h3 className="title">{language.title}</h3>
              <button type="button">+</button>
            </div>
            <div className="accordion-info">
              <p>{language.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
