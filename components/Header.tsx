import React from "react";
import Image from "next/image";

import NavBar from "./NavBar";

export default function Header() {
    return (
        <header>
            <NavBar />
            <div className="header flex light-bg">
                <div>
                    <button>Software Engineer</button>
                    <h1 className="white">From Code to Customer</h1>
                    <h1 className="white">Deliver the Solution!</h1>
                    <p className="gray">I craft and refine efficient digital tools, and I thrive in what I do.</p>
                    <a className="green" href="mailto:shahbaazkhan@outlook.com">Let&#39;s connect!</a>
                </div>
                <div>
                    <Image src="/images/2022_Award_Winner.png" width={200} height={200} alt="Microsft 2022 Award Winner" />
                    <Image src="/images/2022_EX_Winner.png" width={200} height={200} alt="Microsft 2022 Executive Award Winner" />
                </div>
            </div>
        </header>
    )
}