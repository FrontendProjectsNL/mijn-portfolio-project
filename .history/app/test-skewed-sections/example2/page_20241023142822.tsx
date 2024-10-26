'use client';

import styles from './SkewedBackgrounds.module.css';

// pages/skewed-backgrounds.js
import { useEffect, useState } from 'react';

export default function SkewedBackgrounds() {
  return (
    <div>
      <CustomSection
        bgColor="blue"
        title="CustomSection 1"
        content= "
Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque provident voluptate deleniti sunt modi, ducimus temporibus magnam aut, distinctio ipsum enim voluptates quidem itaque neque repudiandae doloremque ipsa velit facilis maxime. Optio, quae! Omnis, vitae atque voluptatem quibusdam cumque nemo inventore, odit numquam eaque veritatis explicabo quos. Dolorum voluptate nisi pariatur eligendi iste ratione quis perspiciatis. Delectus assumenda asperiores vel! Ipsam quisquam nihil officia tempora reprehenderit veniam quis exercitationem est provident hic amet culpa officiis, eum cumque tempore iusto cupiditate! Hic, est suscipit. Id, quia, reiciendis, sit laudantium rerum nobis sed velit voluptatibus voluptatem cumque quaerat quo consequuntur! Voluptatibus, incidunt!"
      />
      <CustomSection
        bgColor="red"
        title="CustomSection 2"
        content="This is the content for CustomSection 2."
      />
      <CustomSection
        bgColor="green"
        title="CustomSection 3"
        content="This is the content for CustomSection 3."
      />
      <CustomSection
        bgColor="yellow"
        title="CustomSection 4"
        content="This is the content for CustomSection 4."
      />
      <CustomSection
        bgColor="purple"
        title="CustomSection 5"
        content="This is the content for CustomSection 5."
      />
    </div>
  );
}

function CustomSection({ bgColor, title, content }) {
  return (
    <CustomSection className={`${styles.CustomSection} ${styles[bgColor]}`}>
      <div className={styles.content}>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </CustomSection>
  );
}
