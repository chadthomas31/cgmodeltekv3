"use client";

import { useEffect, useRef, useState } from "react";

export default function AerospaceSlider() {
  const trackRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const [current, setCurrent] = useState(0);

  const cards = [
    {
      title: "Designers",
      desc: "Tools that work like you do.",
      bg: "https://cdn-front.freepik.com/home/anon-rvmp/professionals/designers.webp",
      thumb: "https://cdn-front.freepik.com/home/anon-rvmp/professionals/img-designer.webp?w=480",
      btn: "Details",
    },
    {
      title: "Marketers",
      desc: "Create faster, explore new possibilities.",
      bg: "https://cdn-front.freepik.com/home/anon-rvmp/professionals/marketers.webp",
      thumb: "https://cdn-front.freepik.com/home/anon-rvmp/professionals/img-marketer.webp?w=480",
      btn: "Details",
    },
    {
      title: "VFX filmmakers",
      desc: "From concept to cut, faster.",
      bg: "https://cdn-front.freepik.com/home/anon-rvmp/professionals/filmmakers.webp",
      thumb: "https://cdn-front.freepik.com/home/anon-rvmp/professionals/img-film.webp?w=480",
      btn: "Details",
    },
    {
      title: "Content creators",
      desc: "Make scroll-stopping content, easily.",
      bg: "https://cdn-front.freepik.com/home/anon-rvmp/professionals/content-creators.webp",
      thumb: "https://cdn-front.freepik.com/home/anon-rvmp/professionals/img-content.webp?w=480",
      btn: "Details",
    },
    {
      title: "Art directors",
      desc: "Creative control at every stage.",
      bg: "https://cdn-front.freepik.com/home/anon-rvmp/professionals/art-directors.webp",
      thumb: "https://cdn-front.freepik.com/home/anon-rvmp/professionals/img-art.webp?w=480",
      btn: "Details",
    },
  ];

  const isMobile = () =>
    typeof window !== "undefined" && window.matchMedia("(max-width:767px)").matches;

  const center = (i: number) => {
    const wrap = wrapRef.current;
    const card = cardRefs.current[i];
    if (!wrap || !card) return;
    const axis = isMobile() ? "top" : "left";
    const size = isMobile() ? "clientHeight" : "clientWidth";
    const start = isMobile() ? card.offsetTop : card.offsetLeft;
    wrap.scrollTo({
      [axis]: start - ((wrap as any)[size] / 2 - (card as any)[size] / 2),
      behavior: "smooth",
    });
  };

  const toggleUI = (i: number) => {
    cardRefs.current.forEach((c, k) => {
      if (c) {
        if (k === i) {
          c.setAttribute("active", "");
        } else {
          c.removeAttribute("active");
        }
      }
    });
    if (dotsRef.current) {
      Array.from(dotsRef.current.children).forEach((d, k) => {
        const dot = d as HTMLElement;
        dot.classList.toggle("active", k === i);
      });
    }
  };

  const activate = (i: number, scroll: boolean) => {
    if (i === current) return;
    setCurrent(i);
    toggleUI(i);
    if (scroll) center(i);
  };

  const go = (step: number) => {
    activate(Math.min(Math.max(current + step, 0), cards.length - 1), true);
  };

  useEffect(() => {
    if (!dotsRef.current) return;
    dotsRef.current.innerHTML = "";
    cards.forEach((_, i) => {
      const dot = document.createElement("span");
      dot.className = "dot";
      dot.onclick = () => activate(i, true);
      dotsRef.current!.appendChild(dot);
    });
    toggleUI(0);
    center(0);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (["ArrowRight", "ArrowDown"].includes(e.key)) go(1);
      if (["ArrowLeft", "ArrowUp"].includes(e.key)) go(-1);
    };
    window.addEventListener("keydown", onKey, { passive: true });
    return () => window.removeEventListener("keydown", onKey);
  }, [current]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let sx = 0;
    let sy = 0;
    const onTouchStart = (e: TouchEvent) => {
      sx = e.touches[0].clientX;
      sy = e.touches[0].clientY;
    };
    const onTouchEnd = (e: TouchEvent) => {
      const dx = e.changedTouches[0].clientX - sx;
      const dy = e.changedTouches[0].clientY - sy;
      if (isMobile() ? Math.abs(dy) > 60 : Math.abs(dx) > 60) {
        go((isMobile() ? dy : dx) > 0 ? -1 : 1);
      }
    };
    track.addEventListener("touchstart", onTouchStart, { passive: true });
    track.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      track.removeEventListener("touchstart", onTouchStart);
      track.removeEventListener("touchend", onTouchEnd);
    };
  }, [current]);

  useEffect(() => {
    if (dotsRef.current && isMobile()) {
      dotsRef.current.hidden = true;
    }
  }, []);

  useEffect(() => {
    const onResize = () => center(current);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [current]);

  const prev = () => go(-1);
  const next = () => go(1);

  return (
    <section>
      <div className="head">
        <h2>Boost your professional workflow and productivity</h2>
        <div className="controls">
          <button id="prev" className="nav-btn" aria-label="Prev" onClick={prev}>
            ‹
          </button>
          <button id="next" className="nav-btn" aria-label="Next" onClick={next}>
            ›
          </button>
        </div>
      </div>

      <div className="slider" ref={wrapRef}>
        <div className="track" id="track" ref={trackRef}>
          {cards.map((card, i) => (
            <article
              key={card.title}
              className="project-card"
              ref={(el) => { cardRefs.current[i] = el; }}
              data-active={i === 0 ? "" : undefined}
              onMouseEnter={() => {
                if (typeof window !== "undefined" && window.matchMedia("(hover:hover)").matches) {
                  activate(i, true);
                }
              }}
              onClick={() => activate(i, true)}
            >
              <img className="project-card__bg" src={card.bg} alt="" />
              <div className="project-card__content">
                <img className="project-card__thumb" src={card.thumb} alt={card.title} />
                <div>
                  <h3 className="project-card__title">{card.title}</h3>
                  <p className="project-card__desc">{card.desc}</p>
                  <button className="project-card__btn">{card.btn}</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="dots" id="dots" ref={dotsRef} />
    </section>
  );
}
