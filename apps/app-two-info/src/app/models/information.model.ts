import { SummmaryItem } from "../../../../../libs/shared/ui/src/lib/models/summary-item.model";

export const RIGHT_CARDS: SummmaryItem[] = [
    {
        id: 1,
        title: 'About Us',
        subTitle: '',
        description: 'Acme Corporation is a leading provider of innovative solutions to help businesses grow and succeed in the digital world. We are committed to delivering high quality products and excellent customer service.',
        icon: '',
        iconBg: '',
        isRounded: false,
        bgColor: '#F3F6FE',
        navigateTo: ''
    },
    {
        id: 2,
        title: 'Our Mission',
        subTitle: '',
        description: 'To empower businesses with technology and drive positive change.',
        icon: '',
        iconBg: '',
        isRounded: false,
        bgColor: '#F5FCF7',
        navigateTo: ''
    }
];

export const COMPANY_INFO: { title: string; answer: string; }[] = [
    { title: 'Company Name', answer: 'Acme Corporation' },
    { title: 'Industry', answer: 'Technology' },
    { title: 'Headquarters', answer: 'New York, USA' },
    { title: 'Founded', answer: '2010' },
    { title: 'Employees', answer: '250+' },
    { title: 'Website', answer: 'www.acmecorp.com' }
]