import React from 'react'
import "./reusables.scss";
const ActivitesBlock = ({firstBlockLetters,firstBlockNumber,secondBlockLetters,secondBlockNumber,thirdBlockLetters,thirdBlockNumber}) => {
  return (
    <div className="block">
                <div className="block1">
                    <h4>{firstBlockLetters}</h4>
                    <p>{firstBlockNumber}</p>
                </div>
                <div className="block1">
                    <h4>{secondBlockLetters}</h4>
                    <p>{secondBlockNumber}</p>
                </div>
                <div className="block1">
                    <h4>{thirdBlockLetters}</h4>
                    <p>{thirdBlockNumber}</p>
                </div>
            </div>
  )
}

export default ActivitesBlock