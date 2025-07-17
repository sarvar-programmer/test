import Director from "../../image/direktor.png"
import Aktrahbari from "../../image/aktrahbari.png"
import "../../css/rahbariat.css"
import { Row, Col } from "react-bootstrap"
export default function Rahbariat() {
    const employees = [
  {
    name: "Bakiyev Ikromboy Ro’ziboyevich",
    title: "Direktor",
    image: Director, 
    infoList: [
      { label: "Tug‘ilgan joyi:", value: "14.05.1968 yil Xorazm viloyati Hazorasp tumani" },
      { label: "Telefon:", value: "+998 97 510 14 05" },
      { label: "Telegram:", value: "+998 97 510 14 05" },
      { label: "E-mail:", value: "ikromboy@mail.ru" },
    ],
    workList: [
      "1990-1992-yillar Toshkent Davlat madaniyat instuti",
      "1990-1992-yillar Toshkent Davlat madaniyat instuti",
      "1990-1992-yillar Toshkent Davlat madaniyat instuti",
      "1990-1992-yillar Toshkent Davlat madaniyat instuti",
      "1990-1992-yillar Toshkent Davlat madaniyat instuti",
      "1990-1992-yillar Toshkent Davlat madaniyat instuti"
    ],
  },
  {
    name: "Xajiqurbonov Azizbek G’ulomjonvich",
    title: "Akt rahbari",
    image: Aktrahbari,
    infoList: [
      { label: "Tug‘ilgan joyi:", value: "14.01.2000 yil Xorazm viloyati Hazorasp tumani" },
      { label: "Telefon:", value: "+998 94 317 67 78" },
      { label: "Telegram:", value: "+998 94 317 67 78" },
      { label: "E-mail:", value: "azizbekx@mail.ru" },
    ],
    workList: [
      "2024-202-yillar Toshkent Davlat madaniyat instuti",
      "1990-1992-yillar Toshkent Davlat madaniyat instuti",
      "1990-1992-yillar Toshkent Davlat madaniyat instuti",
      "1990-1992-yillar Toshkent Davlat madaniyat instuti",
      "1990-1992-yillar Toshkent Davlat madaniyat instuti",
      "1990-1992-yillar Toshkent Davlat madaniyat instuti"
    ],
  },
  {
    name: "Xajiqurbonov Azizbek G’ulomjonvich",
    title: "Bosh buhgalter",
    image: Aktrahbari,
    infoList: [
      { label: "Tug‘ilgan joyi:", value: "14.01.2000 yil Xorazm viloyati Hazorasp tumani" },
      { label: "Relefon:", value: "+998 94 317 67 78" },
      { label: "Telegram:", value: "+998 94 317 67 78" },
      { label: "E-mail:", value: "azizbekx@mail.ru" },
    ],
    workList: [
      "2024-202-yillar Toshkent Davlat madaniyat instuti",
      "1990-1992-yillar Toshkent Davlat madaniyat instuti",
      "1990-1992-yillar Toshkent Davlat madaniyat instuti",
      "1990-1992-yillar Toshkent Davlat madaniyat instuti",
      "1990-1992-yillar Toshkent Davlat madaniyat instuti",
      "1990-1992-yillar Toshkent Davlat madaniyat instuti"
    ],
  },
];

    return (
        <>
            <p className="main_title">Rahbariat</p>
           {employees.map((person, idx) => (
      <div className="managment" key={idx}>
        <Row className="about_employe">
          <Col md={3}>
            <img src={person.image} alt={person.name} className="images" />
          </Col>
          <Col md={8}>
            <h3 className="d-flex employe">
              {person.title}:
              <p>{person.name}</p>
            </h3>
            {person.infoList.map((item, index) => (
              <div key={index} className="d-flex reference_part">
                <strong className="about_info">{item.label}</strong>
                <p className="about">{item.value}</p>
              </div>
            ))}
          </Col>
        </Row>

        <h3 className="experience">Mehnat faoliyati</h3>
        <div className="expirence_date">
          {person.workList.map((item, index) => (
            <div key={index} className="workig_time">
              <p className="place_work">{item}</p>
            </div>
          ))}
        </div>
        {idx !== employees.length - 1 && <div className="line"></div>}
      </div>
    ))}
        </>
    )
}