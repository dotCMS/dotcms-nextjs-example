import PropTypes from 'prop-types';
import PageContext from '../../contexts/PageContext';
import useDotCMSApi from '../../hooks/useDotCMSApi';
import { getLanguages } from '../../config/dotcms';

import React, { useContext } from 'react';

const Options = ({ languages }) => {
    return languages.map((lang) => (
        <option key={lang.languageCode} value={lang.id}>
            {lang.language}
        </option>
    ));
};

Options.propTypes = {
    languages: PropTypes.arrayOf(
        PropTypes.shape({
            languageCode: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
            language: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
};

const LocaleDropdown = () => {
    const [loading, languages] = useDotCMSApi(getLanguages);
    const { language } = useContext(PageContext);

    return (
        <div className="form-wrap-select">
            <select
                className="form-input"
                value={language.current}
                onChange={({ target }) => {
                    language.set(target.value);
                }}
            >
                <Options languages={languages} />
            </select>
        </div>
    );
};

export default LocaleDropdown;
