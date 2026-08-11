import { SummmaryItem } from '../../../../../../libs/shared/ui/src/lib/models/summary-item.model';

export const SUMMARY_STATISTICS: SummmaryItem[] = [
    {
        id: 1,
        title: '120',
        subTitle: 'Total Users',
        description: null,
        icon: 'contacts_product',
        iconBg: '#0B36B2',
        navigateTo: '',
        bgColor: '',
        isRounded: true
    },
    {
        id: 2,
        title: '34',
        subTitle: 'Active Projects',
        description: null,
        icon: 'stacked_line_chart',
        iconBg: '#2A9B44',
        navigateTo: '',
        bgColor: '',
        isRounded: true
    },
    {
        id: 3,
        title: '12',
        subTitle: 'Tasks Pending',
        description: null,
        icon: 'local_mall',
        iconBg: '#F17623',
        navigateTo: '',
        bgColor: '',
        isRounded: true
    },
    {
        id: 4,
        title: '5',
        subTitle: 'Evenets Today',
        description: null,
        icon: 'newspaper',
        iconBg: '#5347D3',
        navigateTo: '',
        bgColor: '',
        isRounded: true
    }
];

export const REMOTE_PROJECTS: SummmaryItem[] = [
    {
        id: 1,
        title: 'App One',
        subTitle: '(Table)',
        description: 'View and manage records in a data table.',
        icon: 'subtitles_gear',
        iconBg: '#0B36B2',
        isRounded: false,
        bgColor: '#F3F6FE',
        navigateTo: '/app-one'
    },
    {
        id: 2,
        title: 'App Two',
        subTitle: '(Data)',
        description: 'View important information and details.',
        icon: 'laptop_windows',
        iconBg: '#2A9B44',
        isRounded: false,
        bgColor: '#F5FCF7',
        navigateTo: '/app-two'
    }
];