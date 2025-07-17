import tadbir from '../../image/tadbir.png'
import tadbir2 from '../../image/tadbir2.png'
import tadbir3 from '../../image/tadbir3.png'
import tadbir4 from '../../image/tadbir4.png'
import tadbir5 from '../../image/tadbir5.png'
import tadbir6 from '../../image/tadbir6.png'
import tadbir7 from '../../image/tadbir7.png'
import korgazma from '../../image/korgazma.png'
import '../../css/new.css'

export default function New(){

    const cardData = [
      {
        img: tadbir,
        text: `"Tuproqqal'a tumani Axborot kutubxona markazi hodimlari "Nilufar" oromgohida bo'lib "Kitob bilim bulog'i o'quvchining o'rtogi" mavzusida kitobli ko'rgazma tashkil qilishdi.`,
        date: '18.06.2025',
      },
      {
        img: korgazma,
        text: `"Tuproqqal'a tumani Axborot kutubxona markazi hodimlari "Nilufar" oromgohida bo'lib "Kitob bilim bulog'i o'quvchining o'rtogi" mavzusida kitobli ko'rgazma tashkil qilishdi.`,
        date: '18.06.2025',
      },
      {
        img: tadbir2,
        text: `"Tuproqqal'a tumani Axborot kutubxona markazi hodimlari "Nilufar" oromgohida bo'lib "Kitob bilim bulog'i o'quvchining o'rtogi" mavzusida kitobli ko'rgazma tashkil qilishdi.`,
        date: '18.06.2025',
      },
      {
        img: tadbir3,
        text: `"Tuproqqal'a tumani Axborot kutubxona markazi hodimlari "Nilufar" oromgohida bo'lib "Kitob bilim bulog'i o'quvchining o'rtogi" mavzusida kitobli ko'rgazma tashkil qilishdi.`,
        date: '19.06.2025',
      },
      {
        img: tadbir4,
        text: `Tuproqqal'a tumani Axborot kutubxona markazi hodimlari "Nilufar" oromgohida bo'lib "Kitob bilim bulog'i o'quvchining o'rtogi" mavzusida kitobli ko'rgazma tashkil qilishdi.`,
        date: '20.06.2025',
      },
      {
        img: tadbir5,
        text: `Tuproqqal'a tumani Axborot kutubxona markazi hodimlari "Nilufar" oromgohida bo'lib "Kitob bilim bulog'i o'quvchining o'rtogi" mavzusida kitobli ko'rgazma tashkil qilishdi.`,
        date: '20.06.2025',
      },
      {
        img: tadbir6,
        text: `Tuproqqal'a tumani Axborot kutubxona markazi hodimlari "Nilufar" oromgohida bo'lib "Kitob bilim bulog'i o'quvchining o'rtogi" mavzusida kitobli ko'rgazma tashkil qilishdi.`,
        date: '20.06.2025',
      },
      {
        img: tadbir7,
        text: `Tuproqqal'a tumani Axborot kutubxona markazi hodimlari "Nilufar" oromgohida bo'lib "Kitob bilim bulog'i o'quvchining o'rtogi" mavzusida kitobli ko'rgazma tashkil qilishdi.`,
        date: '20.06.2025',
      }
    ];
    return (
      <>
        <div className="new">
          {/* <p className="text-dark info">Yangiliklar</p> */}
           {/*shoti ozida scrol bovoti */}
          <div className="d-flex basic_card">
            <div className="d-flex car_two">
              {/* {cardData.map((item, index) => (
                <div className="card_one" key={index}>
                  <img src={item.img} className="card-img" alt="Tadbir rasmi" />
                 <p className="text-dark topic">{item.text}</p>
                  <p className=" text-dark date">{item.date}</p>
                </div>
              ))} */}
            </div>
          </div> 
        </div>
      </>
    )
  }
