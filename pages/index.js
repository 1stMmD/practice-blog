import {useState , useEffect} from "react";
import styles from '../styles/Home.module.scss';
import LeftContainer from '../components/LeftContainer';
import RightContainer from "../components/RightContainer";
import Header from "../components/Header";
import PageChanging from "../components/PageChanging";

export default function Home() {

  const [showTime , setShowTime] = useState(false);

  useEffect(
    () => {
      setShowTime(true)
    },
    []
  )

  return (
    <div className={styles.container}> 

      <PageChanging
      showTime={showTime}/>

      <Header/>

      <LeftContainer styles={styles.container_left} setShowTime={setShowTime} />
      <RightContainer styles={styles.container_right}/>

    </div>
  )
}
