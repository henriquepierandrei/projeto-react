import { useState } from 'react';
import './style.css';

import api from "../../services/api"; // Importa a instância do axios configurada

function Home() {
    const [date, setDate] = useState(''); // Estado para armazenar a data
    const [parkeds, setParkeds] = useState([]); // Estado para armazenar os veículos estacionados
    const [showPopup, setShowPopup] = useState(false); // Estado para controlar a visibilidade do popup
    const [popupMessage, setPopupMessage] = useState(''); // Estado para armazenar a mensagem do popup






    async function getParking(event) {
        event.preventDefault(); // Previne o comportamento padrão do formulário

        try {
            // Fazendo a requisição GET com o parâmetro de data
            const response = await api.get(`admin/parkeds?date=${date}`);

            if (response.data.length === 0) {
                setPopupMessage(`Não existem veículos para a data ${date}`);
                setShowPopup(true);
                setTimeout(() => setShowPopup(false), 7000); // Esconde o popup após 5 segundos
            } else {
                setParkeds(response.data); // Atualiza o estado com os dados retornados
            }
        } catch (error) {
            console.error("Erro ao obter parkeds:", error);
        }
    }

    return (

        <div className='body-name'>
            <div className="container">
                <div className="heading">Consult Vehicle Parking</div>
                <form className="form" onSubmit={getParking} method="GET">
                    <div className="input-field">
                        <input
                            required
                            autoComplete="off"
                            type="date"
                            name="date"
                            id="date"
                            placeholder='Data'
                            value={date}
                            onChange={(e) => setDate(e.target.value)} // Atualiza o estado da data
                        />
                    </div>
                    <div className="btn-container">
                        <button type="submit" className="btn">Consult</button> {/* Botão para consultar os veículos */}
                    </div>
                </form>

                {showPopup && (
                    <div className="popup">


                        <div className="icon-container">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                stroke-width="0"
                                fill="currentColor"
                                stroke="currentColor"
                                className="icon"
                            >
                                <path
                                    d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"
                                ></path>
                            </svg>
                        </div>
                        <div className="message-text-container">
                            <p className="message-text">Error</p>
                            <p className="sub-text">Não existe nessa data <strong>{date}</strong></p>
                        </div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 15 15"
                            stroke-width="0"
                            fill="none"
                            stroke="currentColor"
                            className="cross-icon"
                            onClick={() => setShowPopup(false)}
                        >
                            <path
                                fill="currentColor"
                                d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                                clip-rule="evenodd"
                                fill-rule="evenodd"
                            ></path>
                        </svg>
                    </div>
                )}

            </div>

            <div className='infos'>
                {parkeds.length > 0 && (
                    <div className="parked-list">
                        {parkeds.map((parked, index) => (
                            <div key={index} className='parked-item'>
                                <div className='query'>
                                    <p><strong className='query-label'>Vaga:</strong> {parked.place}</p>
                                </div>
                                <div className='query'>
                                    <p><strong className='query-label'>Data Início:</strong> {parked.dateTimeArrival}</p>
                                </div>
                                <div className='query'>
                                    <p><strong className='query-label'>Data Final:</strong> {parked.dateTimeExit}</p>
                                </div>
                                <div className='car-info'>
                                    <p><strong>Placa:</strong> {parked.car.plate}</p>
                                    <p><strong>Cor:</strong> {parked.car.color}</p>
                                    <p><strong>Marca:</strong> {parked.car.carMark}</p>
                                    <p><strong>Modelo:</strong> {parked.car.carModel}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>




        </div>
    );
}

export default Home;
