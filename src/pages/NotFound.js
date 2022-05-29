import React from "react";
import { useHistory } from "react-router-dom";
import NotFoundImage from "../img/notFound.png"
import Layout from "../components/Layout";

function NotFound({ loading }) {
    const history = useHistory();

    return (
        <Layout title="404 에러" loading={loading}>
            <div className="flex flex-col md:flex-row space-y-2 md:space-x-4 px-6">
                <img src={NotFoundImage} alt="404 에러" className="flex-grow md:w-3/5 aspect-square rounded-lg  md:-ml-10" />
                <div className="w-full py-4 md:w-auto md:flex-grow md:py-0 md:self-center">
                    <h1 className="text-2xl block font-semibold text-gray-200 mb-2">페이지를 찾을 수 없어요 :&#40;</h1>
                    <span className="text-lg block font-medium text-gray-200 md:w-4/5">잘못된 주소거나 현재 존재하지 않는 페이지일 수도 있어요</span>
                    <div className="mt-4 flex items-center space-x-6 h-14">
                        <button className="flex items-center justify-center transition w-full py-1 bg-transparent ring-2 hover:ring-4 ring-amber-600 rounded-md" onClick={() => history.push("/")}>
                            <h3 className="text-lg font-medium text-amber-600">메인화면 가기</h3>
                        </button>
                        <button onClick={history.goBack} className="flex items-center justify-center transition w-full py-1 bg-amber-600 ring-2 hover:ring-4 ring-amber-600 rounded-md">
                            <h3 className="text-lg font-medium text-gray-100">이전화면 가기</h3>
                        </button>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default NotFound;