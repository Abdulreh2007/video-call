"use client";

import Link from "next/link";
import { useState } from "react";
import { FaLock, FaUsers, FaRegSmile } from "react-icons/fa";
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";

export default function Home() {
  const [roomId, setRoomId] = useState("");

  return (
    <div className="w-full h-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-purple-900 to-gray-900 text-white">
        <div
          className="container mx-auto max-w-screen-lg px-6 py-32 flex flex-col h-screen justify-center items-center text-center"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Welcome to Your{" "}
            <span className="text-blue-400">Seamless Meetings</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl">
            Join a secure and smooth video meeting with just a click. Collaborate effortlessly,
            anywhere, anytime.
          </p>
          <div className="w-full max-w-md">
            <input
              type="text"
              placeholder="Enter your room ID"
              value={roomId}
              className="w-full px-4 py-3 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
              onChange={(e) => setRoomId(e.target.value)}
            />
            <Link href={`/room/${roomId}`}>
              <button
                disabled={!roomId}
                className={`w-full px-6 py-3 rounded-md text-lg font-semibold transition-all ${
                  roomId
                    ? "bg-gradient-to-r from-blue-500 to-indigo-500 hover:scale-105 text-white"
                    : "bg-gray-600 text-gray-400 cursor-not-allowed"
                }`}
              >
                Join Room
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-100 text-gray-900 py-16">
        <div className="container mx-auto max-w-screen-lg px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                Icon: FaLock,
                title: "Secure Meetings",
                description:
                  "Your privacy and data security are our top priorities, ensuring a safe meeting environment.",
                color: "text-blue-500",
              },
              {
                Icon: FaUsers,
                title: "Effortless Collaboration",
                description:
                  "Collaborate with your team in real-time using our high-performance tools.",
                color: "text-green-500",
              },
              {
                Icon: FaRegSmile,
                title: "Simple & Intuitive",
                description:
                  "Our platform is designed for simplicity, so you can focus on what matters most.",
                color: "text-purple-500",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all"
              >
                <feature.Icon className={`text-5xl mx-auto mb-4 ${feature.color}`} />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-16">
        <div className="container mx-auto max-w-screen-lg px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote:
                  "This platform has completely transformed how our team collaborates. Highly recommend!",
                name: "Sarah Johnson",
              },
              {
                quote:
                  "Joining meetings has never been easier. The interface is seamless and user-friendly!",
                name: "James Smith",
              },
            ].map((testimonial, index) => (
              <div key={index} className="p-6 bg-gray-700 rounded-lg shadow-lg">
                <p className="text-lg italic mb-4">"{testimonial.quote}"</p>
                <h3 className="text-lg font-bold">- {testimonial.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-500 text-white py-16">
        <div className="container mx-auto max-w-screen-lg px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Join?</h2>
          <p className="text-lg mb-8">
            Get started now and connect with your team in just a few clicks.
          </p>
          <Link href="/">
            <button className="px-8 py-3 bg-white text-blue-500 font-bold rounded-md hover:bg-gray-200 transition-all">
              Start Your Meeting
            </button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 py-8">
        <div className="container mx-auto max-w-screen-lg px-6 flex flex-col md:flex-row justify-between items-center">
         <Link href={'https://abdul-rehman-portfolio.vercel.app'}
         target="blank"
         >

          <p className="mb-4 md:mb-0 hover:text-blue-500 hover:underline ">&copy; 2024 Seamless Meetings. All Rights Reserved by Abdul Rehman</p>
         </Link>
          <div className="flex space-x-6">
            {[FiFacebook, FiTwitter, FiInstagram, FiLinkedin].map((Icon, index) => (
              <Link key={index} href="#">
                <Icon className="text-xl hover:text-white transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
