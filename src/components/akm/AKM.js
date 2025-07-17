import Akm from "../../image/Akm.png"       
import Masullar from "../../image/Masullar.png"
import Masullar2 from "../../image/Masullar2.png"
import Kutubxona from "../../image/kutubxona ichi.png"
import Kitoblar from "../../image/kitoblar.png"
import Xonasi from "../../image/xonasi.png"
import Xonasi2 from "../../image/xonasi2.png"
import "../../css/akm.css"
export default function AKM() {
    return(
        <>
        <p className="organization_name">
            Tuproqqal’a tumani <br></br>  axborot kutubxona markazi haqida ma’lumot
        </p>
        <img src={Akm} className="akm" alt="akm"/>
        <p className="activity">
            O'zbekiston Respublikasi Prezidentining 2019 yil 7 iyundagi O'zbekiston Respublikasi aholisiga Axborot-<br/>Kutubxona xizmat ko'rsatishni yanada takomillashtirish to'g'risidagi РQ-4З54-sоп qarori ча Xorazm viloyati      <br/>hokimining 12 iyundagi 2019 yildan 428-Q son qarori, Tuproqqal'a tumani hokimining 202З yil 12 maydagi<br/> 25-12-2/8-q/23-sonli qaroriga asosan, Tuman Axborot-kutubxona mаrkаzi 2O2З-уil 15 avgustdan tashkil<br/> etilib, o'z faoliyatini boshlagan.
        </p>
        <div className="libray_life">
              <div className="library_column"> 
                <img src={Masullar} alt="masullar"/>
                <img src={Masullar2} alt="masullar2"/>
                </div> 
                <div className="library_column">
                <img src={Kutubxona} alt="kutubxona"/>
                <img src={Kitoblar} alt="kitoblar"/>
                </div>
        </div> 
        <p className="info_library">
            Markazda 4 ta bo’lim kitobxonlarga xizmat ko’rsatib kelmoqda.
        </p>
        <p className="library_section">
            1. Axborot-kommunikatsiya texnologiyalari va Raqamlashtirish xizmati
        </p>
        <p className="library_section">
            2. Obonement va foydalanuvchilarga xizmat ko’rsatish xizmati
        </p>
        <p className="library_section">
            3. Axborot-bibliografiya xizmati
        </p>
        <p className="library_section">
            4. Fondni to’ldirish, saqlash va ularga ishlov berish xizmati
        </p>
        <div className="line"></div>
        <div className="line_bottom"></div>
        <div className="library_about">
            <p className="about_library"> 
            Axborot-kutubxona markazning jami kitob fondi: 35327 ta
        </p>
        <p className="about_library">
            Elektron kitoblar: 25 000 ta
        </p>
        <p className="about_library">
            Elektron kitoblar: 25 000 ta
        </p>
        </div>
        <div className="room">
            <img src={Xonasi} alt="xonasi"/>
            <img src={Xonasi2} alt="xonasi2"/>
        </div>
        </>
    )
}