import React from 'react';
import Iframe from 'react-iframe';
import '../Css/footer.css';

const Footer = () => {
    return(
        <footer className="row m-0 bg-dark text-white align-items-center text-center">
            <div className="col-12 col-md-6 my-4">
                <h2 className="text-white">Asurias Food & Drink</h2>
                <p>Nuestas Redes Sociales</p>
                <div id="Redes" className="my-4">
                    <i className="fab mx-3 fa-facebook"></i>
                    <i className="fab mx-3 fa-twitter-square"></i>
                    <i className="fab mx-3 fa-whatsapp"></i>
                    <i class="fab mx-3 fa-github"></i>
                </div>
                <p><i class="fas fa-map-marker-alt"></i> Location: Gral. Paz 576 <br></br>S. M. de Tucumán <br></br> CP: 4000 </p>
            </div>
            <div className="col-12 col-md-6 p-3 my-2">
            <Iframe className="mw-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.102370777529!2d-65.2093904854509!3d-26.836696096500635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d3ad7f30f1d%3A0xf8606cd659b8e3e4!2sRollingCode%20School!5e0!3m2!1ses-419!2sar!4v1592508273252!5m2!1ses-419!2sar" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></Iframe>
            </div>
        </footer>
    )
}

export default Footer;