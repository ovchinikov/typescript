import Header from "./components/header"
import Total from "./components/total"
import { CoursePart } from "./types"

const App = () => {
  const courseName = "Half Stack application development";
  const courseParts: CoursePart[] = [
    {
      name: "Fundamentals",
      exerciseCount: 10,
      description: "This is an awesome course part",
      kind: "basic"
    },
    {
      name: "Using props to pass data",
      exerciseCount: 7,
      groupProjectCount: 3,
      kind: "group"
    },
    {
      name: "Basics of type Narrowing",
      exerciseCount: 7,
      description: "How to go from unknown to string",
      kind: "basic"
    },
    {
      name: "Deeper type usage",
      exerciseCount: 14,
      description: "Confusing description",
      backgroundMaterial: "https://type-level-typescript.com/template-literal-types",
      kind: "background"
    },
    {
      name: "TypeScript in frontend",
      exerciseCount: 10,
      description: "a hard part",
      kind: "basic",
    },
    {
      name: "Backend development",
      exerciseCount: 21,
      description: "Typing the backend",
      requirements: ["nodejs", "jest"],
      kind: "special"
    }
  ];

 
   const Content = () => {
   
          const renderedParts = courseParts.map(part => {
            switch (part.kind) {
              case "basic":
                return (
                  <div key={part.name}>
                    <h3 >{part.name} {part.exerciseCount}</h3>
                    <i>{part.description}</i>
                  </div>
                );
              case "group":
                return (
                  <div key={part.name}>
                    <h3>{part.name} {part.exerciseCount}</h3>
                    <p>project exercises {part.groupProjectCount}</p>
                  </div>
                );
              case "background":
                return (
                  <div key={part.name}>
                    <h3>{part.name} {part.exerciseCount}</h3>
                    <i>{part.description}</i>
                    <p>{part.backgroundMaterial}</p>
                  </div>
                );
                case "special":
                return (
                  <div key={part.name}>
                    <h3>{part.name} {part.exerciseCount}</h3>
                    <i>{part.description}</i>
                    <p>required skills: {part.requirements.join(", ")}</p>
                  </div>
                );
              default:
                return (
                  <div>No content!</div>
                );
            }
          });

          return <div>{renderedParts}</div>;
        };
        
     




  const totalExercises = courseParts.reduce((sum, part) => sum + part.exerciseCount, 0);

  return (
    <div>
      <Header courseName={courseName} />
      <Content />
     <Total total={totalExercises} />
    </div>
  );
};

export default App;