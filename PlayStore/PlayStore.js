import { useState } from "react";
import "./playstore.css";
import Tablist from "./tablist";
import PlayStoreList from "./playstorelist";

const PlayStore=()=>{

    const tabList=[
        {
            tabId:"social",
            displayText:"Social"
        },
        {
            tabId:"games",
            displayText:"Games"
        },
        {
            tabId:"news",
            displayText:"News"
        },
        {
            tabId:"food",
            displayText:"Food"
        }
    ]

    const appList = [
        {appId:1,appName:"Facebook",imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiXN9xSEe8unzPBEQOeAKXd9Q55efGHGB9BA&s",category:"social"},
        {appId:2,appName:"Messenger",imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdkPYkg-TFl2I2r0t0ijNldV9egg6TAokDpA&s",category:"social"},
        {appId:3,appName:"WhatsApp",imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPADVMClbsK0sjUlU7iTXpQ7krJwQfTW_ezg&s",category:"social"},
        {appId:4,appName:"Instagram",imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjkllAaLITJDTdTY575IzXot87Y7qV8cSz7A&s",category:"social"},
        {appId:5,appName:"Snapchat",imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYFxLDOOIhPgVXftmclpdg6jhL1KiwGcFp2g&s",category:"social"},
        {appId:6,appName:"Twitter",imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKJyfX3VaLeWVozKSRcpbnY_qQrvGk13Fqjw&s",category:"social"},
        {appId:7,appName:"Pinterest",imgUrl:"https://yt3.googleusercontent.com/ytc/AIdro_lEiNsKUy7OMQcQHZgDWO2m_jeM_UiklRQN-SNoSjCurCQO=s900-c-k-c0x00ffffff-no-rj",category:"social"},
        {appId:8,appName:"WeChat",imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfk1jjpRfXu9h5fnKimTvUB2WImrbXgJNPzA&s",category:"social"},
        {appId:9,appName:"LinkedIn",imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0bGEl9v47XieEtHyj0TqTr1tOXJmib-KHtw&s",category:"social"},
        {appId:10,appName:"Telegram",imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIMLaGmMXvrQPp5WJstRlpT6XFBCpJJlSV2A&s",category:"social"},
        {appId:11,appName:"CandyCruch",imgUrl:"https://store-images.s-microsoft.com/image/apps.54354.13510798882606697.7a42c472-75d7-487e-9538-ebb5ce1657e6.372723d8-dd1a-450a-9fed-d420e7705e4e",category:"games"},
        {appId:12,appName:"Pubg",imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCRf_wtqVjT0y6vcd97r1C0X9FFicfc1uucw&s",category:"games"},
        {appId:13,appName:"Ludo",imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRl-dgEfigNAOJhzvzmHtWIel-FrB1UMMwPw&s",category:"games"},
        {appId:14,appName:"CallOfDuty",imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK9s9whuKLMBHZ3x3TRfwBHt9h15b2h88jnA&s",category:"games"},
        {appId:15,appName:"TruckSimulator",imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-PGJ4CW-7WcLZxParFCgummoNvX30vcplGw&s",category:"games"},
        {appId:16,appName:"Google News",imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYtpXhbgecsPY3pTI5UdnNqaRq9NRYPfE_SA&s",category:"news"},
        {appId:17,appName:"The Times of India",imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSStH6d6gGFIWZGQls7KBBbQUyT8yK62UNDCA&s",category:"news"},
        {appId:18,appName:"The Hindu",imgUrl:"https://play-lh.googleusercontent.com/VX_eSbWBRAKQTfbv6xVEWijJVNT07YmiB_fi2t4OsbQWQu9vzmGDHoO2kc46igNZPyc=w240-h480-rw",category:"news"},
        {appId:19,appName:"CNN",imgUrl:"https://play-lh.googleusercontent.com/375NW5yL8owK_hW9igW9sh-YJbda9ZcygpDXuVvK_R7l-yJp-fuhb4qvUw_FE4XW4ms",category:"news"},
        {appId:20,appName:"News18",imgUrl:"https://play-lh.googleusercontent.com/hzsJYY5LJffTiVjxd1NZZ_yWwItQ-yvLFGs2MWcdmvxiPeK8eNfmQfUSl53QPVayPX4=w240-h480-rw",category:"news"},
        {appId:21,appName:"Swiggy",imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV1G7b-BDs30ThRU636mGLrWrVCntNwOe3Lw&s",category:"food"},
        {appId:22,appName:"Zomoto",imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwugYjkStrKCv4hgND62XXlNMsVG4uXEmj9A&s",category:"food"},
        {appId:23,appName:"Uber Eats",imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6VSGDpKsP_2nu9bnxc05vKy_IxJMTp52PMg&s",category:"food"},
        {appId:24,appName:"KFC",imgUrl:"https://play-lh.googleusercontent.com/bsUDcv_IV-bF1vIbWKQZQex-PNt0b0_Eb0mzIaXt3QA2n8VSUxtRkJuwQp4XVJwYeg",category:"food"},
        {appId:25,appName:"Domino's Pizza",imgUrl:"https://play-lh.googleusercontent.com/_lq2HX0YJNDrr0EeUebLAB2JsGbRGyoFY-XOnuUFTPfeEqaHNIyMOGqLx-oq4mUWPpn0",category:"food"}
    ]

    const [activeTabId, setActiveTabId] = useState(tabList[0].tabId);
    const [searchTerm, setSearchTerm] = useState("");

    const onChangeTab = (tabId) => {
        setActiveTabId(tabId);
        setSearchTerm("");
    };

    const onSearchChange = (event) => {
        setSearchTerm(event.target.value.toLowerCase());
    };

    const filteredApps = appList.filter(
        (app) =>
            app.category === activeTabId &&
            app.appName.toLowerCase().includes(searchTerm)
    );

    return (
        <div className="playstore mt-s text-center">
            <h1 className="heading1">App Store</h1>
            <div className="search-div">
                <input
                    type="text"
                    placeholder="Search apps..."
                    value={searchTerm}
                    onChange={onSearchChange}
                    className="search-input"
                />
            </div>
            <ul className="list mb-5">
                {tabList.map((tab) => (
                    <Tablist
                        tab={tab}
                        key={tab.tabId}
                        onChangeTab={onChangeTab}
                        activeTabId={activeTabId}
                    />
                ))}
            </ul>
            <ul className="list1">
                {filteredApps.map((app) => (
                    <PlayStoreList app={app} key={app.appId} />
                ))}
            </ul>
        </div>
    );
};

export default PlayStore;
