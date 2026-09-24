import { useEffect, useRef, useState } from "react";
import { FiArrowDown, FiArrowUp, FiBookOpen, FiCoffee, FiGithub, FiGlobe, FiHeart, FiLinkedin, FiMail, FiMessageCircle, FiYoutube } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa6";
import styles from "./styles.module.scss";

const publicAsset = (name) => `${process.env.PUBLIC_URL || ""}/${name}`;

const links = [
    { label: "Portfolio", href: "https://www.ashishranjan.net/", Icon: FiGlobe },
    { label: "GitHub", href: "https://github.com/a2rp", Icon: FiGithub },
    { label: "CodePen", href: "https://codepen.io/ash1198", Icon: FiMessageCircle },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/aashishranjan", Icon: FiLinkedin },
    { label: "Facebook", href: "https://www.facebook.com/theash.ashish/", Icon: FaFacebookF },
    { label: "YouTube", href: "https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1", Icon: FiYoutube },
    { label: "Email", href: "mailto:ash.ranjan09@gmail.com", Icon: FiMail },
];

const support = [
    { label: "Support", href: "https://a2rp-donation-page.netlify.app/", Icon: FiHeart },
    { label: "Buy Me a Coffee", href: "https://buymeacoffee.com/a2rp", Icon: FiCoffee },
    { label: "Patreon", href: "https://patreon.com/a2rp", Icon: FiBookOpen },
];

const sections = [
    { title: "Section A", text: "A focused starting point for learning how page anchors and scroll targets work." },
    { title: "Section B", text: "Reusable navigation can move visitors to the exact content they need." },
    { title: "Section C", text: "Smooth scrolling keeps the transition clear without losing context." },
    { title: "Section D", text: "Active section feedback helps users understand where they are on the page." },
    { title: "Section E", text: "Responsive layouts keep the same navigation useful on smaller screens." },
    { title: "Section F", text: "A final section demonstrates long-page navigation before reaching the footer." },
];

function IconLinks({ items }) {
    return (
        <div className={styles.iconLinks}>
            {items.map(({ label, href, Icon }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}>
                    <Icon aria-hidden="true" />
                </a>
            ))}
        </div>
    );
}

function ScrollTo() {
    const sectionRefs = useRef([]);
    const [activeSection, setActiveSection] = useState(0);

    const scrollToSection = (index) => {
        sectionRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
                if (visible[0]) setActiveSection(Number(visible[0].target.dataset.index));
            },
            { rootMargin: "-18% 0px -62% 0px", threshold: [0.1, 0.35, 0.7] },
        );

        sectionRefs.current.forEach((section) => section && observer.observe(section));
        return () => observer.disconnect();
    }, []);

    return (
        <div className={styles.page}>
            <header className={styles.header}>
                <a className={styles.brand} href="#top" aria-label="Scroll to sections home">
                    <img src={publicAsset("logo.png")} alt="" />
                    <span><small>A2RP LAB</small>Scroll to Sections</span>
                </a>
                <div className={styles.headerNote}>Fixed navigation demo</div>
            </header>

            <div className={styles.navigation} aria-label="Page sections">
                <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}><FiArrowUp aria-hidden="true" /> Top</button>
                {sections.map((section, index) => (
                    <button key={section.title} type="button" className={activeSection === index ? styles.active : ""} onClick={() => scrollToSection(index)} aria-current={activeSection === index ? "location" : undefined}>
                        {section.title}
                    </button>
                ))}
                <button type="button" onClick={() => window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" })}><FiArrowDown aria-hidden="true" /> Bottom</button>
            </div>

            <main className={styles.main} id="top">
                <section className={styles.hero}>
                    <div>
                        <p className={styles.kicker}>NAVIGATION PATTERN</p>
                        <h1>Scroll to any section of a page.</h1>
                        <p className={styles.intro}>Use the fixed controls to jump between content sections and keep long pages easy to explore.</p>
                    </div>
                    <div className={styles.heroCard}>
                        <FiArrowDown aria-hidden="true" />
                        <strong>8 targets</strong>
                        <span>top, six sections, and bottom</span>
                    </div>
                </section>

                <section className={styles.sectionList} aria-label="Scrollable sections">
                    {sections.map((section, index) => (
                        <article className={`${styles.section} ${activeSection === index ? styles.sectionActive : ""}`} key={section.title} ref={(element) => { sectionRefs.current[index] = element; }} data-index={index}>
                            <span className={styles.sectionNumber}>0{index + 1}</span>
                            <div>
                                <p className={styles.kicker}>SCROLL TARGET</p>
                                <h2>{section.title}</h2>
                                <p>{section.text}</p>
                            </div>
                        </article>
                    ))}
                </section>
            </main>

            <footer className={styles.footer}>
                <div className={styles.footerMain}>
                    <div className={styles.footerTop}>
                        <strong>Simple anchors, better browsing.</strong>
                        <span>Copyright © {new Date().getFullYear()} <a href="https://www.ashishranjan.net/" target="_blank" rel="noopener noreferrer">Ashish Ranjan</a></span>
                    </div>
                    <div className={styles.footerGroups}>
                        <div><span>Connect</span><IconLinks items={links} /></div>
                        <div><span>Support</span><IconLinks items={support} /></div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default ScrollTo;
