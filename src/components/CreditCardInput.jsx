import { useState } from "react";

const CreditCardInput = ({ value, onChange }) => {
    const [cardNumber, setCardNumber] = useState("");

    const handleChange = (e) => {
        let input = e.target.value.replace(/\s/g, ""); // Elimina los espacios en blanco
        input = input.replace(/[^0-9]/g, ""); // Elimina cualquier caracter que no sea un número
        let formattedInput = "";

        for (let i = 0; i < input.length; i++) {
            if (i > 0 && i % 4 === 0) {
                formattedInput += " "; // Agrega un espacio cada 4 caracteres
            }
            formattedInput += input[i];
        }

        if (formattedInput.length <= 19) {
            e.target.value = formattedInput;
        }
    };

    return (
        <input
            type="text"
            value={value}
            onChange={handleChange}
            maxLength={19} // Asegura que el input tenga espacio suficiente para el formato (16 caracteres + 3 espacios)
            className="outline-none text-base font-medium w-[140px]"
        />
    );
};

export default CreditCardInput;