import { Prefecture } from "../types";
import { useEffect, useState } from "react";

type Props = {
  prefectureInfo: Prefecture;
};

export const CheckBox = ({ prefectureInfo }: Props) => {
  return (
    <label htmlFor={String(prefectureInfo.prefCode)}>
      <input id={String(prefectureInfo.prefCode)} type="checkbox" />
      {prefectureInfo.prefName}
    </label>
  );
};
