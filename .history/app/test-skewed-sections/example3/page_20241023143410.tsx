// pages/skewed-backgrounds.js
import styles from './SkewedBackgrounds.module.css';

export default function SkewedBackgrounds() {
  return (
    <div>
      <Section
        bgColor="blue"
        title="Section 1"
        content="This is the content for section 1 with a blue background and skewed edges."
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
