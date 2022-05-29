import React, { useState } from "react";
import { Link } from "react-router-dom";
import Skill from "../components/Skill";
import Layout from "../components/Layout";
import Zipperdev from "../img/zipperdev.svg";
import GithubIcon from "../img/contact/github.svg";
import YoutubeIcon from "../img/contact/youtube.svg";
import GmailIcon from "../img/contact/gmail.svg";
import MonitorImage from "../img/monitor.png";
import DevelopeImage from "../img/develope.png";


function Home({ loading }) {
    const [ currentSkill, setCurrentSkill ] = useState(null);
    const importAll = folder => {
        let images = {};
        folder.keys().forEach(item => {
            images[item.replace("./", "")] = folder(item);
        });
        return images;
    };
    const images = importAll(require.context("../img/badges", false, /\.svg$/));
    const badgeDatas = {
        html5: { id: "html5", name: "HTML5", color: "#E34F26" }, 
        css3: { id: "css3", name: "CSS3", color: "#1572B6" }, 
        javascript: { id: "javascript", name: "Javascript", color: "#F7DF1E" }, 
        typescript: { id: "typescript", name: "Typescript", color: "#3178C6" }, 
        reactnative: { id: "reactnative", name: "React Native", color: "#61DAFB" }, 
        expo: { id: "expo", name: "Expo", color: "#000020" }, 
        nextjs: { id: "nextjs", name: "NextJS", color: "#000000" }, 
        sass: { id: "sass", name: "SASS", color: "#CC6699" }, 
        tailwindcss: { id: "tailwindcss", name: "Tailwind CSS", color: "#06B6D4" }, 
        styledcomponents: { id: "styledcomponents", name: "Styled Components", color: "#DB7093" }, 
        express: { id: "express", name: "Express", color: "#000000" }, 
        prisma: { id: "prisma", name: "Prisma", color: "#2D3748" }, 
        apollographql: { id: "apollographql", name: "Apollo", color: "#311C87" }, 
        mongodb: { id: "mongodb", name: "MongoDB", color: "#47A248" }, 
        amazonaws: { id: "amazonaws", name: "AWS", color: "#232F3E" }, 
        heroku: { id: "heroku", name: "Heroku", color: "#430098" }, 
        git: { id: "git", name: "Git", color: "#F05032" }, 
        github: { id: "github", name: "Github", color: "#181717" }, 
        figma: { id: "figma", name: "Figma", color: "#F24E1E" }, 
        blender: { id: "blender", name: "Blender", color: "#F5792A" }
    };

    return (
        <Layout title="홈" loading={loading}>
            <div className="about relative flex flex-col sm:flex-row items-center self-center xl:w-3/4 xl:my-8">
                <img src={MonitorImage} alt="모니터" className="absolute hidden w-[20%] -left-28 -top-6 blur-sm 2xl:block" />
                <img src={DevelopeImage} alt="개발" className="absolute hidden w-[20%] -right-28 -top-1 blur-sm 2xl:block" />
                <img src={Zipperdev} alt="홈" className="sm:w-full w-40 h-40 rounded-full contrast-75 z-10 sm:-ml-8 2xl:-ml-4" />
                <div className=" flex flex-col items-center sm:items-start mt-4 mx-4 sm:m-0 z-10">
                    <h1 className="text-gray-200 font-bold text-2xl">
                        만드는 것을<br />
                        좋아하는 어린 개발자,<br />
                        Zipperdev
                    </h1>
                    <span className="text-gray-200 text-md mt-2 w-4/6 sm:w-full text-center sm:text-left">
                        안녕하세요, 성장하는 어린 개발자 Zipperdev 입니다!
                        저는 경상북도에 살고있으며 영어와 프로그래밍 하는 것을 좋아합니다.
                        앞으로 차근차근 성장해서 멋진 개발자가 될것입니다 :&#41;
                    </span>
                </div>
            </div>
            <div className="myWork flex flex-col mt-12 mx-2 sm:mx-10 xl:grid xl:grid-cols-2 xl:gap-6">
                <div className="skills">
                    <h3 className="text-gray-300 font-bold text-2xl ml-3 mb-0.5">스킬</h3>
                    <div className="grid grid-cols-6 sm:grid-cols-8 lg:grid-cols-9 xl:grid-cols-6 auto-rows-max gap-2">
                        {Object.keys(badgeDatas).map((skill, index) => (
                            <Skill key={index} badge={`url(${images[`${skill}.svg`].default})`} badgeData={badgeDatas[skill]} currentSkill={currentSkill} setCurrentSkill={setCurrentSkill} />
                        ))}
                    </div>
                    <h4 className="text-gray-300 block bg-neutral-800 w-full text-center py-2 px-3 rounded-md mt-2">{currentSkill ? currentSkill?.name : "아이콘을 클릭해보세요"}</h4>
                </div>
                <div className="links mt-6 xl:mt-0">
                    <h3 className="text-gray-300 font-bold text-2xl ml-3 mb-1 xl:ml-2">개인 작업들</h3>
                    <div className="flex flex-col space-y-2">
                        {[
                            { link: "/zipperdev-studios", title: "Zipperdev Studios", desc: "작은 웹 & 네이티브 앱 공작소" }, 
                            { link: "/projects", title: "프로젝트 보러가기", desc: "아직은 초라하지만 발전하는 중인 다양한 프로젝트들" }, 
                        ].map((data, index) => (
                            <Link key={index} to={data.link}>
                                <div className="w-full p-2 box-border bg-neutral-800 rounded-lg hover:ring-2 ring-0 ring-neutral-800 transition">
                                    <h3 className="text-gray-300 font-bold text-xl">{data.title}</h3>
                                    <span className="text-zinc-400 block mb-10 text-md xl:mb-[24%]">{data.desc}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            <div className="contact mt-12 mx-2 sm:mx-10">
                <h3 className="text-gray-300 font-bold text-2xl ml-3 mb-0.5">컨택트</h3>
                <span className="text-zinc-400 block mx-2 ml-2 mb-1">개인적인 충고나 하고싶은 말을 해주세요.<br/>쓴소리라도 달게 받아 멋지게 성장하겠습니다!</span>
                <form action="mailto:sh20101119@gmail.com" enctype="multipart/form-data" name="contactForm" className="flex flex-col px-2 space-y-1">
                    <input type="text" id="subject" name="subject" className="rounded-md border-none bg-neutral-800 text-gray-300 placeholder-gray-400 appearance-none" placeholder="타이틀" />
                    <textarea id="body" name="body" rows="6" cols="20" className="resize-y rounded-md border-none bg-neutral-800 text-gray-300 placeholder-gray-400 appearance-none" placeholder="개인적인 충고나 하고싶은 말"></textarea>
                    <button type="submit" name="submit" className="py-3 bg-neutral-800 text-gray-300 rounded-md cursor-pointer hover:brightness-110 transition">이메일 보내기</button>
                </form>
                <div className="flex justify-center space-x-4 mt-5">
                    {[
                        { link: "https://github.com/zipperdev", img: GithubIcon }, 
                        { link: "https://www.youtube.com/channel/UChIzfjdXhDLN_ecXDZZgldA", img: YoutubeIcon }, 
                        { link: "mailto:sh20101119@gmail.com", img: GmailIcon }
                    ].map((data, index) => (
                        <a key={index} href={data.link} rel="noreferrer" target="_blank" className="w-12 h-12 aspect-square rounded-full bg-neutral-800 overflow-hidden box-border p-2">
                            <img src={data.img} alt="컨택트" />
                        </a>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default Home;