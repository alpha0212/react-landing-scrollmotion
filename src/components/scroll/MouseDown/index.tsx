import React from "react";
import * as S from "./styled";

export const MouseDown: React.FC = () => {
  return (
    <S.ScrollDown>
      <S.Chevrons>
        <S.ChevronDown></S.ChevronDown>
        <S.ChevronDown></S.ChevronDown>
      </S.Chevrons>
    </S.ScrollDown>
  );
};
