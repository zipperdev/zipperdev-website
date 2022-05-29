import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import Layout from "../components/Layout";

function Projects({ loading }) {
    const { isLoading, error, data, refetch } = useQuery("projects", async () => {
        const { data } = await axios.get("https://api.github.com/users/zipperdev/repos");
        return data;
    });

    return (
        <Layout title="프로젝트" loading={loading}>
            <div className="flex flex-col mx-2">
                <h3 className="text-gray-300 font-bold text-2xl ml-1">프로젝트</h3>
                <h4 className="text-zinc-400 block mb-4 text-lg">작고 소소한 발전하는 중인 다양한 프로젝트들</h4>
                <div>
                    {!isLoading && !error ? <button className="py-2 px-4 bg-neutral-800 text-gray-300 rounded-md hover:ring-2 ring-0 ring-zinc-800 transition" onClick={() => refetch()}>새로고침하기</button> : null}
                    {isLoading ? <p className="font-semibold text-gray-300 text-2xl">로딩 중...</p> : null}
                    {error ? <p className="font-semibold text-red-400 text-2xl">에러가 발생했습니다 :&#40;</p> : null}
                    <div className="grid mt-4 md:grid-cols-2 md:grid-flow-row-dense gap-3">
                        {data ? data.map(project => (
                            <div className="w-full h-full">
                                <a key={project.id} href={project.html_url} rel="noreferrer" target="_blank">
                                    <span className="cursor-pointer bg-neutral-800 p-4 flex flex-col rounded-md w-full h-full relative pb-12 hover:ring-2 ring-0 ring-zinc-800 transition">
                                        <div className="flex flex-col mb-4">
                                            <h3 className="text-gray-300 font-semibold text-xl">{project.name.replace(/-/g, " ").replace(/(?:^|\s)\S/g, c => c.toUpperCase())}</h3>
                                            <p className="text-gray-400 font-medium">{project.description}</p>
                                        </div>
                                        <div className="flex justify-end space-x-2 absolute bottom-3">
                                            <span className="text-gray-300 font-normal">생성 {project.created_at.slice(0, 10).replace(/-/g, ".")}</span>
                                            <span className="text-gray-300 font-normal">업데이트 {project.updated_at.slice(0, 10).replace(/-/g, ".")}</span>
                                        </div>
                                    </span>
                                </a>
                            </div>
                        )) : null}
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Projects;