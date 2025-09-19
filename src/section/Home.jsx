import PillNav from "../PillNav"
import Profile from "../assets/Profile.jpg"
import ProfileCard from "../components/ProfileCard"



export default function Home(){

    return(
        <section id="Home" className="bg-base-200 min-h-screen">
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse lg:gap-16">
                    <ProfileCard
                    name="Dan Jaspher Delvo"
                    title="Web Developer"
                    handle="Dan-Delvo"
                    status="Online"
                    contactText="Contact Me"
                    avatarUrl={Profile}
                    showUserInfo={true}
                    enableTilt={true}
                    enableMobileTilt={false}
                    onContactClick={() => console.log('Contact clicked')}
                    />
                    <div>
                        <h1 className="text-5xl font-bold">Dan Jaspher Delvo</h1>
                        <p className="py-6">
                        Web Developer passionate about creating clean and efficient
                        solutions. Always learning, always building.
                        </p>
                        <button className="btn btn-primary">Contact Me</button>
                    </div>
                </div>
            </div>
        </section>
    )
}