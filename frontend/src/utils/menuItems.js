import { expenses, home, transaction, trend } from "./icons";

export const menuItems = [
    {
        id: 1,
        title: 'Dashboard',
        icon: home,
        link: '/Dashboard'
    },
    {
        id: 2,
        title: 'View Transactions',
        icon: transaction,
        link: '/Dashboard'
    },
    {
        id: 3,
        title: 'Incomes',
        icon: trend,
        link: '/Dashboard'
    },
    {
        id: 4,
        title: 'Expensess',
        icon: expenses,
        link: '/Dashboard'
    }
]