import data from  "../helper/data"
import Puzzles from "../components/Puzzles" 
import HomeStyle from "./Home.module.css"

const Home = () => {
  return (
    <div className={HomeStyle.home}>
      <div className={HomeStyle["header-image"]}>
        <img src="./images/kermit.jpg" alt="kermit" />
      </div>
      <h1 className={HomeStyle.title}>BiLmEcE </h1>
      <div className={HomeStyle["min-title"]}>
      <p>Bilmece Bildirmece El üstünde Kaydırmaca</p>
      <p>Hadi Cevaplayalım..</p>
      </div>
      
      {
        data.map(bilmece => (
            <Puzzles key={bilmece.id} {...bilmece}/>
        ))
      }
    </div>
  )
}

export default Home
