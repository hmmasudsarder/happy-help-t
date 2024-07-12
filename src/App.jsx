import BasketballPlayerCard from "./BasketballPlayerCard";

const App = () => {
  const players = [
    {
      name: "LeBron James",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/LeBron_James%2C_25_November_2023_02_%28cropped%29.jpg/800px-LeBron_James%2C_25_November_2023_02_%28cropped%29.jpg",
      position: "Forward",
      stats: {
        pointsPerGame: 25.4,
        assistsPerGame: 7.1,
        reboundsPerGame: 10.5,
      },
    },
  ];

  return (
    <div>
      {players.map((player, inx) => (
        <BasketballPlayerCard key={inx} player={player} />
      ))}
      {/* {players.map((player, inx) => (
        <div key={inx} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-5">
          <div className="player-card">
            <img src={player.image} alt={player.name} className="player-image" />
            <h2 className="player-name">{player.name}</h2>
            <p className="player-position">{player.position}</p>
            <div className="player-stats">
              <p>Points per Game: {player.stats.pointsPerGame}</p>
              <p>Assists per Game: {player.stats.assistsPerGame}</p>
              <p>Rebounds per Game: {player.stats.reboundsPerGame}</p>
            </div>
          </div>
        </div>
      ))} */}
      
    </div>
  );
};

export default App;
