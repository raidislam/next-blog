import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { FirstPost } from "./posts";

export default function Home() {
  return (
    <div className={styles.container}>
      <h2>Learn Next Js</h2>
      <FirstPost />
    </div>
  );
}
