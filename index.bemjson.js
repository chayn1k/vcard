module.exports = {
    block : 'page',
    title : 'Pavel Tchaikovsky — Senior Frontend Developer',
    head : [
        { elem : 'favicon', url: '/favicon.png' },
        { elem : 'css', url : 'index.css' },
        { block : 'jquery', elem : 'core' },
        { elem : 'js', url : 'index.js' }
    ],
    i18n: { langs: ['en', 'ru'], lang: 'en' },
    content: {
        block: 'b-card',
        mods: { lang: 'en' },
        content: [
            {
                block: 'b-card-layout',
                lang: 'en',
                info: {
                    name: 'Pavel Tchaikovsky',
                    position: 'Senior Software Engineer',
                    company: {
                        name: 'EPAM Systems',
                        country: 'Belarus',
                        locality: 'Minsk',
                        zip: '220141',
                        address: '1/1, Academician Kuprevich St.',
                        phone: '+375 (17) 389-01-00',
                        'phone-add': '23166',
                        site: 'www.epam.by'
                    },
                    person: {
                        email: 'Pavel_Chaikouski@epam.com',
                        cellular: '+375 (25) 907-05-15',
                        github: 'chayn1k'
                    }
                }
            },
            {
                block: 'b-card-layout',
                lang: 'ru',
                info: {
                    name: 'Павел Чайковский',
                    position: 'Старший инженер-программист',
                    company: {
                        name: 'EPAM Systems',
                        country: 'Беларусь',
                        locality: 'Минск',
                        zip: '220141',
                        address: 'ул. Академика Купревича, д. 1-1',
                        phone: '+375 (17) 389-01-00',
                        'phone-add': '23166',
                        //  fax: '+375 (17) 268-66-99',
                        site: 'www.epam.by'
                    },
                    person: {
                        email: 'Pavel_Chaikouski@epam.com',
                        cellular: '+375 (25) 907-05-15',
                        skype: 'pavel.tchaikovsky',
                        github: 'chayn1k'
                    }
                }
            }
        ]
    }
};
