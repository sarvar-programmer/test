import AllCourses from "./AllCourses";
import Header from "./Header";
import AcademyIntro from "./AcademyIntro";
import Footer from "./Footer";

export default function Home () {
   
    return(
        <div>
            <Header/>
            <AcademyIntro/>
            <AllCourses/>
            <Footer/>
        </div>
    )
}