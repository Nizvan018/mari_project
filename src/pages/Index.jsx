import Navbar from "../components/Navbar";
import Header from "../components/index/Header";
import Treatments from "../components/index/Treatments";
import Testimony from "../components/index/Testimony";
import Donation from "../components/index/Donation";

export default function Index() {
    return (
        <div className="flex flex-col items-center">
            <Navbar />

            <main className="flex flex-col items-center gap-32 max-w-5xl p-12">
                <Header />

                <Treatments />

                <Testimony />

                <Donation />
            </main>
        </div>
    )
}