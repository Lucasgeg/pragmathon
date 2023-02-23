import ComponentLayout from "../../components/atom/ComponentLayout/ComponentLayout";
import { CustomAreaChart } from "../../components/mollecule/Charts/CustomAreaChart/CustomAreaChart";
import { CustomPieChart } from "../../components/mollecule/Charts/PieChart/PieChart";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.layer}>
      <ComponentLayout className={styles.comp1}>
        <CustomPieChart />
      </ComponentLayout>
      <ComponentLayout>
        <CustomAreaChart />
      </ComponentLayout>
      <div className={styles.comp3}>Tableau </div>
    </div>
  );
};

export default Home;
