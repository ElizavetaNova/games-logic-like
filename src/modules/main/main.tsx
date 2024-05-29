import { useEffect, useState } from 'react';
import { getData } from './getData';
import { GameType } from '../../types/gameType';
import { GamesList } from '../gamesList/gamesList';
import { MenuTags } from '../menuTags/menuTags';
import { allTags } from '../../consts/allTags';
import './main.scss';

export const Main = () => {
  const [games, setGames] = useState<GameType[]>([]);
  const [gamesFiltered, setGamesFiltered] = useState<GameType[]>([]);
  const [tagFilter, setTagFilter] = useState<string>(allTags);

  useEffect(
    () => {
      getData()
        .then((games: GameType[]) => setGames(games));
    }, [],
  )

  useEffect(
    () => {
      if (tagFilter !== allTags) {
        const filterGames = games.filter(game => game.tags.includes(tagFilter));
        setGamesFiltered(filterGames);
      }
    }, [tagFilter]
  )

  return <div
    className={'container'}
  >
    <MenuTags tagFilter={tagFilter} setTagFilter={setTagFilter} />
    <GamesList games={tagFilter === allTags ? games : gamesFiltered} />
  </div>
}
