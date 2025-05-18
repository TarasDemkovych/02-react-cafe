import css from "./VoteOptions.module.css";
import type { VoteType } from "../../types/votes";

export interface VoteOptionsProps {
  onVote: (type: VoteType) => void;
  onReset: () => void;
  canReset: boolean;
}

export default function VoteOptions({ onVote, onReset, canReset }: VoteOptionsProps) {
  const options: VoteType[] = ["good", "neutral", "bad"];

  return (
    <div className={css.container}>
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onVote(option)}
          className={css.button}
        >
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </button>
      ))}
      {canReset && (
        <button onClick={onReset} className={`${css.button} ${css.reset}`}>
          Reset
        </button>
      )}
    </div>
  );
}