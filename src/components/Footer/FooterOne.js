import React from 'react';
import Form from "./Form";
import './footer.scss'

function FooterOne() {
    return(
        <div className="py-5 footer__one">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2>Witaj rodzicu!</h2>
                        <p>Cieszymy się bardzo, że wraz ze swoją pociechą wybrałeś naszą platformę do nauki hiszpańskiego.
                        Poniżej znajdziesz kilka wskazówek dotyczących użytkowania naszej platformy. Jeżeli masz uwagi bądź pomysły dotyczące
                        rozwoju platformy językowej możesz nam o nich napisać korzystając z formularza kontaktowego. Poprzez formularz możesz również
                        zapisać się do naszego newslettera, dzięki czemu będziesz na bieżąco z nowościami.</p>

                    </div>
                    <div className="col-md-6">
                        <Form />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterOne