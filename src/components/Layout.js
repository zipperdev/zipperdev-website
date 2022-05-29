import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet-async";
import Header from "./layout/Header";
import { Loading } from "../App";

function Layout({ title, children, loading }) {
    if (loading) {
        return <Loading loading={loading} />
    };
    return (
        <div className="flex flex-col w-full min-h-full h-auto pt-4 sm:pt-0 md:pt-4 md:pb-4 bg-neutral-900 md:bg-[#1b1b1d] md:px-20 lg:px-32 xl:px-52 2xl:px-72">
            <Helmet>
                <title>Zipperdev | {title}</title>
            </Helmet>
            <div className="flex flex-grow flex-col relative w-full min-h-full h-auto box-border bg-neutral-900 px-6 sm:px-6 md:px-12 md:p-6 md:rounded-lg overflow-hidden">
                <div className="hidden fixed sm:block sm:absolute top-0 left-0 right-0">
                    <div className="w-full h-8 xl:h-10 bg-[#040404] relative z-10" />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#040404" preserveAspectRatio="none" viewBox="0 100 1440 320" className="relative z-10 w-full 2xl:h-48">
                        <path d="M0,160L48,186.7C96,213,192,267,288,261.3C384,256,480,192,576,170.7C672,149,768,171,864,197.3C960,224,1056,256,1152,261.3C1248,267,1344,245,1392,234.7L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#0f0f0f" preserveAspectRatio="none" viewBox="0 0 1440 320" className="-mt-36 relative md:-mt-40 lg:-mt-48 xl:-mt-52 2xl:-mt-56 w-full 2xl:h-80">
                        <path d="M0,160L48,165.3C96,171,192,181,288,165.3C384,149,480,107,576,122.7C672,139,768,213,864,218.7C960,224,1056,160,1152,144C1248,128,1344,160,1392,176L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
                    </svg>
                </div>
                <Header />
                <div className="flex flex-col pt-4">
                    {children}
                </div>
            </div>
            <footer className="py-10 mt-4 flex flex-col items-center bg-[#0F0F0F] text-gray-300 md:rounded-lg">
                <h3 className="text-sm">배움의 자세를 가지는 어린 풋내기 개발자</h3>
                <div className="flex">
                    <svg version="1.1" id="Capa_1" fill="#d1d5db" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 367.467 367.467" className="w-[1rem]">
                        <g>
                            <path d="M183.73,0.018C82.427,0.018,0,82.404,0,183.733c0,101.289,82.427,183.716,183.73,183.716
                                c101.315,0,183.737-82.427,183.737-183.716C367.467,82.404,285.045,0.018,183.73,0.018z M183.73,326.518
                                c-78.743,0-142.798-64.052-142.798-142.784c0-78.766,64.055-142.817,142.798-142.817c78.752,0,142.807,64.052,142.807,142.817
                                C326.536,262.466,262.481,326.518,183.73,326.518z"/>
                            <path d="M244.036,217.014c-11.737,20.141-33.562,32.635-56.956,32.635c-36.329,0-65.921-29.585-65.921-65.915
                                c0-36.36,29.592-65.955,65.921-65.955c23.395,0,45.219,12.54,56.956,32.641l1.517,2.627h44.28l-2.658-7.129
                                c-7.705-20.413-21.225-37.769-39.122-50.157c-17.942-12.42-39.017-19.009-60.973-19.009c-58.981,0-106.946,48.006-106.946,106.982
                                c0,58.98,47.965,106.941,106.946,106.941c21.956,0,43.03-6.567,60.973-19.006c17.897-12.391,31.417-29.741,39.122-50.154
                                l2.658-7.133h-44.28L244.036,217.014z"/>
                        </g>
                    </svg>
                    <span className="ml-1">{new Date().getFullYear()} Zipperdev. All Rights Reserved.</span>
                </div>
            </footer>
        </div>
    );
};

Layout.propTypes = {
    title: PropTypes.string.isRequired
};

export default Layout;