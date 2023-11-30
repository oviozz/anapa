
import React from 'react';
import { FaGithub } from 'react-icons/fa';

const About = () => {
    return (
        <div className="container mx-auto mt-10 px-6 lg:px-10 animate-fade-down">
            <h1 className="text-3xl font-bold mb-6 text-white bg-black p-5">About Anapa</h1>

            <div className="flex flex-col lg:flex-row items-center lg:items-start">
                <img
                    src="https://prazwal.vercel.app/profilePic.jpg"
                    alt="Prajwal Sharma"
                    className="w-16 h-16 rounded-full mb-4 lg:mb-0 lg:mr-4"
                />
                <p className="text-lg lg:w-2/3">
                    Hi there! I'm Prajwal Sharma, the creator of Anapa — your go-to destination for stylish and trendy clothing. I have designed and developed this site using Tailwind CSS and React.
                </p>
            </div>

            <div className="mt-8">
                <p className="text-lg">
                    You can find my work on GitHub, Feel free to explore my repositories and connect with me:
                </p>

                <a
                    href="https://github.com/oviozz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline mt-2 inline-flex items-center"
                >
                    <FaGithub className="mr-2" />
                    GitHub: @oviozz
                </a>
            </div>

        </div>
    );
};

export default About;
