import { createContext, useState, useEffect } from "react";
import rock from '../images/icon-rock.svg';
import papper from '../images/icon-paper.svg';
import scissors from '../images/icon-scissors.svg'
import { useHistory } from "react-router-dom";



export const PicksContext = createContext();

const PicksProvider = ({ children }) => {
    const [score, setScore] = useState(12);
    const [computerPick, setComputerPick] = useState(0)
    const [userPick, setUserPick] = useState(null);
    const [enemyImageUrl, setEnemyImageUrl] = useState('')
    const [result, setResult] = useState('')
    const [userWin, setUserWin] = useState(false)
    const [houseWin, setHouseWin] = useState(false)


    const generateRandomNumber = () => {
        const number = Math.ceil(Math.random() * 3)
        if (number === 1) {
            setComputerPick('rock')
            setEnemyImageUrl(rock)
        } else if (number === 2) {
            setComputerPick('papper')
            setEnemyImageUrl(papper)
        } else if (number === 3) {
            setComputerPick('scissors')
            setEnemyImageUrl(scissors)
        }
    }

    const handleAction = (action) => {
        setUserPick(action)
        generateRandomNumber();
    };

    useEffect(() => {
        if (userPick !== null) {
            if ((userPick === 'rock' && computerPick === 'scissors') ||
                (userPick === 'papper' && computerPick === 'rock') ||
                (userPick === 'scissors' && computerPick === 'papper')) {
                setResult("YOU WIN");
                setUserWin(true);
                setHouseWin(false)
                setScore(prevScore => prevScore + 1);
            } else if (userPick === computerPick) {
                setResult("DEUCE");
                setUserWin(false);
                setHouseWin(false)
            } else {
                setResult("YOU LOSE");
                setUserWin(false);
                setHouseWin(true)
                if (score > 0) {
                    setScore(prevScore => prevScore - 1);
                }
            }
        }
    }, [computerPick, userPick]);


    const picks = {
        handleAction, result, userPick, computerPick, enemyImageUrl, userWin, houseWin, score, setComputerPick, setUserPick,
        setResult,
        setUserWin,
        setHouseWin,
    }

    return (
        <PicksContext.Provider value={picks}>
            {children}
        </PicksContext.Provider>)
};

export default PicksProvider;