import { useEffect, useState } from "react";
import Icon from "@/components/ui/icon";

const blocks = [
  {
    id: 1,
    icon: "Filter",
    title: "Минимизация\nтестового набора",
    subtitle: "Удаление дублирующих и устаревших тестов",
    accent: false,
  },
  {
    id: 2,
    icon: "Target",
    title: "Выбор\nтестового набора",
    subtitle: "Отбор тестов, релевантных изменениям в коде",
    accent: true,
  },
  {
    id: 3,
    icon: "ListOrdered",
    title: "Приоритизация\nтестов",
    subtitle: "Упорядочивание тестов для раннего обнаружения дефектов",
    accent: false,
  },
];

export default function Slide() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="slide-root" style={{ opacity: visible ? 1 : 0, transition: "opacity 0.6s ease" }}>

      {/* Header */}
      <header className="slide-header">
        <div className="slide-badge">Выпускная квалификационная работа</div>
        <h1 className="slide-title">Классификация задач тестирования программного обеспечения</h1>
        <div className="slide-subtitle">Методы оптимизации регрессионного тестирования</div>
      </header>

      {/* Cards row */}
      <div className="cards-row">
        {blocks.map((b, i) => (
          <>
            <div
              key={b.id}
              className={`card ${b.accent ? "card--accent" : "card--default"}`}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.6s ease ${0.15 + i * 0.12}s, transform 0.6s ease ${0.15 + i * 0.12}s`,
              }}
            >
              <div className={`card-icon-wrap ${b.accent ? "card-icon-wrap--accent" : ""}`}>
                <Icon name={b.icon} size={28} fallback="Circle" />
              </div>
              <h2 className="card-title">
                {b.title.split("\n").map((line, idx) => (
                  <span key={idx}>{line}<br /></span>
                ))}
              </h2>
              <p className="card-sub">{b.subtitle}</p>
              {b.accent && <div className="card-badge">Тема ВКР</div>}
            </div>
            {i < blocks.length - 1 && (
              <div className="arrow-sep" key={`sep-${i}`}>
                <Icon name="ChevronRight" size={20} fallback="ArrowRight" />
              </div>
            )}
          </>
        ))}
      </div>

      {/* Footer */}
      <footer className="slide-footer">
        <span>2026</span>
        <span className="footer-dot" />
        <span>Автоматизация тестирования ПО</span>
      </footer>
    </div>
  );
}
