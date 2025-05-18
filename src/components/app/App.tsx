import { useState } from 'react'
import css from "./App.module.css";
import CafeInfo from "../cafeInfo/CafeInfo.tsx";
import Notification from "../notification/Notification.tsx";
import VoteOptions from "../voteOptions/VoteOptions.tsx";
import VoteStats from "../voteStats/VoteStats.tsx";
import type { Votes, VoteType } from "../../types/votes.ts";

function App() {
  const [value, setValue] = useState<Votes>({ good: 0, neutral: 0, bad: 0 });

  
  function handleVote(type: VoteType) {
    setValue(prev => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
  }

  function resetVotes() {
    setValue({ good: 0, neutral: 0, bad: 0 });
  }

  const totalVotes = value.bad + value.good + value.neutral;
  const rate =
    totalVotes === 0 ? 0 : Math.round((value.good / totalVotes) * 100);
    const canReset = totalVotes > 0;

  return (
    
      <div className={css.app}>
        <CafeInfo />
        <VoteOptions
          onVote={handleVote}
          onReset={resetVotes}
          canReset={canReset}
        />
        {totalVotes > 0 ? (
          <VoteStats
            votes={value}
            totalVotes={totalVotes}
            rate={rate}
          />
        ) : (
          <Notification />
        )}
      </div>
  );
}

export default App;
