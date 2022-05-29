import React from "react";
import Layout from "../../components/Layout";

function Spark({ loading }) {
    return (
        <Layout title="코드네임 Spark" loading={loading}>
            <div className="flex flex-col">
                <h3 className="font-bold text-3xl text-gray-300">코드네임 Spark</h3>
                <h4 className="font-semibold text-xl text-zinc-400 block mt-2">우리나라를 위한 소셜 네트워킹 서비스</h4>
                <p className="font-medium text-lg text-gray-300 mt-2">
                    코드네임 Spark 프로젝트는 우리나라 고유의 특성을 반영한 소셜 네트워킹 서비스 프로젝트입니다.
                    코드네임 Spark 프로젝트는 2021년 9월 초부터 시작한 프로젝트로 현재까지도 차근차근 진행 중입니다.
                    코드네임 Spark 프로젝트는 2023년 전까지는 출시될 예정입니다.
                </p>
            </div>
        </Layout>
    );
};

export default Spark;