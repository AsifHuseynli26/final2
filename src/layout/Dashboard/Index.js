import React, { useContext } from "react";
import "../../assests/Db.css";
import CardData from "../../Data/status-card-data.json";
import Chart from "react-apexcharts";
import Apexcharts from "../../compantes/Apexcharts";
import { useTranslation } from "react-i18next";
import { Context } from "../../compantes/Context";

function Index() {
  const { bg, classHover } = useContext(Context);
  const [t, i18n] = useTranslation("global");
  return (
    <div className="mt-4">
      <div>
        <h1 className="title">{t("dashboard.dashboard")}</h1>
      </div>

      <div className="row">
        <div className="col-lg-6 col-md-12">
          <div className="row">
            {CardData.map((data) => (
              <div className="col-lg-6 col-md-6 col-sm-12  mt-4 boxCont">
                <div className={`boxhover ${classHover}`}></div>
                <div className="box py-3 ">
                  <i className={`${data.icon} cdicon mx-3`}></i>
                  <div className="boxtext">
                    <h2>{data.count}</h2>
                    <p>{data.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="  col-lg-6 col-md-12 my-lg-4 mt-md-4 my-sm-5">
          <div className="diagram ">
            <Apexcharts />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
