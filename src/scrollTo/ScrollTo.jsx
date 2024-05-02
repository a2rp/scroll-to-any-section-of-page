import React, { useRef } from 'react'
import styles from "./styles.module.scss";

const ScrollTo = () => {
    const containerRef = useRef(null);
    const sectionARef = useRef(null);
    const sectionBRef = useRef(null);
    const sectionCRef = useRef(null);
    const sectionDRef = useRef(null);
    const sectionERef = useRef(null);
    const sectionFRef = useRef(null);

    return (
        <div ref={containerRef} className={styles.container}>
            <div className={styles.main}>
                <div className={styles.heading}>Scroll to</div>

                <div className={styles.scrollButonsContainer}>
                    <button onClick={() => window.scrollTo(0, 0)}>scroll to top</button>
                    <button onClick={() => sectionARef.current.scrollIntoView()}>scroll to section A</button>
                    <button onClick={() => sectionBRef.current.scrollIntoView()}>scroll to section B</button>
                    <button onClick={() => sectionCRef.current.scrollIntoView()}>scroll to section C</button>
                    <button onClick={() => sectionDRef.current.scrollIntoView()}>scroll to section D</button>
                    <button onClick={() => sectionERef.current.scrollIntoView()}>scroll to section E</button>
                    <button onClick={() => sectionFRef.current.scrollIntoView()}>scroll to section F</button>
                    <button onClick={() => window.scrollTo({ top: containerRef.current.scrollHeight })}>scroll to bottom</button>
                </div>

                <div ref={sectionARef} className={styles.sectionA}>Section A</div>
                <div ref={sectionBRef} className={styles.sectionA}>Section B</div>
                <div ref={sectionCRef} className={styles.sectionA}>Section C</div>
                <div ref={sectionDRef} className={styles.sectionA}>Section D</div>
                <div ref={sectionERef} className={styles.sectionA}>Section E</div>
                <div ref={sectionFRef} className={styles.sectionA}>Section F</div>
            </div>
        </div>
    )
}

export default ScrollTo




