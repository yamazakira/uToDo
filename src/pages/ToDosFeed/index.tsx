import { useEffect, useState } from "react";
import { api } from "../../api/axiosInstance"
import * as S from "./style";

export const TodosFeed = () => {
    const [todos, setTodos] = useState([]);

    const getTodos = async () => {
        try {
            const response = await api.get("todos");
            const data = response.data;
            setTodos(data);
            console.log(data)
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getTodos();
    }, []);

    return (
        <>
            <S.ProjectTitle>uToDo</S.ProjectTitle>
            <S.Wrapper>
                {todos.map((todo: any) => (
                        <S.TodoItemWrapper>
                            <S.TodoBody>
                                <p>{todo.body}</p>
                            </S.TodoBody>
                            <S.EditButton>
                                <button>Edit</button>
                            </S.EditButton>

                            <S.DelButton>
                                <button>Del</button>
                            </S.DelButton>
                        </S.TodoItemWrapper>
                ))}
            </S.Wrapper>
        </>
    );
}