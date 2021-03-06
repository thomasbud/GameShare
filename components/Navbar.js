import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Navbar = () => {
    return (
        <div className={styles.landing}>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat" />
        <nav className="bg-gray-100">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between">

                    <div className="flex items-center space-x-5">
                        {/* logo */}
                        <div>
                            <Link href="/"><a className="px-2 py-2 text-purple-600 font-bold text-2xl">GameShare</a></Link>
                        </div>

                        {/* primary nav */}
                        <div className="flex items-center space-x-1 text-gray-700">
                            <Link href="/"><a className="px-3 py-5">Home</a></Link>
                            <Link href="/dashboard"><a className="px-3 py-5">Dashboard</a></Link>
                            <Link href="/listings"><a className="px-3 py-5">Listings</a></Link>
                            <Link href="/support"><a className="px-3 py-5">Support</a></Link>
                        </div>
                    </div>

                    {/* secondary nav */}
                    <div className="flex justify-between space-x-1">
                        <Link href="/login"><a className="px-3 py-5">Login/Sign Up</a></Link>
                    </div>

                </div>
            </div>
        </nav>
        </div>
    );
}

export default Navbar;