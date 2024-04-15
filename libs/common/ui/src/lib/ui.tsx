import styles from './tester.module.scss';

/* eslint-disable-next-line */
export interface UiProps {}

export function Ui(props: UiProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Ui!</h1>
      <h2>Let's show the world what we are made of 👏👏👏</h2>
    </div>
  );
}

export default Ui;
