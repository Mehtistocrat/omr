import React from "react";
import image from "../desert.jpg";

export default function Home() {
    return (
        <main>
            <img
                src={image}
                className="absolute object-cover w-full h-full"
            />
            <section 
                className="relative flex justify-center min-h-screen lg:">
                    <h1 className="home-name">Hello world !</h1>
            </section>
        </main>
    )
}