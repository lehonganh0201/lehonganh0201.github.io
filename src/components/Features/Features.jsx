import { GoArrowRight } from "react-icons/go";
import "./Features.scss";

const Features = () => {
  return (
    <>
      <div className="features">
        <div className="features-items">
          <div className="features-title">
            <h3>Features</h3>
            <p className="desc features-desc">
              Some of the features and advantages that we provide for those of
              you who store data in this Data Warehouse.
            </p>
          </div>
          <div className="features-boxs">
            <div className="box">
              <div className="box-img">
                <img src={"https://s3-alpha-sig.figma.com/img/de39/7ca5/7ba1dda1fab4af707def69fa8e4d2a0b?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jInqqY4dOIS8tK39prwJILni5-RbRsui9WS-dmWVoLPmvacoonz2m1VLhLevLu5-Fhf3HzOOx0PyfiReFiT74s27qE9hAKfnsGOkOFG~Ps~ZvK-S3mjnYon1cUUsgjNJFyBvruVn0unI5Chr5-HT4ycnppSCNBuqCPr~pY3muP0c-5nzHEcpktcGnnB6rAw6TFhgofztwBzIK2C2~i8LsDvFdOV2tKazfMh4fiEu~~DWF46dh-KqBQyaXL09oDbbjxaJX5wWqqERlitPf1AukycXjI-sXebgvyMy3on-VWFybGIAmCGQervFWyNBW9gCFLCWuFQ0qQ0RD1RZslm~Jg__"} alt="" />
              </div>
              <div className="box-title box1">
                <h4>Search Data</h4>
                <p>
                  Don’t worry if your data is very large, the Data Warehoue
                  provides a search engine, which is useful for making it easier
                  to find data effectively saving time.
                </p>
                <div className="learn-more">
                  <p className="bold">Learn more</p>
                  <GoArrowRight />
                </div>
              </div>
            </div>
            <div className="box">
              <div className="box-img">
                <img src={"https://s3-alpha-sig.figma.com/img/4848/bd8b/6441ecd1919c84f36a65eabdc8138a2c?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pZSmEu9EYEmEtWAl2xqasBPBlMsg2H9JWNXJYsDClX6ptsmtOyFkRa8UedTDW0vnq3yqVcTb1C5QYiPKTgxuiQuReADHEACYM7OfQ~R1EzEUxruyxtyjc5zBPRRs8pad8R7PRTW1Vqj6ZL9Lh8KdlucnGehSvRD9bwTnzy-KrMoGjILM~O73GhiQtWxWs04fDtUrV4JfGFlRtd1N9-6VNylS~7dXx75bDAEXJSeXupJ0xCEwjysMm7PRIJmCylnGC7zMCFFphJ4X1URySGYRXSTf92WXxq2V5oDs8snqIF6Xm6gsNMKR-uR8nZuxOxvs5GSRzV4ofKflvjdWlIvOjQ__"} alt="" />
              </div>
              <div className="box-title box2">
                <div className="content">
                  <h4>24 Hours Access</h4>
                  <p>
                    Access is given 24 hours a full morning to night and meet
                    again in the morning, giving you comfort when you need data
                    when urgent.
                  </p>
                  <div className="learn-more">
                    <p className="bold">Learn more</p>
                    <GoArrowRight />
                  </div>
                </div>
              </div>
            </div>
            <div className="box">
              <div className="box-img">
                <img src={"https://s3-alpha-sig.figma.com/img/cc12/c28f/2f3e743d08b2c66de2a7a23d4228df91?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Oa5ky7VzdkKPn1YKIt7nZv3EwCoqjBBcc1VsHapPcdWoiQaRSedJ9jBWHH~VvqgkVRLcgkfNZf7aTcE-Y730GkcQng5e1xLQ49f1fJkP9nREr-JlCENqG1m9z867Y6l68BQaytDkXHwZcs9OfD5uzZbCuZBf4aADZUFh2tpVoXMK2IebsF5l7HxAi-F4jSfnSO3enjAG08MToCfYtp1-WDYtpJTUNaniXgWZoB1qYKsIXpmDoLqqDaWJt~Davj~U4gF0v3r02vA1spYflBI2mnNLM~HqTWeaqlP6JIkxwk~LgBKkame0Mp8gZEJ6lomsbvkfC7yzlT3ddmRIhaQkcw__"} alt="" />
              </div>
              <div className="box-title box3">
                <h4>Print Out</h4>
                <p>
                  Print out service gives you convenience if someday you need
                  print data, just edit it all and just print it.
                </p>
                <div className="learn-more">
                  <p className="bold">Learn more</p>
                  <GoArrowRight />
                </div>
              </div>
            </div>
            <div className="box">
              <div className="box-img">
                <img src={"https://s3-alpha-sig.figma.com/img/9b0c/ad9e/af78d7add1e7940c7af1b7f896b757e0?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UjCgrDlMeGvdnOQYVxnwR9RKSHxngVlykJzQpXqlkZDGqKMq6YJn7z3kn4K6ykTpLED3KlfvZLnbXS~iOCnB5DzRwdp8jVferiFs6heGJihi9rSz9s09~nyR91wIMnntckZi6jE38joSeMSIWiI8AEgJ3UPSIXMTDPtSe3~K2Gyn6eIPWvNlNOqkz-J-V5xfCUsfp1ZVjotxp1eNIfQ38HapVHjbzyQpcsCXWg~im7mfgX~sSyB--j~LuzGxU9bZtNWLUOPohoye8Rag9GKBaFPvq8ItyxH9Gtxj1lRjBhIVEXCji8YCmKjff8As-Aieso6YpHmJLi0HFmv6UxaIVQ__"} alt="" />
              </div>
              <div className="box-title box4">
                <h4>Security Code</h4>
                <p>
                  Data Security is one of our best facilities. Allows for your
                  files to be safer. The file can be secured with a code or
                  password that you created, so only you can open the file.
                </p>
                <div className="learn-more">
                  <p className="bold">Learn more</p>
                  <GoArrowRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
