import { FC } from "react";
import styles from "./Stats.module.pcss";
import PropTypes from "prop-types";
import { YaliState } from "../ducks/yali";

type Props = {
  yali: YaliState;
};

const Stats: FC<Props> = ({ yali }) => {
  return (
    <div className={styles.root}>
      <div>Jano: {yali.hydration.toFixed(0)}</div>
      <div>Nälkä: {yali.fullness.toFixed(0)}</div>
      <div>Onni: {yali.mood.toFixed(0)}</div>
    </div>
  );
};

export default Stats;
