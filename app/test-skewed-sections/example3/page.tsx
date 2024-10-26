// pages/skewed-backgrounds.js
import styles from './SkewedBackgrounds.module.css';

export default function SkewedBackgrounds() {
  return (
    <div>
      <Section
        bgColor="blue"
        title="Section 1"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque provident voluptate deleniti sunt modi, ducimus temporibus magnam aut, distinctio ipsum enim voluptates quidem itaque neque repudiandae doloremque ipsa velit facilis maxime. Optio, quae! Omnis, vitae atque voluptatem quibusdam cumque nemo inventore, odit numquam eaque veritatis explicabo quos. Dolorum voluptate nisi pariatur eligendi iste ratione quis perspiciatis. Delectus assumenda asperiores vel! Ipsam quisquam nihil officia tempora reprehenderit veniam quis exercitationem est provident hic amet culpa officiis, eum cumque tempore iusto cupiditate! Hic, est suscipit. Id, quia, reiciendis, sit laudantium rerum nobis sed velit voluptatibus voluptatem cumque quaerat quo consequuntur! Voluptatibus, incidunt!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque provident voluptate deleniti sunt modi, ducimus temporibus magnam aut, distinctio ipsum enim voluptates quidem itaque neque repudiandae doloremque ipsa velit facilis maxime. Optio, quae! Omnis, vitae atque voluptatem quibusdam cumque nemo inventore, odit numquam eaque veritatis explicabo quos. Dolorum voluptate nisi pariatur eligendi iste ratione quis perspiciatis. Delectus assumenda asperiores vel! Ipsam quisquam nihil officia tempora reprehenderit veniam quis exercitationem est provident hic amet culpa officiis, eum cumque tempore iusto cupiditate! Hic, est suscipit. Id, quia, reiciendis, sit laudantium rerum nobis sed velit voluptatibus voluptatem cumque quaerat quo consequuntur! Voluptatibus, incidunt! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque provident voluptate deleniti sunt modi, ducimus temporibus magnam aut, distinctio ipsum enim voluptates quidem itaque neque repudiandae doloremque ipsa velit facilis maxime. Optio, quae! Omnis, vitae atque voluptatem quibusdam cumque nemo inventore, odit numquam eaque veritatis explicabo quos. Dolorum voluptate nisi pariatur eligendi iste ratione quis perspiciatis. Delectus assumenda asperiores vel! Ipsam quisquam nihil officia tempora reprehenderit veniam quis exercitationem est provident hic amet culpa officiis, eum cumque tempore iusto cupiditate! Hic, est suscipit. Id, quia, reiciendis, sit laudantium rerum nobis sed velit voluptatibus voluptatem cumque quaerat quo consequuntur! Voluptatibus, incidunt!"
      />
      <Section
        bgColor="red"
        title="Section 2"
        content="This is the content for section 2 with a red background and skewed edges."
      />
      <Section
        bgColor="green"
        title="Section 3"
        content="This is the content for section 3 with a green background and skewed edges."
      />
      <Section
        bgColor="yellow"
        title="Section 4"
        content="This is the content for section 4 with a yellow background and skewed edges."
      />
      <Section
        bgColor="purple"
        title="Section 5"
        content="This is the content for section 5 with a purple background and skewed edges."
      />
    </div>
  );
}

function Section({ bgColor, title, content }) {
  return (
    <section className={`${styles.section} ${styles[bgColor]}`}>
      <div className={styles.content}>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </section>
  );
}
