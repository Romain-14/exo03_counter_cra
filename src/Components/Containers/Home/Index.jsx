import Button from "../../UI/Button/Index";
import Counter from "../Counter/Index";

function Home() {
    // créer la 1ere liste d'affichage des noms avec les index
    // réflexion sur créer variable "classique" ou via une "state" ??
    const citizens = ["Jaky", "Lolo", "Steph"];
    // fonction qui va créer et retourner l'affichage d'une nouvelle liste (animaux)

    const displayAnimals = () => {
        const animals = ["dog", "bird", "cat"];

        // return animals.map((animal, index) => <li key={index}>{animal}</li>);
        return animals.map((animal, index) => {
            return <li key={index}>{animal}</li>;
        });
    };

    // retourner l'affichage du composant Button autant de fois que nécessaire en transmettant une donnée pertinente ainsi que les listes
    return (
        <main>
            <h1>EXO COUNTER / DISPLAY ARRAY</h1>
            <hr />
            {/* <Button incrementBy={1} info={"ce compteur est le numero 1"}/>
            <hr />
            <Button incrementBy={2} info={"ce compteur est le numero 2"}/> */}
            {/*  */}
            <Counter incrementBy={1} />
            <Counter incrementBy={2} />

            <hr />

            <Button>envoyer message</Button>

            <ul>
                {/* { citizens.map((citizen, index) => (<li key={index}>My name is {citizen} with index n°{index}</li>))  } */}
                {citizens.map((citizen, index) => {
                    return (
                        <li key={index}>
                            My name is {citizen} with index n°{index}
                        </li>
                    );
                })}
            </ul>

            <ul>{displayAnimals()}</ul>
        </main>
    );
}

export default Home;
