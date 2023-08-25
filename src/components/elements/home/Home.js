import React, { useState } from "react";
import styles from "./index.module.css";
import Cards from "../atom/cards/Cards";
import ChartsEarnings from "../atom/chartsEarnings/ChartsEarnings";
import ChartsOrders from "../atom/chartsOrders/ChartsOrders";
import ChartsProfit from "../atom/chartsProfit/ChartsProfit";
import ChartsTotalProfit from "../atom/chartsTotalProfit/ChartsTotalProfit";
import ViewReport from "../atom/viewReport/ViewReport";
import Stepper from "../atom/stepper/Stepper";

const Home = () => {
  return (
    <div className={styles.home}>
      <h2 style={{ color: "white", fontWeight: "400" }}>Marketing Dashboard</h2>
      <p style={{ color: "grey" }}>
        Home / <span style={{ color: "#0BB885" }}>Dashboard</span>
      </p>
      <Cards />
      <section className={styles.wrapper__charts}>
        <div className={styles.wrapper__charts__left}>
          <div className={styles.wrapper__charts__top}>
            <ChartsEarnings />
            <ChartsOrders />
            <ChartsProfit />
          </div>
          <div className={styles.wrapper__charts__bottom}>
            <ChartsTotalProfit />
            <ViewReport />
          </div>
        </div>
        <div className={styles.wrapper__charts__right}>
          <Stepper />
        </div>
      </section>
    </div>
  );
};

export default Home;
