import { useEffect, useState } from "react";

const blocks = [
  {
    number: "01",
    label: "Исследование",
    title: "Анализ пространства",
    description:
      "Глубокое понимание контекста и пользовательского опыта как основа для точного проектирования.",
  },
  {
    number: "02",
    label: "Концепция",
    title: "Архитектура формы",
    description:
      "Каждый элемент существует по причине. Ничего лишнего — только то, что работает.",
  },
  {
    number: "03",
    label: "Воплощение",
    title: "Точность деталей",
    description:
      "Финальная полировка превращает хорошее в безупречное. Детали — это и есть дизайн.",
  },
];

export default function Slide() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className="slide-root"
      style={{ opacity: visible ? 1 : 0, transition: "opacity 0.8s ease" }}
    >
      <div className="slide-header">
        <div className="slide-eyebrow">
          <span className="slide-dot" />
          <span>Дизайн-методология</span>
        </div>
        <h1 className="slide-title">
          Форма следует
          <br />
          <em>функции</em>
        </h1>
        <div className="slide-rule" />
      </div>

      <div className="slide-grid">
        {blocks.map((b, i) => (
          <div
            key={b.number}
            className="slide-block"
            style={{
              animationDelay: `${0.2 + i * 0.15}s`,
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(16px)",
              transition: `opacity 0.7s ease ${0.2 + i * 0.15}s, transform 0.7s ease ${0.2 + i * 0.15}s`,
            }}
          >
            <div className="block-number">{b.number}</div>
            <div className="block-label">{b.label}</div>
            <h2 className="block-title">{b.title}</h2>
            <div className="block-divider" />
            <p className="block-desc">{b.description}</p>
          </div>
        ))}
      </div>

      <footer className="slide-footer">
        <span className="footer-tag">© 2026</span>
        <div className="footer-line" />
        <span className="footer-tag">Методология</span>
      </footer>
    </div>
  );
}
