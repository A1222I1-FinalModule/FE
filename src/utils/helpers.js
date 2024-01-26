import {slugify} from 'transliteration';

export const formatMoney = (number) => {
    return number.toLocaleString('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });
};

export const formatDate = (datetime) => {
    if (datetime) {
        const [year, month, day] = datetime.split('-');
        return `${day}-${month}-${year}`;
    }
    return '';
};

export const convertSlug = (str) => {
    const lowercaseString = str.toLowerCase();

    const slug = slugify(lowercaseString);

    return slug;
};
