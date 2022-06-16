import { Prefecture } from "../types";
import { useEffect, useState } from "react";

type Props = {
  prefectureInfo: Prefecture;
  onChange: (e:React.ChangeEvent<HTMLInputElement>) => void;
};

export const CheckBox = ({ prefectureInfo, onChange }: Props) => {
  return (
    <label htmlFor={String(prefectureInfo.prefCode)}>
      <input
        value={prefectureInfo.prefCode}
        id={String(prefectureInfo.prefCode)}
        onChange={(e) => onChange(e)}
        type="checkbox"
      />
      {prefectureInfo.prefName}
    </label>
  );
};
