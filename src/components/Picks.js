import { useContext, useEffect, useState } from 'react';
import { PicksContext } from '../context/picks-context';
import papper from '../images/icon-paper.svg'
import rock from '../images/icon-rock.svg'
import scissors from '../images/icon-scissors.svg'
import { useNavigate } from 'react-router-dom';
import '../queries.css'



function Picks() {
    const { userPick, computerPick, result, enemyImageUrl, userWin, houseWin, setComputerPick, setUserPick, setResult, setUserWin, setHouseWin } = useContext(PicksContext);
    const [url, setUrl] = useState()
    const navigate = useNavigate()
    const [showResult, setShowResult] = useState(false)

    useEffect(() => {
        const userImageUrl = () => {
            if (userPick === 'papper') {
                setUrl(papper)
            } else if (userPick === 'rock') {
                setUrl(rock)
            } else if (userPick === 'scissors') {
                setUrl(scissors)
            }
        }
        userImageUrl();
    }, [userPick])

    const handleStartGame = () => {
        setComputerPick('')
        setUserPick(null)
        setResult('')
        setUserWin(false)
        setHouseWin(false);
        navigate(-1)
    }

    useEffect(() => {
        setTimeout(() => {
            setShowResult(true)
        }, 2000);
    }, [])

    return (
        <>
            <div className='picks_wrapper'>
                <div className='user_pick'>
                    <h3>YOU PICKED </h3>
                    <div className={`picks_border_${userPick} ${userWin ? 'pulse' : ''}`}>
                        <span className={`picks_${userPick}`}>
                            <img src={url} alt={userPick} />
                        </span>
                    </div>
                </div>
                <div className='result'>
                    <h2>{result}</h2>
                    <button onClick={handleStartGame} className={`${houseWin ? 'red_text_btn' : ''}`}>PLAY AGAIN</button>
                </div>
                <div className='house_pick'>
                    <h3>THE HOUSE PICKED</h3>
                    <div className={`picks_border_${computerPick} ${houseWin ? 'pulse' : ''}`}>
                        <span className={`picks_${computerPick}`}>
                            <img src={enemyImageUrl} alt={computerPick} />
                        </span>
                    </div>
                </div>
            </div >

        </>
    );
}

export default Picks;
