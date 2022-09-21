import styles from "./Contact.module.scss";
import {motion} from "framer-motion";
import Map from "../Map";
export default function Contact() {
  return (
    <motion.div
      className={styles.page}
      intial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
      <div className={styles.container}>
        <div className={styles.contact}>
          <header>
            <h1>Επικοινωνήστε μαζι μας!</h1>
          </header>
          <h5>Ρωτήστε μας/Ενημερώστε μας για οτιδήποτε σας απασχολεί!</h5>
          <main>
            <div className={styles.name}>
              <input placeholder="Name" name="name" />
              <div></div>
              <input placeholder="Surname" name="surname" />
            </div>

            <input placeholder="Your Email" type="email" name="email" />
            <input placeholder="phone" name="phone" />
          </main>
        </div>
        <div className={styles.map}>
          <Map />
        </div>
      </div>
    </motion.div>
  );
}
