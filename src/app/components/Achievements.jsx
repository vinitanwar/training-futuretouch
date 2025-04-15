import Image from "next/image";
import Link from "next/link";

const Achievements = () => {
    const achievements = [
        {
            image: "/images/medical.webp",
            title: "International Certification",
            description: "Get rewarded with an Internationally acceptable certification."
        },
        {
            image: "/images/diagram.webp",
            title: "2,000+ Trained",
            description: "We have trained more than 2k+ students in the past 10 years & successfully placed them."
        },
        {
            image: "/images/leader.webp",
            title: "Expert Faculties",
            description: "Our programs are led by industry experts who have 12+ years of experience."
        },
        {
            image: "/images/idea.webp",
            title: "Hands-On Experience",
            description: "Develop real-time implementation skills during your course."
        },
        {
            image: "/images/demand.webp",
            title: "2,000+ Trainings",
            description: "10 years & counting, we have delivered more than 2,000+ trainings."
        },
        {
            image: "/images/global-network.webp",
            title: "Global Placement",
            description: "Get interview assistance across 35+ countries including India, Dubai, USA & Canada."
        }
    ];

    return (
        <section className="mx-auto px-4 py-12 lg:px-28 flex flex-col md:flex-row gap-8 lg:relative">
            {/* Sticky Sidebar */}
            <div className="md:w-1/3 lg:w-1/3 h-[260px] lg:h-[200px] lg:sticky top-36">
                <div className="text-center md:text-left">
                    <p className="text-3xl font-medium">
                        Our <span className="text-blue-500">Achievements</span>
                    </p>
                    <p className="mt-4 text-gray-600">
                        Future IT Touch Institute has trained over 2,000 students, partnered with 100+ companies, and achieved an 85% placement success rate, empowering learners with industry-relevant skills, hands-on projects, and expert mentorship for career success. 🚀
                    </p>
                    <Link href="/contact-us" >
                        <button className="mt-4 bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition">
                            Explore Program
                        </button>
                    </Link>
                </div>
            </div>

            {/* Achievements Grid */}
            <div className="md:w-2/3 lg:w-2/3 pr-0 lg:pr-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {achievements.map((achievement, index) => (
                        <div key={index} className="p-6 border rounded-lg shadow-lg text-center border-r-4 border-blue-500">
                            <Image src={achievement.image} alt={achievement.title} width={80} height={80} className="mx-auto" />
                            <h3 className="text-xl font-semibold mt-4">{achievement.title}</h3>
                            <p className="text-gray-600 mt-2">{achievement.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
