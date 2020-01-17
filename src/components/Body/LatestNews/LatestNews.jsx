import React from "react";
import PhoneTable from "../../../asset/img/Rectangle 1 copy 25.png";
import latestLaptop from "../../../asset/img/latestLaptop.png";
import LatestPhone from "../../../asset/img/LatestPhone.png";

import "./LatestNews.css"

function LatestNews() {
  return (
      <>
      <h2 className="latestHead">LATEST NEWS</h2>
    <div className="LatestNews">
      <div className="firstNews">
        <img src={PhoneTable} alt="latest phone" />
        <div className="latestText">
          <div className="latestDate">01 Jan, 2015</div>
          <div className="latestName">Typesetting industry</div>
          <div className="latestDesc">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div>
        </div>
      </div>
      <div className="firstNews">
        <img src={latestLaptop} alt="latest phone" />
        <div className="latestText">
          <div className="latestDate">01 Jan, 2015</div>
          <div className="latestName">Typesetting industry</div>
          <div className="latestDesc">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div>
        </div>
      </div>
      <div className="firstNews">
        <img src={LatestPhone} alt="latest phone" />
        <div className="latestText">
          <div className="latestDate">01 Jan, 2015</div>
          <div className="latestName">Typesetting industry</div>
          <div className="latestDesc">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default LatestNews;