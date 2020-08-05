import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://scontent.fqbx2-1.fna.fbcdn.net/v/t1.0-9/107811261_3244453408952893_100703356549089656_n.jpg?_nc_cat=107&_nc_sid=09cbfe&_nc_ohc=qA9y5XfiN3YAX9C9ZrQ&_nc_ht=scontent.fqbx2-1.fna&oh=8edb3267a8da11bedcd8c8d48ab71b52&oe=5F4EC29D" alt="Jessica Marques" />
                <div>
                    <strong>Jessica Marques</strong>
                    <span>História</span>
                </div>
            </header>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus, mi vel semper faucibus, eros risus pretium eros, in consequat dolor sem sit amet arcu. <br /><br />Morbi porta cursus lectus quis pellentesque. Praesent tincidunt, mi in tempus commodo, lorem neque imperdiet dui, dapibus congue risus nisi sit amet dolor.</p>
            <footer>
                <p>Preço/hora
                                <strong>R$ 20,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Chame no zapzap" />
                                Entrar em contato
                            </button>
            </footer>
        </article>
    );
}

export default TeacherItem;