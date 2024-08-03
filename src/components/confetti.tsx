import ReactConfetti from "react-confetti";
import { useWindowSize } from "react-use";

export function Confetti() {
  const { width, height } = useWindowSize();
  return <ReactConfetti width={width} height={height} />;
}
