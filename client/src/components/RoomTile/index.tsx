import "./style.css";

interface Props {
  title: string;
  isActive?: boolean;
  onClick: () => void;
}

const RoomTile = ({ title, isActive, onClick }: Props) => {
  const backgroundClass = isActive
    ? "roomTile__container--isActive"
    : "roomTile__container--isInactive";

  return (
    <div className={`roomTile__container ${backgroundClass}`} onClick={onClick}>
      <div>{title}</div>
    </div>
  );
};

export default RoomTile;
