/* eslint-disable react/prop-types */
import MenuLinks from "@/components/Menu/MenuLinks";
import { useAuth } from "@/hooks/useAuth";
import { useTheme } from "@/hooks/useTheme";

const Layout = ({ children }) => {
    const { user } = useAuth();
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="relative h-screen md:flex md:overflow-hidden">
            {/* mobile menu bar */}
            <div className="bg-gray-800 text-gray-100 flex justify-between md:hidden">
                {/* logo */}
                <a href="#" className="block p-4 text-white font-bold">
                    <svg
                        width={120}
                        height={65}
                        viewBox="0 0 192 65"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M62.424 45.432C60.936 45.432 59.7 45.18 58.716 44.676C57.732 44.172 57 43.5 56.52 42.66C56.04 41.82 55.8 40.908 55.8 39.924C55.8 38.1 56.496 36.696 57.888 35.712C59.28 34.728 61.176 34.236 63.576 34.236H68.4V34.02C68.4 32.46 67.992 31.284 67.176 30.492C66.36 29.676 65.268 29.268 63.9 29.268C62.724 29.268 61.704 29.568 60.84 30.168C60 30.744 59.472 31.596 59.256 32.724H56.16C56.28 31.428 56.712 30.336 57.456 29.448C58.224 28.56 59.172 27.888 60.3 27.432C61.428 26.952 62.628 26.712 63.9 26.712C66.396 26.712 68.268 27.384 69.516 28.728C70.788 30.048 71.424 31.812 71.424 34.02V45H68.724L68.544 41.796C68.04 42.804 67.296 43.668 66.312 44.388C65.352 45.084 64.056 45.432 62.424 45.432ZM62.892 42.876C64.044 42.876 65.028 42.576 65.844 41.976C66.684 41.376 67.32 40.596 67.752 39.636C68.184 38.676 68.4 37.668 68.4 36.612V36.576H63.828C62.052 36.576 60.792 36.888 60.048 37.512C59.328 38.112 58.968 38.868 58.968 39.78C58.968 40.716 59.304 41.472 59.976 42.048C60.672 42.6 61.644 42.876 62.892 42.876ZM75.9606 52.92V27.144H78.6966L78.9846 30.096C79.5606 29.232 80.3766 28.452 81.4326 27.756C82.5126 27.06 83.8806 26.712 85.5366 26.712C87.3126 26.712 88.8606 27.12 90.1806 27.936C91.5006 28.752 92.5206 29.868 93.2406 31.284C93.9846 32.7 94.3566 34.308 94.3566 36.108C94.3566 37.908 93.9846 39.516 93.2406 40.932C92.5206 42.324 91.4886 43.428 90.1446 44.244C88.8246 45.036 87.2766 45.432 85.5006 45.432C84.0366 45.432 82.7286 45.132 81.5766 44.532C80.4486 43.932 79.5846 43.092 78.9846 42.012V52.92H75.9606ZM85.1766 42.804C86.3766 42.804 87.4326 42.528 88.3446 41.976C89.2566 41.4 89.9766 40.608 90.5046 39.6C91.0326 38.592 91.2966 37.416 91.2966 36.072C91.2966 34.728 91.0326 33.552 90.5046 32.544C89.9766 31.536 89.2566 30.756 88.3446 30.204C87.4326 29.628 86.3766 29.34 85.1766 29.34C83.9766 29.34 82.9206 29.628 82.0086 30.204C81.0966 30.756 80.3766 31.536 79.8486 32.544C79.3206 33.552 79.0566 34.728 79.0566 36.072C79.0566 37.416 79.3206 38.592 79.8486 39.6C80.3766 40.608 81.0966 41.4 82.0086 41.976C82.9206 42.528 83.9766 42.804 85.1766 42.804ZM100.402 23.184C99.802 23.184 99.298 22.992 98.89 22.608C98.506 22.2 98.314 21.696 98.314 21.096C98.314 20.52 98.506 20.04 98.89 19.656C99.298 19.272 99.802 19.08 100.402 19.08C100.978 19.08 101.47 19.272 101.878 19.656C102.286 20.04 102.49 20.52 102.49 21.096C102.49 21.696 102.286 22.2 101.878 22.608C101.47 22.992 100.978 23.184 100.402 23.184ZM98.89 45V27.144H101.914V45H98.89ZM114.235 45C112.603 45 111.319 44.604 110.383 43.812C109.447 43.02 108.979 41.592 108.979 39.528V29.7H105.883V27.144H108.979L109.375 22.86H112.003V27.144H117.259V29.7H112.003V39.528C112.003 40.656 112.231 41.424 112.687 41.832C113.143 42.216 113.947 42.408 115.099 42.408H116.971V45H114.235ZM127.041 45.432C125.553 45.432 124.317 45.18 123.333 44.676C122.349 44.172 121.617 43.5 121.137 42.66C120.657 41.82 120.417 40.908 120.417 39.924C120.417 38.1 121.113 36.696 122.505 35.712C123.897 34.728 125.793 34.236 128.193 34.236H133.017V34.02C133.017 32.46 132.609 31.284 131.793 30.492C130.977 29.676 129.885 29.268 128.517 29.268C127.341 29.268 126.321 29.568 125.457 30.168C124.617 30.744 124.089 31.596 123.873 32.724H120.777C120.897 31.428 121.329 30.336 122.073 29.448C122.841 28.56 123.789 27.888 124.917 27.432C126.045 26.952 127.245 26.712 128.517 26.712C131.013 26.712 132.885 27.384 134.133 28.728C135.405 30.048 136.041 31.812 136.041 34.02V45H133.341L133.161 41.796C132.657 42.804 131.913 43.668 130.929 44.388C129.969 45.084 128.673 45.432 127.041 45.432ZM127.509 42.876C128.661 42.876 129.645 42.576 130.461 41.976C131.301 41.376 131.937 40.596 132.369 39.636C132.801 38.676 133.017 37.668 133.017 36.612V36.576H128.445C126.669 36.576 125.409 36.888 124.665 37.512C123.945 38.112 123.585 38.868 123.585 39.78C123.585 40.716 123.921 41.472 124.593 42.048C125.289 42.6 126.261 42.876 127.509 42.876ZM140.578 45V19.08H143.602V45H140.578ZM150.394 23.184C149.794 23.184 149.29 22.992 148.882 22.608C148.498 22.2 148.306 21.696 148.306 21.096C148.306 20.52 148.498 20.04 148.882 19.656C149.29 19.272 149.794 19.08 150.394 19.08C150.97 19.08 151.462 19.272 151.87 19.656C152.278 20.04 152.482 20.52 152.482 21.096C152.482 21.696 152.278 22.2 151.87 22.608C151.462 22.992 150.97 23.184 150.394 23.184ZM148.882 45V27.144H151.906V45H148.882ZM155.948 45V42.516L165.884 29.664H156.128V27.144H169.268V29.628L159.332 42.48H169.448V45H155.948ZM181.477 45.432C179.773 45.432 178.261 45.048 176.941 44.28C175.621 43.488 174.577 42.396 173.809 41.004C173.065 39.612 172.693 37.968 172.693 36.072C172.693 34.2 173.065 32.568 173.809 31.176C174.553 29.76 175.585 28.668 176.905 27.9C178.249 27.108 179.797 26.712 181.549 26.712C183.277 26.712 184.765 27.108 186.013 27.9C187.285 28.668 188.257 29.688 188.929 30.96C189.601 32.232 189.937 33.6 189.937 35.064C189.937 35.328 189.925 35.592 189.901 35.856C189.901 36.12 189.901 36.42 189.901 36.756H175.681C175.753 38.124 176.065 39.264 176.617 40.176C177.193 41.064 177.901 41.736 178.741 42.192C179.605 42.648 180.517 42.876 181.477 42.876C182.725 42.876 183.769 42.588 184.609 42.012C185.449 41.436 186.061 40.656 186.445 39.672H189.433C188.953 41.328 188.029 42.708 186.661 43.812C185.317 44.892 183.589 45.432 181.477 45.432ZM181.477 29.268C180.037 29.268 178.753 29.712 177.625 30.6C176.521 31.464 175.885 32.736 175.717 34.416H186.949C186.877 32.808 186.325 31.548 185.293 30.636C184.261 29.724 182.989 29.268 181.477 29.268Z"
                            fill="#F5F5F5"
                        />
                        <path
                            d="M2.53154 20.2105L17.2788 20.2105C11.0476 25.6137 10.6591 35.1509 16.4302 41.043L17.2788 41.9094H2.45117L1.36623 39.3377L0.562564 36.4043C0.188411 34.5068 0 32.5774 0 30.6434V30.1759L0.241099 27.3631L0.322715 26.955C0.669595 25.2206 1.15288 23.5163 1.76806 21.858L2.53154 20.2105Z"
                            fill="#F5F5F5"
                        />
                        <path
                            d="M20.9353 55.0895L17.5599 54.3661L13.3005 52.6785C20.912 51.9298 27.5834 47.2693 30.9052 40.3802L31.5436 39.0564L46.9739 39.0564L46.0565 41.2523C45.0431 43.6778 43.5823 45.891 41.7502 47.7762L38.857 50.388L35.9826 52.3403C34.6862 52.9934 33.3412 53.5452 31.9596 53.9909L31.5436 54.1251L30.0698 54.4911C27.0848 55.2323 23.9915 55.435 20.9353 55.0895Z"
                            fill="#F5F5F5"
                        />
                        <path
                            d="M19.6898 7.225L16.234 8.15555L13.4614 9.40123L14.2322 9.50772C22.0298 10.5849 28.652 15.7584 31.584 23.0635L47.0545 23.0635L45.9246 20.6834C45.4195 19.6195 44.838 18.5935 44.1847 17.6135L44.1454 17.5546C42.7976 15.533 41.1499 13.7284 39.2588 12.2028L39.1978 12.1536C37.956 11.1518 36.6141 10.281 35.1935 9.55485C34.2082 9.05126 33.1881 8.61887 32.1411 8.26101L30.5392 7.71354L30.1805 7.61952C27.6775 6.96338 25.0835 6.72363 22.5026 6.90988L19.6898 7.225Z"
                            fill="#F5F5F5"
                        />
                    </svg>
                </a>
                <button className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-700">
                    <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor">
                        <path
                            fillRule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </div>
            {/* sidebar */}
            <div className="sidebar flex h-full md:max-h-screen flex-col bg-[#000000] text-blue-100 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full transition duration-200 ease-in-out md:relative md:translate-x-0">
                {/* logo */}
                <a
                    href="#"
                    className="text-white flex item-center justify-center px-4">
                    <svg
                        width={120}
                        height={65}
                        viewBox="0 0 192 65"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M62.424 45.432C60.936 45.432 59.7 45.18 58.716 44.676C57.732 44.172 57 43.5 56.52 42.66C56.04 41.82 55.8 40.908 55.8 39.924C55.8 38.1 56.496 36.696 57.888 35.712C59.28 34.728 61.176 34.236 63.576 34.236H68.4V34.02C68.4 32.46 67.992 31.284 67.176 30.492C66.36 29.676 65.268 29.268 63.9 29.268C62.724 29.268 61.704 29.568 60.84 30.168C60 30.744 59.472 31.596 59.256 32.724H56.16C56.28 31.428 56.712 30.336 57.456 29.448C58.224 28.56 59.172 27.888 60.3 27.432C61.428 26.952 62.628 26.712 63.9 26.712C66.396 26.712 68.268 27.384 69.516 28.728C70.788 30.048 71.424 31.812 71.424 34.02V45H68.724L68.544 41.796C68.04 42.804 67.296 43.668 66.312 44.388C65.352 45.084 64.056 45.432 62.424 45.432ZM62.892 42.876C64.044 42.876 65.028 42.576 65.844 41.976C66.684 41.376 67.32 40.596 67.752 39.636C68.184 38.676 68.4 37.668 68.4 36.612V36.576H63.828C62.052 36.576 60.792 36.888 60.048 37.512C59.328 38.112 58.968 38.868 58.968 39.78C58.968 40.716 59.304 41.472 59.976 42.048C60.672 42.6 61.644 42.876 62.892 42.876ZM75.9606 52.92V27.144H78.6966L78.9846 30.096C79.5606 29.232 80.3766 28.452 81.4326 27.756C82.5126 27.06 83.8806 26.712 85.5366 26.712C87.3126 26.712 88.8606 27.12 90.1806 27.936C91.5006 28.752 92.5206 29.868 93.2406 31.284C93.9846 32.7 94.3566 34.308 94.3566 36.108C94.3566 37.908 93.9846 39.516 93.2406 40.932C92.5206 42.324 91.4886 43.428 90.1446 44.244C88.8246 45.036 87.2766 45.432 85.5006 45.432C84.0366 45.432 82.7286 45.132 81.5766 44.532C80.4486 43.932 79.5846 43.092 78.9846 42.012V52.92H75.9606ZM85.1766 42.804C86.3766 42.804 87.4326 42.528 88.3446 41.976C89.2566 41.4 89.9766 40.608 90.5046 39.6C91.0326 38.592 91.2966 37.416 91.2966 36.072C91.2966 34.728 91.0326 33.552 90.5046 32.544C89.9766 31.536 89.2566 30.756 88.3446 30.204C87.4326 29.628 86.3766 29.34 85.1766 29.34C83.9766 29.34 82.9206 29.628 82.0086 30.204C81.0966 30.756 80.3766 31.536 79.8486 32.544C79.3206 33.552 79.0566 34.728 79.0566 36.072C79.0566 37.416 79.3206 38.592 79.8486 39.6C80.3766 40.608 81.0966 41.4 82.0086 41.976C82.9206 42.528 83.9766 42.804 85.1766 42.804ZM100.402 23.184C99.802 23.184 99.298 22.992 98.89 22.608C98.506 22.2 98.314 21.696 98.314 21.096C98.314 20.52 98.506 20.04 98.89 19.656C99.298 19.272 99.802 19.08 100.402 19.08C100.978 19.08 101.47 19.272 101.878 19.656C102.286 20.04 102.49 20.52 102.49 21.096C102.49 21.696 102.286 22.2 101.878 22.608C101.47 22.992 100.978 23.184 100.402 23.184ZM98.89 45V27.144H101.914V45H98.89ZM114.235 45C112.603 45 111.319 44.604 110.383 43.812C109.447 43.02 108.979 41.592 108.979 39.528V29.7H105.883V27.144H108.979L109.375 22.86H112.003V27.144H117.259V29.7H112.003V39.528C112.003 40.656 112.231 41.424 112.687 41.832C113.143 42.216 113.947 42.408 115.099 42.408H116.971V45H114.235ZM127.041 45.432C125.553 45.432 124.317 45.18 123.333 44.676C122.349 44.172 121.617 43.5 121.137 42.66C120.657 41.82 120.417 40.908 120.417 39.924C120.417 38.1 121.113 36.696 122.505 35.712C123.897 34.728 125.793 34.236 128.193 34.236H133.017V34.02C133.017 32.46 132.609 31.284 131.793 30.492C130.977 29.676 129.885 29.268 128.517 29.268C127.341 29.268 126.321 29.568 125.457 30.168C124.617 30.744 124.089 31.596 123.873 32.724H120.777C120.897 31.428 121.329 30.336 122.073 29.448C122.841 28.56 123.789 27.888 124.917 27.432C126.045 26.952 127.245 26.712 128.517 26.712C131.013 26.712 132.885 27.384 134.133 28.728C135.405 30.048 136.041 31.812 136.041 34.02V45H133.341L133.161 41.796C132.657 42.804 131.913 43.668 130.929 44.388C129.969 45.084 128.673 45.432 127.041 45.432ZM127.509 42.876C128.661 42.876 129.645 42.576 130.461 41.976C131.301 41.376 131.937 40.596 132.369 39.636C132.801 38.676 133.017 37.668 133.017 36.612V36.576H128.445C126.669 36.576 125.409 36.888 124.665 37.512C123.945 38.112 123.585 38.868 123.585 39.78C123.585 40.716 123.921 41.472 124.593 42.048C125.289 42.6 126.261 42.876 127.509 42.876ZM140.578 45V19.08H143.602V45H140.578ZM150.394 23.184C149.794 23.184 149.29 22.992 148.882 22.608C148.498 22.2 148.306 21.696 148.306 21.096C148.306 20.52 148.498 20.04 148.882 19.656C149.29 19.272 149.794 19.08 150.394 19.08C150.97 19.08 151.462 19.272 151.87 19.656C152.278 20.04 152.482 20.52 152.482 21.096C152.482 21.696 152.278 22.2 151.87 22.608C151.462 22.992 150.97 23.184 150.394 23.184ZM148.882 45V27.144H151.906V45H148.882ZM155.948 45V42.516L165.884 29.664H156.128V27.144H169.268V29.628L159.332 42.48H169.448V45H155.948ZM181.477 45.432C179.773 45.432 178.261 45.048 176.941 44.28C175.621 43.488 174.577 42.396 173.809 41.004C173.065 39.612 172.693 37.968 172.693 36.072C172.693 34.2 173.065 32.568 173.809 31.176C174.553 29.76 175.585 28.668 176.905 27.9C178.249 27.108 179.797 26.712 181.549 26.712C183.277 26.712 184.765 27.108 186.013 27.9C187.285 28.668 188.257 29.688 188.929 30.96C189.601 32.232 189.937 33.6 189.937 35.064C189.937 35.328 189.925 35.592 189.901 35.856C189.901 36.12 189.901 36.42 189.901 36.756H175.681C175.753 38.124 176.065 39.264 176.617 40.176C177.193 41.064 177.901 41.736 178.741 42.192C179.605 42.648 180.517 42.876 181.477 42.876C182.725 42.876 183.769 42.588 184.609 42.012C185.449 41.436 186.061 40.656 186.445 39.672H189.433C188.953 41.328 188.029 42.708 186.661 43.812C185.317 44.892 183.589 45.432 181.477 45.432ZM181.477 29.268C180.037 29.268 178.753 29.712 177.625 30.6C176.521 31.464 175.885 32.736 175.717 34.416H186.949C186.877 32.808 186.325 31.548 185.293 30.636C184.261 29.724 182.989 29.268 181.477 29.268Z"
                            fill="#F5F5F5"
                        />
                        <path
                            d="M2.53154 20.2105L17.2788 20.2105C11.0476 25.6137 10.6591 35.1509 16.4302 41.043L17.2788 41.9094H2.45117L1.36623 39.3377L0.562564 36.4043C0.188411 34.5068 0 32.5774 0 30.6434V30.1759L0.241099 27.3631L0.322715 26.955C0.669595 25.2206 1.15288 23.5163 1.76806 21.858L2.53154 20.2105Z"
                            fill="#F5F5F5"
                        />
                        <path
                            d="M20.9353 55.0895L17.5599 54.3661L13.3005 52.6785C20.912 51.9298 27.5834 47.2693 30.9052 40.3802L31.5436 39.0564L46.9739 39.0564L46.0565 41.2523C45.0431 43.6778 43.5823 45.891 41.7502 47.7762L38.857 50.388L35.9826 52.3403C34.6862 52.9934 33.3412 53.5452 31.9596 53.9909L31.5436 54.1251L30.0698 54.4911C27.0848 55.2323 23.9915 55.435 20.9353 55.0895Z"
                            fill="#F5F5F5"
                        />
                        <path
                            d="M19.6898 7.225L16.234 8.15555L13.4614 9.40123L14.2322 9.50772C22.0298 10.5849 28.652 15.7584 31.584 23.0635L47.0545 23.0635L45.9246 20.6834C45.4195 19.6195 44.838 18.5935 44.1847 17.6135L44.1454 17.5546C42.7976 15.533 41.1499 13.7284 39.2588 12.2028L39.1978 12.1536C37.956 11.1518 36.6141 10.281 35.1935 9.55485C34.2082 9.05126 33.1881 8.61887 32.1411 8.26101L30.5392 7.71354L30.1805 7.61952C27.6775 6.96338 25.0835 6.72363 22.5026 6.90988L19.6898 7.225Z"
                            fill="#F5F5F5"
                        />
                    </svg>
                </a>
                {/* nav */}
                <MenuLinks />
            </div>
            {/* content */}

            <div className="flex-1 bg-[#DCE4E7] dark:bg-[#0F0F0F] dark:text-[#DCE4E7] md:overflow-y-auto">
                <div className="w-full h-full container mx-auto md:p-4 lg:w-10/12">
                    <div className="flex items-center w-full gap-4">
                        <div className="flex-1">
                            <h6 className="text-xl font-semibold">
                                Welcome back, {user?.username || "User"}
                            </h6>
                            <p className="font-medium text-[#00000050] dark:text-[#DCE4E750]">
                                Let do the best today
                            </p>
                        </div>
                        <div className="relative">
                            <input
                                type="text"
                                className="w-full h-10 rounded-lg border border-[#66666610] pe-4 ps-10 focus:outline-none focus:border-[#66666620] dark:focus:border-[#3B3B3B] dark:bg-[#1F1F1F]  "
                                placeholder="Search"
                            />
                            <button className="absolute top-1/2 left-2 transform -translate-y-1/2 text-neutral-500 dark:text-neutral-400">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                                    />
                                </svg>
                            </button>
                        </div>

                        <img
                            className="w-14 h-14 rounded-full cursor-pointer"
                            src="https://randomuser.me/api/portraits/men/1.jpg"
                            alt="User dropdown"
                        />

                        <button
                            type="button"
                            onClick={toggleTheme}
                            className="flex items-center border border-[#8C8D8E] text-[#8C8D8E] p-4 rounded-full text-lg font-semibold dark:border-[#3B3B3B]">
                            {theme === "dark" ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Layout;
