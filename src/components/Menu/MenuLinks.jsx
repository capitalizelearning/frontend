import ActiveLink from '@/components/ActiveLink'

function MenuLinks() {
    return (
        <nav className='px-5'>
            <ActiveLink to="/dashboard" label="Dashboard" />
            <ActiveLink to="#" label="Messages" />
            <ActiveLink to="#" label="News" />
            <ActiveLink to="/quiz" label="Quiz" />
        </nav>
    )
}

export default MenuLinks