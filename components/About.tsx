import React from "react";
import Image, { StaticImageData } from "next/image";

export default function About() {
    return (
        <section id="about" className="dark-bg">
            <div className="flex">
                <div className="flex-full">
                    <h1 className="white">Experience</h1>
                    <AboutCard
                        title="Microsoft"
                        icon="/icons/code.svg"
                        description="Software Engineer 2 (May 2022 - Present)"
                        projects="I've worked on a multitude of apps at Microsoft, architected solutions to enhance system efficiencies, engaged in R&D with OpenAI, and led a team to develop a new employee onboarding portal for streamlined system setups." />
                    <AboutCard
                        title="Honeywell"
                        icon="/icons/code.svg"
                        description="Software Engineer 2 (Oct 2020 - May 2022)"
                        projects="I collaborated with the Energy Optimization Team, enhancing UI performance by reducing package size by 15% and boosting efficiency. I also contributed to the development of a Python-based library of algorithms, advancing team capabilities." />
                    <AboutCard
                        title="TransferMate Global Payments"
                        icon="/icons/code.svg"
                        description="C# Developer (Sep 2019 - Oct 2020)"
                        projects="Redesigned back-end and front-end architecture for high-throughput compliance processes, drastically cutting down processing times and enhancing efficiency." />
                    <AboutCard
                        title="Eastern Enterprises"
                        icon="/icons/code.svg"
                        description="c# Developer (Jan 2019 - Oct 2020)"
                        projects="I led the development of a global cloud license management system, overseeing client requirement collection, database design, and UI creation. I also conducted candidate interviews and mentored new team members, significantly improving team performance and project outcomes." />
                    <AboutCard
                        title="Mindfire Solutions"
                        icon="/icons/code.svg"
                        description="Software Engineer 2 (Oct 2020 - May 2022)"
                        projects="I collaborated with the Energy Optimization Team, enhancing UI performance by reducing package size by 15% and boosting efficiency. I also contributed to the development of a Python-based library of algorithms, advancing team capabilities." />
                </div>

                <div className="flex-full about-text">
                    <h1 className="white">Hello! I'm Shahbaaz Khan</h1>
                    <h3 className="white">Software isn't just about code; it's about creating solutions that perform.</h3>
                    <p className="gray">I am a seasoned Software Engineer with a robust background in computer science and engineering.
                        <br />
                        <br />
                        Specializing in .NET, OpenAI integrations, and full-stack development, I have crafted digital solutions that streamline processes, enhance user interaction, and reduce operational costs at several top-tier companies, including Microsoft and Honeywell.</p>
                </div>
            </div>

            {/* <div className="flex partners justify-space">
                <Image src="/images/partners/wallety.png" height={45} width={180} alt="wallety" />
                <Image src="/images/partners/artisty.png" height={45} width={180} alt="artisty" />
                <Image src="/images/partners/khedma-lik.png" height={45} width={180} alt="khedma-lik" />
                <Image src="/images/partners/directy.png" height={45} width={180} alt="directy" />
                <Image src="/images/partners/telefy.png" height={45} width={180} alt="telefy" />
            </div> */}
        </section>
    )
}

type Props = {
    title: string,
    icon: string | StaticImageData,
    description: string,
    projects: string
}

function AboutCard({ title, icon, description, projects }: Props) {
    return (
        <div className="light-bg about-card">
            <div className="flex justify-space">
                <h3 className="green">{title}</h3>
                <Image src={icon} width={28} height={28} alt={title} />
            </div>
            <p className="white">{description}</p>
            <span className="white">{projects}</span>
        </div>
    )
}