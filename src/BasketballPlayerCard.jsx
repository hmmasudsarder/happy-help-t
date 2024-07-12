import './BacketballPlayerCard.css';

const BasketballPlayerCard = ({player}) => {
   const {name, image, position, stats } = player
  return (
    <div className='mt-7'>
      <div className="player-card mx-auto md:mx-auto">
        <img src={image} alt={name} className="player-image" />
        <h2 className="player-name">{name}</h2>
        <p className="player-position">{position}</p>
        <div className="player-stats">
          <p>Points per Game: {stats?.pointsPerGame}</p>
          <p>Assists per Game: {stats?.assistsPerGame}</p>
          <p>Rebounds per Game: {stats?.reboundsPerGame}</p>
        </div>
      </div>
    </div>
  );
};

export default BasketballPlayerCard;
