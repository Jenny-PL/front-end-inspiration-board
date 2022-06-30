import BoardList from "./BoardList";
import PropTypes from "prop-types";
import "./BoardList.css";
import NewBoardButton from "./NewBoardButton";

const BoardsView = (props) => {
  return (
    <div>
      <h1>Inspiration Board!</h1>
      <BoardList
        boardData={props.boardData}
        selectoBoardCallback={props.selectoBoardCallback}
        deleteBoardCallback={props.deleteBoardCallback}
      />
      <NewBoardButton makeBoardCallback={props.makeBoardCallback} />
    </div>
  );
};

BoardsView.propTypes = {
  boardData: propTypes.list.isRequired,
  selectoBoardCallback: PropTypes.func.isRequired,
  deleteBoardCallback: PropTypes.func.isRequired,
  makeBoardCallback: PropTypes.func.isRequired,
};

export default BoardsView;