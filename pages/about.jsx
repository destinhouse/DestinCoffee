import styles from "../components/About/About.module.scss";
import {supabase} from "../utils/supabaseCreate";
import ImageSlider from "../components/ImageSlider/ImageSlider";
import {useState, useEffect} from "react";
import Footer from "../components/Layout/Footer/Footer";
import images from "../components/About/sample2.json";
function about() {
  // const [image, setImage] = useState();
  // const get_slider = async () => {
  //   const {data} = await supabase.from("menu").select().match({id: 66});
  //   let images = JSON.parse(data[0].title);
  //   data[0].parse_title = images;
  //   console.log(data[0]);
  //   setImage(data[0]);
  // };
  // useEffect(() => {
  //   (async () => {
  //     await get_slider();
  //   })();
  // }, []);
  const result = Object.values(images);
  console.log(result);
  return result ? (
    <div className={styles.page}>
      <img src="https://imgur.com/wIxW4Te" />
      <div className={styles.section1}>
        <div className={styles.title}>
          Destin Coffee House <img src="/destincoffeeLOGO.png" />
        </div>
      </div>
      <div className={styles.section2}>
        <div className={styles.image1}>
          <ImageSlider slides={result} />
        </div>
      </div>
      <Footer />
    </div>
  ) : null;
}

export default about;
