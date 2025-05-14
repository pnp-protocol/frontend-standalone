import React from "react";
import "./MarketTile.css";

const MarketTile = (marketData) => {
  const { market, onClick } = marketData;

  const { yesPrice, noPrice, noMultiplier, question, yesMultiplier, endTime } =
    market;

  function dateGen(unixTime) {
    var a = new Date(unixTime * 1000);
    var months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time =
      date + " " + month + " " + year + " " + hour + ":" + min + ":" + sec;
    console.log(time);
    return time;
  }

  console.log(`Each date in number 🔥 ${endTime}`);

  return (
    <div className="market-tile" onClick={onClick}>
      <div className="tile-content">
        <h3 className="tile-question">{question}</h3>

        <div className="tile-outcomes">
          <div className="outcome yes">
            <div className="outcome-header">YES</div>
            <div className="outcome-data">
              <div className="outcome-price">
                $ {Number(yesPrice).toFixed(2)}
              </div>
              <div className="outcome-multiplier">
                ×{Number(yesMultiplier).toFixed(2)}
              </div>
            </div>
          </div>

          <div className="outcome no">
            <div className="outcome-header">NO</div>
            <div className="outcome-data">
              <div className="outcome-price">
                $ {Number(noPrice).toFixed(2)}
              </div>
              <div className="outcome-multiplier">
                ×{Number(noMultiplier).toFixed(2)}
              </div>
            </div>
          </div>
        </div>

        <div className="clock-container">
          <span className="market-clock">🕣</span>
          <div className="clock-tooltip">{dateGen(endTime)}</div>
        </div>
      </div>
    </div>
  );
};

export default MarketTile;
