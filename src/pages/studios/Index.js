import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout";
import DailyfaceImage from "../../img/dailyface/dailyface.png";

function Index({ loading }) {
    return (
        <Layout title="Zippperdev Studios" loading={loading}>
            <div className="flex flex-col mx-2">
                <h3 className="text-gray-300 font-bold text-2xl ml-1">Zipperdev Studios</h3>
                <h4 className="text-zinc-400 block mb-4 text-lg">꾸준히 성장하고 있는 작은 웹 & 네이티브 앱 공작소</h4>
                <div className="grid mt-2 md:grid-cols-2 gap-4">
                    <div>
                        <Link to="/zipperdev-studios/spark">
                            <div className="overflow-hidden relative rounded-md p-4 bg-neutral-800 hover:ring-4 ring-0 ring-zinc-800 transition">
                                <div className="relative z-10 mb-10">
                                    <h3 className="text-gray-300 font-semibold text-2xl">코드네임 Spark</h3>
                                    <p className="text-yellow-600 font-medium text-lg">현재 서비스 제작 중...</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to="/zipperdev-studios/dailyface">
                            <div className="overflow-hidden relative rounded-md p-4 hover:ring-4 ring-0 ring-zinc-300 transition">
                                <img src={DailyfaceImage} alt="데일리 페이스" className="blur absolute left-0 right-0 top-[50%] -translate-y-[50%] scale-105 md:scale-150" />
                                <div className="relative z-10 mb-10">
                                    <h3 className="text-gray-900 font-semibold text-2xl">데일리 페이스</h3>
                                    <p className="text-gray-800 font-medium text-lg">데일리 페이스와 함께보는 날씨 앱</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Index;