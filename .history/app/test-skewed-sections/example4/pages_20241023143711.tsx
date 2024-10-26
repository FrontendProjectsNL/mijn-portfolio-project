// pages/skewed-backgrounds.js
import styles from '../styles/SkewedBackgrounds.module.css';

export default function SkewedBackgrounds() {
  return (
    <div>
      <Section
        bgColor="blue"
        title="Section 1"
        content="This is the content for section 1 with a blue gradient background and skewed effect."
      />
      <Section
        bgColor="red"
        title="Section 2"
        content="This is the content for section 2 with a red gradient background and skewed effect."
      />
      <Section
        bgColor="green"
        title="Section 3"
        content="This is the content for section 3 with a green gradient background and skewed effect."
      />
      <Section
        bgColor="yellow"
        title="Section 4"
        content="This is the content for section 4 with a yellow gradient background and skewed effect."
      />
      <Section
        bgColor="purple"
        title="Section 5"
        content="This is the content for section 5 with a purple gradient background and skewed effect."
      />
    </div>
  );
}

function Section({ bgColor, title, content }) {
  return (
    <section className={styles.section}>
      <div className={`${styles.skewed - background} ${styles[bgColor]}`}></div>
      <div className={styles.content}>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </section>
  );
}
