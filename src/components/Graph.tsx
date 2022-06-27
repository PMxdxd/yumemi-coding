import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Prefecture } from "../types";

type Props = {
  populationData: {
    [prefCode: number]: { data: { year: number; value: number } };
  };
  prefectures: Prefecture[];
  selectedPrefectures: string[];
};

const minYear = 1980;
const currentYear = new Date().getFullYear();
const maxYear = currentYear - (currentYear % 5);

const Graph: React.FC<Props> = ({
  populationData,
  prefectures,
  selectedPrefectures,
}) => {
  let series: Highcharts.SeriesOptionsType[] = [];
  for (let prefCode of selectedPrefectures) {
    series.push({
      type: "line",
      name: prefectures[parseInt(prefCode) - 1].prefName,
      data: populationData[Number(prefCode)].data
        .filter(
          (d) =>
            parseInt(d.year) >= minYear && parseInt(d.year) <= maxYear
        )
        .map((d) => [d.year, d.value]),
    });
  }

  const options: Highcharts.Options = {
    title: {
      text: "",
    },
    xAxis: {
      title: {
        text: "年度",
      },
      tickInterval: 5,
    },
    yAxis: {
      title: {
        text: "人口数",
      },
    },
    plotOptions: {
      series: {
        events: {
          legendItemClick(e) {
            e.preventDefault();
          },
        },
      },
    },
    series:
      series.length === 0
        ? [{ type: "line", name: "都道府県名", data: [] }]
        : series,
  };

  return (
    <div className="graph">
      <h2>総人口推移グラフ</h2>
      <HighchartsReact highcharts={Highcharts} options={options} />
      <p className="exhibit">出典：RESAS（地域経済分析システム）</p>
    </div>
  );
};

export default Graph;
