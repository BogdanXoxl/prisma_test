import {Book} from "@prisma/client";
import axios from "axios";

export const createBook = (newBook: Book) => {
    return axios.post(`${process.env.URL??''}/api/books`, newBook);
}

export const deleteBook = (id: string) => {
    return axios.delete(`${process.env.URL??''}/api/books`, {
        params: {id}
    });
}

export const updateBook = (book: Book) => {
    return axios.put(`${process.env.URL??''}/api/books`, book);
}

export const getBooks = async ():Promise<Book[]> => {
    const d = await axios.get(`${process.env.URL??''}/api/books`);
    return d.data;
}

export const getBookDetails = async (id: string):Promise<Book> => {
    const d = await axios.get(`${process.env.URL??''}/api/books`, {
        params: {id}
    });
    return d.data;
}
