import { GameType } from '../../types/gameType';
import './gamesList.scss';

interface GamesListProps {
    games: GameType[]
}

export const GamesList = (props: GamesListProps) => {
    const { games } = props;

    return <div
        className={'games-list'}
    >
        {
            games.map(game =>
                <div
                    className={'game-block'}
                >
                    <div
                        className={'game-picture'}
                        style={{ backgroundColor: game.bgColor }}
                    >
                        <img
                            src={game.image}
                            className={'game-picture__img'}
                            alt={'icon'}
                        />
                    </div>
                    <div
                        className={'game-name'}
                    >
                        <p>
                            {game.name}
                        </p>
                    </div>
                </div>
            )
        }
    </div>
}
