import { useState } from 'react';
import { Form, InputGroup, FormControl, Row, Col, Button } from 'react-bootstrap';
import { FaSearch, FaHeart, FaRegHeart } from "react-icons/fa";
import Kitob1 from '../../image/kitob1.png'
import Kitob2 from '../../image/kitob2.png'
import Kitob3 from '../../image/kitob3.png'
import '../../css/books.css'
export default function Books() {

    const [likedItems, setLikedItems] = useState(Array(12).fill(false));

    const toggleLike = (index) => {
        const updatedLikes = [...likedItems];
        updatedLikes[index] = !updatedLikes[index];
        setLikedItems(updatedLikes);
    };
    const books = [
        {
            id: 1,
            title: "Ernest Jeminguey, To’qchilik va yo’qchilik",
            format: "PDF",
            pages: 123,
            image: Kitob1
        },
        {
            id: 2,
            title: "Sun Zi Urush san’ati",
            format: "PDF",
            pages: 412,
            image: Kitob2
        },
        {
            id: 3,
            title: "Otabek Mahkamov Yuksaklik sari tasodif bo’l...",
            format: "PDF",
            pages: 320,
            image: Kitob3
        },
        {
            id: 4,
            title: "Ernest Jeminguey, To’qchilik va yo’qchilik",
            format: "PDF",
            pages: 190,
            image: Kitob1
        },
         {
            id: 5,
            title: "Ernest Jeminguey, To’qchilik va yo’qchilik",
            format: "PDF",
            pages: 123,
            image: Kitob1
        },
        {
            id: 6,
            title: "Ernest Jeminguey, To’qchilik va yo’qchilik",
            format: "PDF",
            pages: 412,
            image: Kitob1
        },
        {
            id: 7,
            title: "Ernest Jeminguey, To’qchilik va yo’qchilik",
            format: "PDF",
            pages: 320,
            image: Kitob1
        },
        {
            id: 8,
            title: "Ernest Jeminguey, To’qchilik va yo’qchilik",
            format: "PDF",
            pages: 190,
            image: Kitob1
        },
         {
            id: 9,
            title: "Ernest Jeminguey, To’qchilik va yo’qchilik",
            format: "PDF",
            pages: 123,
            image: Kitob1
        },
        {
            id: 10,
            title: "Ernest Jeminguey, To’qchilik va yo’qchilik",
            format: "PDF",
            pages: 412,
            image: Kitob1
        },
        {
            id: 11,
            title: "Ernest Jeminguey, To’qchilik va yo’qchilik",
            format: "PDF",
            pages: 320,
            image: Kitob1
        },
        {
            id: 12,
            title: "Ernest Jeminguey, To’qchilik va yo’qchilik",
            format: "PDF",
            pages: 190,
            image: Kitob1
        },
    ];
    return (
        <>
            <p className="text-center text-dark books_section">Kitoblar</p>
            <Row className="d-flex custom_gap">
                        <InputGroup className='search'>
                        <FormControl placeholder="Qidirish"/>
                        <InputGroup.Text>
                            <FaSearch />
                        </InputGroup.Text>
                    </InputGroup>
               
                    <Form.Select className='book_genre'>
                        <option value="" disabled>Saralash</option>
                        <option value="yangi">Baddiy adabiyotlar</option>
                        <option value="eski">Rus adabiyotlar</option>
                        <option value="eski">O’zbek adabiyotlari</option>
                        <option value="eski">Prezident asarlari</option>
                        <option value="eski">O’zbek adabiyotlari</option>
                        <option value="eski">Hikoyalar</option>
                    </Form.Select>
                
                
                    <Form.Select className='language'>
                        <option value="" disabled>Til</option>
                        <option value="uz">O'zbekcha</option>
                        <option value="ru">Ruscha</option>
                        <option value="en">Inglizcha</option>
                    </Form.Select>
              
            </Row>
            <Row className='library'>
                {books.map((book, index) => (
                    <Col key={book.id} className='p-0 cards'>
                        <div className="books">
                            <div className="image-wrapper">
                                <img src={book.image} className="image" 
                                     alt="Kitob rasmi"/>
                                <Button className="like" variant="light" onClick={() => toggleLike(index)}>
                                    {likedItems[index] ? <FaHeart color="red" /> : <FaRegHeart />}
                                </Button>
                            </div>
                            <div className='about_book'>
                                <p className='name_book'>{book.title}</p>
                                <p className='d-flex format'>Formati: <p>{book.format}</p></p>
                                <p className='d-flex page_number'>Kitob betlari soni: <p>{book.pages}</p></p>
                                <Button className='skachat'>Yuklab olish</Button>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
            <div className='pagination'>

            </div>
        </>
    )
}