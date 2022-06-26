import { Prefecture } from "../types";

type Props = {
  prefectures: Prefecture[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>, prefName: string) => void;
};

export const PrefectureList: React.FC<Props> = ({ prefectures, onChange }) => {
  return (
    <>
      <h2>都道府県</h2>
      <div className="checkBoxs">
        {prefectures.map((prefectureInfo) => (
          <div key={prefectureInfo.prefCode}>
            <label htmlFor={String(prefectureInfo.prefCode)}>
              <input
                value={prefectureInfo.prefCode}
                id={String(prefectureInfo.prefCode)}
                onChange={(e) => onChange(e, prefectureInfo.prefName)}
                type="checkbox"
              />
              {prefectureInfo.prefName}
            </label>
          </div>
        ))}
      </div>
    </>
  );
};
