import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import {
  Animator,
  batch,
  Fade,
  FadeIn,
  Move,
  MoveIn,
  MoveOut,
  ScrollContainer,
  ScrollPage,
  Sticky,
  StickyIn,
  ZoomIn,
} from "react-scroll-motion";
import { MouseDown } from "./components";

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Sticky(), Move());

export const App: React.FC = () => {
  const [hidden, setHidden] = useState({ status: false });
  const listenScrollEvent = () => {
    window.scrollY > 1
      ? setHidden({ status: true })
      : setHidden({ status: false });
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
  return (
    <ScrollContainer>
      <ScrollPage>
        <Animator animation={batch(Sticky(), Fade(), MoveOut(0, -200))}>
          <div>
            <div>스크롤 랜딩 모션</div>
          </div>
        </Animator>
        {!hidden.status ? <MouseDown /> : <></>}
      </ScrollPage>
      <ScrollPage>
        <Animator animation={ZoomInScrollOut}>
          <h2>지금 바로 공개합니다.</h2>
        </Animator>
      </ScrollPage>

      <ScrollPage>
        <Animator animation={FadeUp}>
          <h2>저는 올라가요 ☁️</h2>
        </Animator>
      </ScrollPage>

      <ScrollPage>
        <Animator animation={batch(Fade(), Sticky())}>
          <h2>끝 ✅</h2>
        </Animator>
      </ScrollPage>
    </ScrollContainer>
  );
};
