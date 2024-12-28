import type { Metadata } from "next";


export const metadata: Metadata = {
    title: "Home",
};


export default function Home() {
    return (
        <main className="px-5">
            <h1 className="text-3xl underline">Hello, World!</h1>
        </main>
    );
};
