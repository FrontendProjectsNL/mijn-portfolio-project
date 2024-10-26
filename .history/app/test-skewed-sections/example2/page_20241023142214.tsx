'use client';

import styles from './SkewedBackgrounds.module.css';

// pages/skewed-backgrounds.js
import { useEffect, useState } from 'react';

export default function SkewedBackgrounds() {
  const [isMounted, setIsMounted] = useState(false);

  // This effect ensures the component is only rendered on the client side
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Prevent mismatches between SSR and client rendering
  }

  return (
    <div>
      <Section
        bgColor="blue"
        title="Section 1"
        content="This is the content for section 1."
      />
      <Section
        bgColor="red"
        title="Section 2"
        content="This is the content for section 2."
      />
      <Section
        bgColor="green"
        title="Section 3"
        content="This is the content for section 3."
      />
      <Section
        bgColor="yellow"
        title="Section 4"
        content="This is the content for section 4."
      />
      <Section
        bgColor="purple"
        title="Section 5"
        content="This is the content for section 5."
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
