import ReactConfetti from "react-confetti";
import { useWindowSize } from "react-use";

export function Confetti() {
  const { width, height } = useWindowSize();
  return (
    <ReactConfetti
      recycle={false}
      numberOfPieces={500}
      tweenDuration={10000}
      width={width - 20}
      height={height}
    />
  );
}
