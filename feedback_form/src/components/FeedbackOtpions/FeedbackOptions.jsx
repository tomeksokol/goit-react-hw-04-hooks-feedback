
import React from 'react';
import style from '../Statistics/Statistics.module.css';

function FeedbackOptions( {option1, option2, option3, addGoodOpinion, addNeutralOpinion, addBadOpinion} ) {
  return (
    <div>    
      <button
          type="button"
          onClick={addGoodOpinion}
          className={style.positive}>
          {option1}
        </button>
        <button
          type="button"
          onClick={addNeutralOpinion}
          className={style.buttons}>
          {option2}
        </button>
        <button
          type="button"
          onClick={addBadOpinion}
          className={style.negative}>
          {option3}
        </button>
    </div>
  )
}

export default FeedbackOptions