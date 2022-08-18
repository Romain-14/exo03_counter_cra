import { useState } from "react";
import Button from "../../UI/Button/Index";

function Counter(props){

    const [counter, setCounter] = useState(0);
    const [timerID, setTimerID] = useState(null);
    // BONUS : gérer l'aspect et l'action des boutons s'ils sont désactivés ou pas
    // const [startIsDisabled, setStartIsDisabled] = useState(false);
    // const [stopIsDisabled, setStopIsDisabled] = useState(true);
    // const [resetIsDisabled, setResetIsDisabled] = useState(true);
    // 
    // stockage de tous les states disabled dans un seul hook
    const [isDisabled, setIsDisabled] = useState({
        startIsDisabled: false,
        stopIsDisabled: true,
        resetIsDisabled: true,
    });

    // on destructure pour éviter d'ecrire la chaine en entier qui sera transmise dans la props pour button
    const {startIsDisabled, stopIsDisabled, resetIsDisabled} = isDisabled;

    const start = () => {
        setTimerID(setInterval(() => setCounter(previous => previous + props.incrementBy), 1000));
        // setStartIsDisabled(true);
        // setStopIsDisabled(false);
        // setResetIsDisabled(false);
        setIsDisabled(({startIsDisabled: true, stopIsDisabled: false, resetIsDisabled: false}));
    }

    const stop = () => {
        nullifiedInterval();
        // setStartIsDisabled(false);
        // setStopIsDisabled(true);
        // setResetIsDisabled(false);
        setIsDisabled(({startIsDisabled: false, stopIsDisabled: true, resetIsDisabled: false}));
    }

    const reset = () => {
        nullifiedInterval();
        setCounter(0);
        // setStartIsDisabled(false);
        // setStopIsDisabled(true);
        // setResetIsDisabled(true);
        setIsDisabled(prev => ( prev, { stopIsDisabled: true, resetIsDisabled: false}));
    }

    const nullifiedInterval = () => {
        clearInterval(timerID);
        setTimerID(null);
    }

    return (
        <section>
            <Button isDisabled={startIsDisabled} onClickHandler={() => start()}>Start + {props.incrementBy}</Button>
            <Button isDisabled={stopIsDisabled} onClickHandler={() => stop()}>Stop</Button>
            <Button isDisabled={resetIsDisabled} onClickHandler={() => reset()}>reset</Button>
            <p>{counter}</p>
        </section>
    )
}

export default Counter;