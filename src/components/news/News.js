import Sayohat1 from "../../image/sayohat1.png"
import Sayohat2 from "../../image/sayohat2.png"
import "../../css/news.css"

export default function News() {
    return(
        <>
          <p className="news">
            Yangiliklar
          </p>
          <p className="library_trip">
            “Kitob olamiga sayohat” nomi ostida kutubxonaga sayohat tashkil<br/> etildi.
          </p>
          <div className="trip_img">
            <img src={Sayohat1} className="img_trip" alt="sayohat1"/>
            <img src={Sayohat2} className="img_trip" alt="sayohat2"/>
          </div>
          <p className="travel">
            Respublika Maʼnaviyat va maʼrifat markazi Tuproqqalʼa tumani bo‘linmasi, tuman <br/>Axborot kutubxona markazi va “Nilufar” oromgohi bilan hamkorligida “Kitob<br/> olamiga sayohat” nomi ostida kutubxonaga sayohat tashkil etildi. Kutubxona <br/>mutolaa zavqi va maskanimizda hozir bo‘lishdan maroq olishni istagan har bir<br/> kishi uchun ochiqdir. Xalqimiz azaldan ilm-maʼrifatga intilgan,  kitob o‘qishga <br/>qattiq muhabbat qo‘ygan. Kutubxonamizga uyushtirilgan sayohatdan asosiy <br/>maqsad ham ana shu anʼanalarni farzandlarimizga yetkazish hamda xodimlar<br/> orasida kitobxonlikni yana-da oshirish,  sohaga oid yangidan yangi asarlar bilan<br/> tanishishlariga xizmat qiladi.  
          </p>
          <p className="info_date">
            25.06.2025
          </p>
        </>
    )
}