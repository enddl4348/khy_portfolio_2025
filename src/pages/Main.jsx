import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

// img
const Img01 = '/img/cardimg_01.jpg';
const Img02 = '/img/cardimg_02.jpg';
const Img03 = '/img/cardimg_03.jpg';
const Img04 = '/img/cardimg_04.jpg';
const Img05 = '/img/cardimg_05.jpg';
const Img06 = '/img/cardimg_06.jpg';
const Img07 = '/img/cardimg_07.jpg';
const Img08 = '/img/cardimg_08.jpg';

const imageCard = [
  Img01,
  Img02,
  Img03,
  Img04,
  Img05,
  Img06,
  Img07,
  Img08,
  Img01,
  Img02,
  Img03,
  Img04,
];
console.log(imageCard);

function ImageCard({ img }) {
  return (
    <div className="card-list__img">
      <img src={img} alt="" />
    </div>
  );
}

export default function Main() {
  const containerRef = useRef(null);

  // 전체 스크롤 진행도 가져오기
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // 스크롤 진행도 → x축 이동 값으로 변환
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-2668px']); //-2668px: (전체 card 너비) - 1328(가운데 container 너비)

  // 부드럽게 애니메이션 처리
  const smoothX = useSpring(x, {
    stiffness: 160,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="main">
      <section className="section01">SECTION 01</section>

      <section className="section02 card-container" ref={containerRef}>
        <div className="card-wrap">
          <motion.div
            className="card-list"
            style={{
              x: smoothX,
            }}
          >
            {imageCard.map((item, index) => (
              <ImageCard key={index} img={item} />
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section03">SECTION 03</section>
    </div>
  );
}
