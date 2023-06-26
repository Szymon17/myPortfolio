import "./Projects.styles.css";
import { useContext } from "react";
import { AnimationsContext } from "../../context/animations.context";
import Project from "../Project/Project.component";
import quizzesImg from "../../assets/quizzes.jpg";
import secondsImg from "../../assets/5sec.jpg";
import checkersImg from "../../assets/checkers.jpg";
import snakeImg from "../../assets/snake.jpg";

const Projects = () => {
  const { setProjectsAreRendered } = useContext(AnimationsContext);

  const changeProjectsRenderState = () => {
    setTimeout(() => setProjectsAreRendered(true), 500);
  };

  return (
    <section className="section-left projects">
      <p className="section-title">Projekty</p>
      <div className="section-body">
        <Project
          title="Quizy"
          imgUrl={quizzesImg}
          githubLink="https://github.com/Szymon17/QuizzesLand"
          hostLink="https://quizzes-95ef3.web.app/"
          technologies={["React", "Redux", "Typescript", "Firebase"]}
        >
          Umożliwia rozwiązywanie quizów osadzonych w bazie danych. Pozwala użytkownikowi stworzyć swoje własne konto oraz swój własny quiz. Stworzone
          quizy można edytować oraz usuwać. Konto testowe:
          <span className="text-bold">Email: test@gmail.com</span> <span className="text-bold">Hasło: haslo1234</span>
        </Project>
        <Project
          title="5seconds"
          imgUrl={secondsImg}
          githubLink="https://github.com/Szymon17/5seconds"
          technologies={["React", "Typescript"]}
          right={true}
        >
          Projekt mający na celu stworzenie prostej gry, w której można spędzać miło czas ze znajomymi. Zasady są proste. Osoba prowadząca transmituje
          na żywo obraz z gry, gracze po kolei losują pytania a następnie mają równo 5 sekund na odpowiedź.
        </Project>
        <Project title="Warcaby" imgUrl={checkersImg} githubLink="https://github.com/Szymon17/Checkers" technologies={["HTML", "CSS", "JavaScript"]}>
          Gra w warcaby na zasadach tajskich. Zasady w tego typu warcabach różnią się nieco od najpopularniejszej wersji tej gry. Dokładny opis zasad
          umieszczony jest w dokumentacji projektu
        </Project>
        <Project
          title="Snake"
          imgUrl={snakeImg}
          githubLink="https://github.com/Szymon17/snake"
          technologies={["HTML", "CSS", "JavaScript"]}
          right={true}
          handler={changeProjectsRenderState}
        >
          Projekt o tematyce popularnej gry snake. Steruj wirtualnym wężem w celu zjedzenia jak największej ilości jedzenia pojawiającego się na
          planszy. Unikaj krawędzi planszy oraz własnego ogona.
        </Project>
      </div>
    </section>
  );
};

export default Projects;
