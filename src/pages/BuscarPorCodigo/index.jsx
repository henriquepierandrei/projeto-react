import { useState } from 'react';
import './style.css';
import api from "../../services/api"; // Importa a instância do axios configurada

function BuscarPorCodigo() {
    const [code, setCode] = useState(''); // Estado para armazenar o código
    const [parked, setParked] = useState([]); // Inicializa como um array vazio
    const [showPasswordPrompt, setShowPasswordPrompt] = useState(false);
    const [showPopup, setShowPopup] = useState(false); // Estado para controlar a visibilidade do popup
    const [popupMessage, setPopupMessage] = useState(''); // Estado para armazenar a mensagem do popup

    async function getParking(event) {
        event.preventDefault(); // Previne o comportamento padrão do formulário

        try {
            // Fazendo a requisição GET com o parâmetro de código
            const response = await api.get(`admin/parking/find?code=${code}`);


            if (response.data.length === 0) {
                setPopupMessage(`Não existem veículos para o código: ${code}`);
                setShowPopup(true);
                setTimeout(() => setShowPopup(false), 7000); // Esconde o popup após 7 segundos
            } else {
                setParked(response.data); // Atualiza o estado com os dados retornados
                console.log("Find");
                setShowPopup(false); // Garante que o popup não será exibido se houver dados
            }
        } catch (error) {
            console.error("Erro ao obter dados:", error);
            setPopupMessage(`Código: ${code} inválido!`);
            setShowPopup(true);
            setTimeout(() => setShowPopup(false), 7000); // Esconde o popup após 7 segundos
        }
    }



    return (
        
        <div className='body-name'>
            <br /><br />
            <div className="container">
                <div className="heading">Consultar Veículo por Código</div>
                <form className="form" onSubmit={getParking} method="GET">
                    <div className="input-field">
                        <input
                            required
                            autoComplete="off"
                            type="text"
                            name="code"
                            id="code"
                            placeholder='Código'
                            value={code}
                            onChange={(e) => setCode(e.target.value)} // Atualiza o estado do código
                        />
                    </div>
                    <div className="btn-container">
                        <button type="submit" className="btn">Consult</button> {/* Botão para consultar o veículo */}
                    </div>
                </form>

                {showPopup && (
                    <div className="popup">
                        <div className="icon-container">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                strokeWidth="0"
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
                            <p className="sub-text"><strong>{popupMessage}</strong></p>
                        </div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 15 15"
                            strokeWidth="0"
                            fill="none"
                            stroke="currentColor"
                            className="cross-icon"
                            onClick={() => setShowPopup(false)}
                        >
                            <path
                                fill="currentColor"
                                d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                                clipRule="evenodd"
                                fillRule="evenodd"
                            ></path>
                        </svg>



                    </div>
                )}



            </div>

            <div className='infos'>

                {parked && (
                    <div className='parked-item'>
            
                        <div className='query'>
                            <p><i className="fas fa-location-dot"></i><strong className='query-label'>Vaga:</strong> {parked.place}</p>
                        </div>
                        <div className='query'>
                            <p><i className="fas fa-clock"></i><strong className='query-label'>Data Início:</strong> {parked.data1}</p>
                        </div>
                        <div className='query'>
                            <p><i className="fas fa-clock"></i><strong className='query-label'>Data Final:</strong> {parked.data2}</p>
                        </div>
                        <div className='car-info'>
                            <p><i className="fas fa-car"></i> <strong>Placa:</strong> {parked.plate}</p>
                            <p><i className="fas fa-palette"></i> <strong>Cor:</strong> {parked.color}</p>
                            <p><i className="fas fa-car-side"></i> <strong>Marca:</strong> {parked.mark}</p>
                            <p><i className="fas fa-car-alt"></i> <strong>Modelo:</strong> {parked.model}</p>
                        </div>
                    </div>
                )}
            </div>
            <br /> <hr /><br />
           
        </div>
        
    );
}

export default BuscarPorCodigo;
