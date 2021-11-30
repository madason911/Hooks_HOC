import React, { useRef } from "react";
import CollapseWrapper from "../common/collapse";

const UseRefExercise = () => {
    const inputEl = useRef(null);
    const inputDiv = useRef(null);

    const textAndPropsWithClickButton = () => {
        inputEl.current.style.width = 80 + "px";
        inputEl.current.style.height = 150 + "px";
        inputEl.current.textContent = "text";

        inputDiv.current.style.width = 80 + "px";
        inputDiv.current.style.height = 150 + "px";
    };
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содежимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <div
                ref={inputDiv}
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                style={{
                    height: 40,
                    width: 60,
                    color: "white"
                }}
            >
                <small ref={inputEl}>Блок</small>
            </div>
            <button
                onClick={textAndPropsWithClickButton}
                className="btn btn-secondary mt-3"
            >
                Кнопка
            </button>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
