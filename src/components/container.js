import React from 'react'
import {IntlProvider} from 'react-intl';
import JobsList from './jobslist'
import messages from "../locales/messages"
import {LOCALES} from "../locales/locales"

const Container = () => {
    const language = () => {
        let lang = navigator.language.startsWith('es')? 'es-CO': 'en-US'
        return lang
    }

    return (
        <div>
            <IntlProvider locale={language()} messages= {messages[language()]}>
                <JobsList/>
            </IntlProvider>
        </div>
    )
}

export default Container
