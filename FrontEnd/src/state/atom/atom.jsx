import { model } from "mongoose";
import recoil, { atom, selector } from "recoil"
const date = new Date;
export const dateAtom = recoil.atom({
    key: 'todoAtom',
    default: date.toDateString(),
})

export const titleAtom = recoil.atom({
    key: "titleAtom",
    default: ''
})
export const desAtom = recoil.atom({
    key: "desAtom",
    default: ''
})

export const todoList = atom({
    key: "allTodoAtom",
    default: selector({
        key: "fetchalltodo",
        get: async () => {
            const token = localStorage.getItem("Bearer");
            const response = await fetch("https://full-stack-todo-c3cg.vercel.app/todo/listtodo", {
                method: 'GET',
                withCredentials: true,
                crossorigin: true,

                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    authorization: `Bearer ${token}`
                },
            });
            const data = response.json();

            return data;
        }
    })
})

export const completeTodoList = atom({
    key: "allcompleAtom",
    default: selector({
        key: "fetchallcomlettodo",
        get: async () => {
            const token = localStorage.getItem("Bearer");
            const response = await fetch("https://full-stack-todo-c3cg.vercel.app/todo/completetodo", {
                method: 'GET',
                withCredentials: true,
                crossorigin: true,

                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    authorization: `Bearer ${token}`
                },
            });
            const data = response.json();

            return data;
        }
    })
})
