import PuzzleStyle from "./Puzzle.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowDown } from "@fortawesome/free-solid-svg-icons"
import { faArrowUp } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

const Puzzles = ({question,answer}) => {
    const[showAnswer,setShowAnswer] = useState(false)
    const [icon,setIcon] =useState(faArrowDown)

    const handleClick = () => {
        setShowAnswer(!showAnswer)
        setIcon(showAnswer ? faArrowDown : faArrowUp)
    }
  return (
    <div className={PuzzleStyle.puzzle}>
      <p className={PuzzleStyle.question}>{question}</p>
      <div onClick={handleClick} className={PuzzleStyle.icon}>
        <FontAwesomeIcon icon={icon} />
      </div>
      <p className={showAnswer  ? `${PuzzleStyle.nohidden}` : `${PuzzleStyle.hidden}`}>{answer}</p>
    </div>
  )
}

export default Puzzles
