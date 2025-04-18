import styles from "./cheaperstore.module.css";
export default function CheaperStore() {
  return (
    <div>
      <div className={styles.topContainer}>
        <h1>Get Cheaper Products Here</h1>
        <div>
          {/* <label>Sort by</label> */}
          <select>
            <option value="date">Sort by</option>
            <option value="amount">Dec</option>
            <option value="name">Jan</option>
          </select>
        </div>
      </div>

      <div className={styles.storeWrapper}>
        <div className={styles.storeContainer}>
          <img src="" alt="item-image" />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum aut
            cum voluptates voluptatem
          </p>
        </div>

        <div className={styles.storeContainer}>
          <img src="" alt="item-image" />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum aut
            cum voluptates voluptatem
          </p>
        </div>

        <div className={styles.storeContainer}>
          <img src="" alt="item-image" />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum aut
            cum voluptates voluptatem
          </p>
        </div>
      </div>
    </div>
  );
}
