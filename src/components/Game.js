import rock from '../images/icon-rock.svg';
import papper from '../images/icon-paper.svg';
import scissors from '../images/icon-scissors.svg'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PicksContext } from '../context/picks-context';


function Game() {
    const { handleAction } = useContext(PicksContext);

    return (
        <div className="wrapper">
            <div className="actions">
                <Link to='/picks'>
                    <div className="border_papper" onClick={() => handleAction('papper')}>
                        <span className="papper">
                            <img src={papper} alt="papper" />
                        </span>
                    </div>
                </Link>
                <Link to='/picks'>
                    <div className="border_scissors" onClick={() => handleAction('scissors')}>
                        <span className="scissors">
                            <img src={scissors} alt="scissors" />
                        </span>
                    </div>
                </Link>
                <Link to='/picks'>
                    <div className="border_rock" onClick={() => handleAction('rock')}>
                        <span className="rock">
                            <img src={rock} alt="rock" />
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Game;


