import house from '../icons/house-door-fill.svg'
import house_light from '../icons/house-door-fill-light.svg'
import book from '../icons/book-fill.svg'
import book_light from '../icons/book-fill-light.svg'
import loan from '../icons/basket-fill.svg'
import loan_light from '../icons/basket-fill-light.svg'
import help from '../icons/question.svg'
import help_light from '../icons/question-light.svg'

export const SidebarData = [

{
        title: 'Home',
        path: '/home',
        icon: [house,house_light],
        cName: 'nav-text'
    },
    {
        title: 'Libros',
        path: '/books',
        icon: [book,book_light],
        cName: 'nav-text'
    },
    {
        title: 'Préstamos',
        path: '/loans',
        icon: [loan,loan_light],
        cName: 'nav-text'
    },
    {
        title: 'Ayuda',
        path: '/help',
        icon: [help,help_light],
        cName: 'nav-text'
    }
];