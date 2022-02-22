import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import {getBookDetails, getBooks} from "../lib/rest";
import {Book} from "@prisma/client";
import {Col, Descriptions, Row} from "antd";

interface Props{
    book: Book;
}

export const getStaticPaths: GetStaticPaths = async () => {
    const books = await getBooks();
    const paths = books.map((b) => ({
        params: { id: b.id },
    }))
    return {
        paths,
        fallback: true
    };
}

export const getStaticProps:GetStaticProps<Props> = async ({params}) => {
    const book = await getBookDetails(params?.id as string);
    return {
        props: {book},
        notFound: !book
    }
}

const Detail:NextPage<Props> = ({book}) => {
    return (
        <Row>
            <Col span={14} offset={5}>
                <Descriptions title="Book Info" bordered layout="vertical">
                    <Descriptions.Item label="ID">{book.id}</Descriptions.Item>
                    <Descriptions.Item label="Email">{book.email}</Descriptions.Item>
                    <Descriptions.Item label="Date of creation">{book.date_of_creation}</Descriptions.Item>
                    <Descriptions.Item label="Open Key">{book.okey}</Descriptions.Item>
                    <Descriptions.Item label="Telephone">{book.tel}</Descriptions.Item>
                    <Descriptions.Item label="URL">{book.url}</Descriptions.Item>
                    <Descriptions.Item label="Age">{book.age}</Descriptions.Item>
                    <Descriptions.Item label="Color">{book.color}</Descriptions.Item>
                    <Descriptions.Item label="City">{book.city}</Descriptions.Item>
                    <Descriptions.Item label="Author">{book.author}</Descriptions.Item>
                    <Descriptions.Item label="Number of Chapters">{book.number_of_chapters}</Descriptions.Item>
                    <Descriptions.Item label="Number of Pages">{book.number_of_pages}</Descriptions.Item>
                    <Descriptions.Item label="Number of published books">{book.number_of_published_books}</Descriptions.Item>
                </Descriptions>
            </Col>
        </Row>

    );
};

export default Detail;
