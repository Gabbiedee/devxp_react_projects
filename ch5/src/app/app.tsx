// eslint-disable-next-line @typescript-eslint/no-unused-vars

import SalesSummaryRow from "./SalesSummaryRow/SalesSummaryRow";
import "./app.module.scss";
// import styles from './app.module.scss';
// import NxWelcome from "./nx-welcome";
import Layout from './components/Layout';

export function App() {

  return (
    <>
      <SalesSummaryRow />
      {/* <NxWelcome title="ch5" /> */}
      {/* <div /> */}
      <Layout />
    </>
  );
}

export default App;
