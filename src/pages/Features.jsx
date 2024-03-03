import arrowIcon from "@/assets/imgs/arrow.png";
import collab1 from "@/assets/imgs/colab-1.png";
import collab2 from "@/assets/imgs/colab-2.png";
import collab3 from "@/assets/imgs/colab-3.png";
import Feature1Src from "@/assets/imgs/features_tile_1.png";
import Feature2Src from "@/assets/imgs/features_tile_2.png";
import Feature3Src from "@/assets/imgs/features_tile_3.png";
import Feature4Src from "@/assets/imgs/features_tile_4.png";
import Feature5Src from "@/assets/imgs/features_tile_5.png";
import MoreImageSide from "@/assets/imgs/more-img-side.png";
import CollabCardComponent from "@/components/CollabCard";
import DownloadCard from "@/components/DownloadCard";
import Footer from "@/components/Footer";
import LandingNav from "@/components/LandingNav";
import ProductTabs from "@/components/ProductTabs";
import CardFooter from "@/components/Section/CardFooter";
import SectionHeaderTitle from "@/components/Section/HeaderTitle";

export default function Features() {
    // links
    const productLinks = [
        {
            icon: (
                <svg
                    width="28"
                    height="36"
                    viewBox="0 0 28 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M11 0.814941C8.99747 0.814941 7.0399 1.40876 5.37486 2.52131C3.70981 3.63386 2.41206 5.21517 1.64572 7.06527C0.879387 8.91537 0.678878 10.9512 1.06955 12.9152C1.46023 14.8793 2.42454 16.6834 3.84055 18.0994C5.25656 19.5154 7.06066 20.4797 9.02471 20.8704C10.9888 21.2611 13.0246 21.0606 14.8747 20.2942C16.7248 19.5279 18.3061 18.2301 19.4186 16.5651C20.5312 14.9 21.125 12.9425 21.125 10.9399C21.122 8.25554 20.0543 5.68193 18.1562 3.78377C16.258 1.88561 13.6844 0.817919 11 0.814941ZM11 18.8149C9.44248 18.8149 7.91993 18.3531 6.62489 17.4878C5.32985 16.6224 4.32049 15.3925 3.72445 13.9536C3.12841 12.5146 2.97246 10.9312 3.27632 9.4036C3.58018 7.876 4.3302 6.47281 5.43154 5.37148C6.53288 4.27014 7.93607 3.52012 9.46367 3.21626C10.9913 2.9124 12.5747 3.06835 14.0136 3.66439C15.4526 4.26043 16.6825 5.26979 17.5478 6.56483C18.4131 7.85986 18.875 9.38241 18.875 10.9399C18.8728 13.0278 18.0424 15.0296 16.566 16.5059C15.0896 17.9823 13.0879 18.8127 11 18.8149ZM14.75 10.9399C14.75 11.1208 14.7063 11.299 14.6228 11.4595C14.5392 11.6199 14.4182 11.7578 14.27 11.8615L10.52 14.4865C10.3514 14.6045 10.1537 14.674 9.94838 14.6874C9.74305 14.7008 9.53798 14.6576 9.35547 14.5626C9.17296 14.4676 9.02001 14.3243 8.91325 14.1484C8.8065 13.9725 8.75004 13.7707 8.75 13.5649V8.31494C8.75004 8.10918 8.8065 7.90736 8.91325 7.73146C9.02001 7.55555 9.17296 7.41229 9.35547 7.31727C9.53798 7.22224 9.74305 7.17909 9.94838 7.19251C10.1537 7.20593 10.3514 7.27541 10.52 7.39338L14.27 10.0184C14.4182 10.1221 14.5392 10.26 14.6228 10.4204C14.7063 10.5808 14.75 10.7591 14.75 10.9399Z"
                        fill="#33ABD1"
                    />
                </svg>
            ),
            title: "Video Editing",
            desc: `Seamlessly transform raw footage 
            into polished masterpieces.`,
            link: "#",
        },
        {
            icon: (
                <svg
                    width="28"
                    height="33"
                    viewBox="0 0 28 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_836_2045)">
                        <path
                            d="M21.15 6.81268L12.9 2.29674C12.6243 2.145 12.3147 2.06543 12 2.06543C11.6853 2.06543 11.3757 2.145 11.1 2.29674L2.85 6.81268C2.5548 6.9742 2.3085 7.21218 2.13695 7.50167C1.9654 7.79116 1.87492 8.12149 1.875 8.45799V17.4224C1.87492 17.7589 1.9654 18.0892 2.13695 18.3787C2.3085 18.6682 2.5548 18.9062 2.85 19.0677L11.1 23.5836C11.3756 23.7355 11.6853 23.8152 12 23.8152C12.3147 23.8152 12.6244 23.7355 12.9 23.5836L21.15 19.0677C21.4452 18.9062 21.6915 18.6682 21.863 18.3787C22.0346 18.0892 22.1251 17.7589 22.125 17.4224V8.45799C22.1251 8.12149 22.0346 7.79116 21.863 7.50167C21.6915 7.21218 21.4452 6.9742 21.15 6.81268ZM12 4.36861L18.75 8.06518L12 11.7589L5.25 8.06518L12 4.36861ZM4.125 10.0142L10.875 13.708V20.8958L4.125 17.2002V10.0142ZM13.125 20.8958V13.708L19.875 10.0142V17.2002L13.125 20.8958Z"
                            fill="#33ABD1"
                        />
                    </g>
                    <defs>
                        <filter
                            id="filter0_d_836_2045"
                            x="-4"
                            y="0.939941"
                            width="32"
                            height="32"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB">
                            <feFlood
                                floodOpacity="0"
                                result="BackgroundImageFix"
                            />
                            <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                            />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                            />
                            <feBlend
                                mode="normal"
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_836_2045"
                            />
                            <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect1_dropShadow_836_2045"
                                result="shape"
                            />
                        </filter>
                    </defs>
                </svg>
            ),
            title: "Code Generation",
            desc: `Ready to assist you in writing code 
            faster and more accurately.`,
            link: "#",
        },
    ];

    // collab cards
    const collabCards = [
        {
            img: collab1,
            data: {
                title: "User Permissions",
                desc: `The ability to set varying levels of permissions for 
                different users, ensuring data security and full 
                access control.`,
                link: "#",
                icon: (
                    <svg
                        width="22"
                        height="21"
                        viewBox="0 0 22 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M11 0.39502C8.99747 0.39502 7.0399 0.98884 5.37486 2.10139C3.70981 3.21394 2.41206 4.79525 1.64572 6.64535C0.879387 8.49545 0.678878 10.5313 1.06955 12.4953C1.46023 14.4594 2.42454 16.2635 3.84055 17.6795C5.25656 19.0955 7.06066 20.0598 9.02471 20.4505C10.9888 20.8411 13.0246 20.6406 14.8747 19.8743C16.7248 19.108 18.3061 17.8102 19.4186 16.1452C20.5312 14.4801 21.125 12.5226 21.125 10.52C21.122 7.83562 20.0543 5.26201 18.1562 3.36385C16.258 1.46569 13.6844 0.397997 11 0.39502ZM6.45969 16.9485C6.98195 16.2344 7.66528 15.6535 8.45418 15.2531C9.24308 14.8527 10.1153 14.644 11 14.644C11.8847 14.644 12.7569 14.8527 13.5458 15.2531C14.3347 15.6535 15.0181 16.2344 15.5403 16.9485C14.2134 17.8895 12.6268 18.395 11 18.395C9.37323 18.395 7.78665 17.8895 6.45969 16.9485ZM8.375 9.77002C8.375 9.25084 8.52896 8.74333 8.8174 8.31165C9.10583 7.87997 9.5158 7.54352 9.99546 7.34484C10.4751 7.14616 11.0029 7.09417 11.5121 7.19546C12.0213 7.29674 12.489 7.54675 12.8562 7.91386C13.2233 8.28098 13.4733 8.74871 13.5746 9.25791C13.6759 9.76711 13.6239 10.2949 13.4252 10.7746C13.2265 11.2542 12.8901 11.6642 12.4584 11.9526C12.0267 12.2411 11.5192 12.395 11 12.395C10.3038 12.395 9.63613 12.1185 9.14385 11.6262C8.65157 11.1339 8.375 10.4662 8.375 9.77002ZM17.1875 15.3894C16.4583 14.462 15.5289 13.7114 14.4688 13.1938C15.1444 12.5096 15.6026 11.6408 15.7858 10.6969C15.9689 9.7529 15.8688 8.77585 15.498 7.88863C15.1273 7.00142 14.5024 6.24366 13.702 5.7107C12.9017 5.17773 11.9616 4.89336 11 4.89336C10.0384 4.89336 9.09833 5.17773 8.29797 5.7107C7.49762 6.24366 6.87275 7.00142 6.50198 7.88863C6.13121 8.77585 6.0311 9.7529 6.21424 10.6969C6.39739 11.6408 6.85561 12.5096 7.53125 13.1938C6.4711 13.7114 5.54168 14.462 4.8125 15.3894C3.89661 14.2284 3.32614 12.8329 3.1664 11.3627C3.00665 9.89256 3.2641 8.40713 3.90925 7.07646C4.55441 5.7458 5.5612 4.62368 6.81439 3.83856C8.06757 3.05345 9.5165 2.63705 10.9953 2.63705C12.4741 2.63705 13.9231 3.05345 15.1762 3.83856C16.4294 4.62368 17.4362 5.7458 18.0814 7.07646C18.7265 8.40713 18.984 9.89256 18.8242 11.3627C18.6645 12.8329 18.094 14.2284 17.1781 15.3894H17.1875Z"
                            fill="#E29D37"
                        />
                    </svg>
                ),
            },
        },
        {
            img: collab2,
            data: {
                title: "Task Assignment ",
                desc: `The ability to assign tasks to specific team 
                members and track their progress, ensuring 
                accountability and transparency.`,
                link: "#",
                icon: (
                    <svg
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M15.2061 7.47408C15.311 7.5786 15.3942 7.70279 15.451 7.83954C15.5078 7.97628 15.537 8.12289 15.537 8.27096C15.537 8.41902 15.5078 8.56563 15.451 8.70238C15.3942 8.83912 15.311 8.96332 15.2061 9.06783L9.9561 14.3178C9.85158 14.4227 9.72739 14.5059 9.59064 14.5627C9.4539 14.6195 9.30729 14.6487 9.15922 14.6487C9.01116 14.6487 8.86455 14.6195 8.7278 14.5627C8.59106 14.5059 8.46686 14.4227 8.36235 14.3178L6.11235 12.0678C6.0077 11.9632 5.92469 11.839 5.86806 11.7022C5.81142 11.5655 5.78227 11.419 5.78227 11.271C5.78227 11.123 5.81142 10.9764 5.86806 10.8397C5.92469 10.703 6.0077 10.5787 6.11235 10.4741C6.217 10.3694 6.34123 10.2864 6.47796 10.2298C6.61469 10.1732 6.76123 10.144 6.90922 10.144C7.05722 10.144 7.20376 10.1732 7.34049 10.2298C7.47722 10.2864 7.60145 10.3694 7.7061 10.4741L9.16016 11.9263L13.6142 7.47127C13.7189 7.36686 13.8431 7.2841 13.9798 7.22772C14.1165 7.17135 14.2629 7.14247 14.4107 7.14273C14.5586 7.14299 14.7049 7.17239 14.8414 7.22924C14.9779 7.2861 15.1018 7.3693 15.2061 7.47408ZM20.7852 10.52C20.7852 12.5226 20.1913 14.4801 19.0788 16.1452C17.9662 17.8102 16.3849 19.108 14.5348 19.8743C12.6847 20.6406 10.6489 20.8411 8.68487 20.4505C6.72081 20.0598 4.91671 19.0955 3.5007 17.6795C2.0847 16.2635 1.12039 14.4594 0.72971 12.4953C0.339034 10.5313 0.539543 8.49545 1.30588 6.64535C2.07222 4.79525 3.36996 3.21394 5.03501 2.10139C6.70006 0.98884 8.65763 0.39502 10.6602 0.39502C13.3446 0.397997 15.9182 1.46569 17.8163 3.36385C19.7145 5.26201 20.7822 7.83562 20.7852 10.52ZM18.5352 10.52C18.5352 8.96249 18.0733 7.43994 17.208 6.1449C16.3427 4.84987 15.1128 3.84051 13.6738 3.24447C12.2348 2.64843 10.6514 2.49248 9.12382 2.79634C7.59622 3.10019 6.19303 3.85021 5.09169 4.95155C3.99036 6.05289 3.24034 7.45608 2.93648 8.98368C2.63262 10.5113 2.78857 12.0947 3.38461 13.5337C3.98065 14.9726 4.99001 16.2025 6.28505 17.0678C7.58008 17.9332 9.10263 18.395 10.6602 18.395C12.7481 18.3928 14.7498 17.5624 16.2262 16.086C17.7025 14.6097 18.5329 12.6079 18.5352 10.52Z"
                            fill="#E29D37"
                        />
                    </svg>
                ),
            },
        },
        {
            img: collab3,
            data: {
                title: "Feedback Activity",
                desc: `Feedback Activity
                Leave comments, suggestions, and questions 
                directly within the document, ensuring clear 
                communication and context. `,
                link: "#",
                icon: (
                    <svg
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M9.58062 10.5202C9.58062 10.8169 9.49264 11.1069 9.32782 11.3535C9.163 11.6002 8.92873 11.7925 8.65464 11.906C8.38055 12.0195 8.07895 12.0492 7.78798 11.9914C7.49701 11.9335 7.22973 11.7906 7.01996 11.5808C6.81018 11.3711 6.66732 11.1038 6.60944 10.8128C6.55156 10.5218 6.58126 10.2202 6.6948 9.94616C6.80833 9.67207 7.00059 9.4378 7.24726 9.27298C7.49393 9.10815 7.78394 9.02018 8.08062 9.02018C8.47844 9.02018 8.85997 9.17822 9.14128 9.45952C9.42258 9.74083 9.58062 10.1224 9.58062 10.5202ZM12.5806 9.02018C12.2839 9.02018 11.9939 9.10815 11.7473 9.27298C11.5006 9.4378 11.3083 9.67207 11.1948 9.94616C11.0813 10.2202 11.0516 10.5218 11.1094 10.8128C11.1673 11.1038 11.3102 11.3711 11.52 11.5808C11.7297 11.7906 11.997 11.9335 12.288 11.9914C12.579 12.0492 12.8806 12.0195 13.1546 11.906C13.4287 11.7925 13.663 11.6002 13.8278 11.3535C13.9926 11.1069 14.0806 10.8169 14.0806 10.5202C14.0806 10.1224 13.9226 9.74083 13.6413 9.45952C13.36 9.17822 12.9784 9.02018 12.5806 9.02018ZM20.4556 10.5202C20.456 12.2545 20.0108 13.9599 19.1629 15.4728C18.3149 16.9857 17.0925 18.2554 15.6129 19.1602C14.1333 20.065 12.4461 20.5746 10.713 20.6401C8.97985 20.7056 7.25898 20.3248 5.7153 19.5342L2.67499 20.5514C2.34402 20.663 1.98846 20.6799 1.64841 20.6002C1.30835 20.5205 0.997315 20.3474 0.750347 20.1004C0.503379 19.8535 0.3303 19.5424 0.250619 19.2024C0.170937 18.8623 0.187821 18.5068 0.299366 18.1758L1.3128 15.1355C0.616887 13.7723 0.239065 12.2691 0.207743 10.7389C0.17642 9.20875 0.492413 7.69136 1.13196 6.30086C1.77151 4.91037 2.71798 3.68296 3.90019 2.71092C5.08241 1.73888 6.46961 1.04751 7.95749 0.688777C9.44538 0.330049 10.9952 0.313304 12.4905 0.6398C13.9858 0.966297 15.3876 1.62754 16.5906 2.57381C17.7935 3.52008 18.7663 4.72675 19.4357 6.1031C20.1052 7.47945 20.4539 8.98966 20.4556 10.5202ZM18.2056 10.5202C18.2052 9.31225 17.9268 8.12062 17.3922 7.03747C16.8575 5.95431 16.0808 5.00867 15.1222 4.2737C14.1636 3.53872 13.0488 3.03412 11.864 2.79892C10.6792 2.56372 9.45615 2.60422 8.2895 2.9173C7.12285 3.23039 6.04386 3.80765 5.136 4.60444C4.22814 5.40123 3.51574 6.39619 3.05391 7.51235C2.59208 8.6285 2.39321 9.83594 2.47268 11.0413C2.55214 12.2466 2.90781 13.4174 3.51218 14.4633C3.59206 14.6012 3.64172 14.7545 3.65788 14.9131C3.67405 15.0716 3.65634 15.2318 3.60593 15.383L2.67499 18.1758L5.4678 17.2449C5.58269 17.2066 5.70296 17.187 5.82405 17.1867C6.02164 17.1871 6.21564 17.2395 6.38655 17.3386C7.58376 18.0314 8.94231 18.3966 10.3255 18.3975C11.7087 18.3984 13.0677 18.0349 14.2658 17.3437C15.4639 16.6525 16.4589 15.658 17.1505 14.4601C17.8421 13.2623 18.206 11.9034 18.2056 10.5202Z"
                            fill="#E29D37"
                        />
                    </svg>
                ),
            },
        },
    ];

    return (
        <>
            <main className="flex flex-col max-w-screen w-full overflow-x-hidden dark:bg-[#0F0F0F] dark:text-[#FBFBFB]">
                <LandingNav />

                <div className="w-full container mx-auto flex-wrap p-8 md:p-4">
                    {/* Product Features */}
                    <section>
                        <div className="flex flex-col items-center w-full gap-4 my-12 md:mb-32 md:mt-16">
                            {/* Header Title */}
                            <SectionHeaderTitle
                                title={"Features"}
                                subTitle={"Product Features"}
                                desc={`We take immense pride in presenting you with a
                                    comprehensive array of powerful tools and
                                    capabilities that are designed to elevate your
                                    experience and help you achieve more.`}
                            />
                            <div className="flex flex-wrap items-center justify-center gap-8 w-full f">
                                <img src={Feature1Src} alt="feature_1" />
                                <img src={Feature2Src} alt="feature_2" />
                            </div>
                            <div className="flex flex-wrap items-center justify-center gap-8 w-full">
                                <img src={Feature3Src} alt="feature_3" />
                                <img src={Feature4Src} alt="feature_4" />
                                <img src={Feature5Src} alt="feature_5" />
                            </div>
                        </div>
                    </section>

                    <section id="#features">
                        <div className="flex flex-col items-center w-full gap-4 my-12 md:mb-32">
                            {/* Header Title */}
                            <SectionHeaderTitle
                                title={"Features"}
                                subTitle={"Other Features"}
                                desc={`Our platform is designed to provide you with an
                            exceptional user experience, catering to the needs
                            of ambitious professionals and visionary
                            entrepreneurs.`}
                            />
                            {/* Product Tab */}
                            <ProductTabs />
                        </div>
                    </section>
                </div>

                {/* More Features Section */}
                <section>
                    <div className="w-full container mx-auto flex-wrap p-8 md:p-4">
                        <div className="flex flex-col items-center w-full gap-4 my-12 md:mb-32">
                            <SectionHeaderTitle
                                title={"Features"}
                                subTitle={"And so much more"}
                                desc={`All the features you need to build a better experience, explore the possibilities, and unlock 
                                    the full potential of what we have to offer.`}
                                hasSvg={true}
                                svgComponent={
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-6 h-6">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                                        />
                                    </svg>
                                }
                            />
                            <div className="w-full max-w-screen-lg grid grid-cols-1 md:grid-cols-2 gap-12">
                                {/* Left Part */}
                                <div className="flex flex-col gap-8">
                                    <div className="flex justify-center md:justify-start items-center gap-4">
                                        <span className="p-2 rounded-lg bg-[#33abd126] text-[#33ABD1] border-[#33ABD1]">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-10 h-10"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
                                                />
                                            </svg>
                                        </span>
                                        <span className="text-lg font-bold text-[#33ABD1]">
                                            AI Assistant
                                        </span>
                                    </div>
                                    <h3 className="text-3xl lg:text-4xl text-center md:text-left font-bold dark:text-white mx-3 md:mx-0">
                                        Your new ultimate productivity companion
                                    </h3>
                                    <p className="text-[#9B9CA1] text-md leading-relaxed text-center md:text-left mx-3 md:mx-0">
                                        Designed to seamlessly integrate into
                                        your personal
                                        <br />
                                        and professional life, our AI Assistant
                                        is here to revolutionize the way you
                                        accomplish tasks.
                                    </p>
                                    <div className="flex justify-center md:justify-start ">
                                        <a
                                            href="#"
                                            className="bg-[#1F1F1F] text-[#FBFBFB] py-4 px-10 rounded-full text-lg font-semibold ">
                                            Learn More
                                        </a>
                                    </div>

                                    {/* Footer Cards */}
                                    <div className="flex mx-3 lg:mx-0">
                                        {productLinks?.map((e, index) => (
                                            <div key={index} className="flex-1">
                                                <CardFooter
                                                    icon={e?.icon}
                                                    title={e?.title}
                                                    desc={e?.desc}
                                                    link={e?.link}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                {/* Right Part */}
                                <div>
                                    <img
                                        src={MoreImageSide}
                                        className="w-full"
                                        alt="ai_assistant"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Easy Collaboration Section */}
                <section>
                    <div className="w-full container mx-auto flex-wrap p-8 md:p-4">
                        <div className="flex flex-col items-center w-full gap-4 mb-12">
                            <div className="w-full max-w-screen-lg">
                                <div className="lg:flex items-center w-full mx-auto gap-4 my-6 md:my-24">
                                    <div className="lg:flex flex-1 flex-col gap-3 md:w-3/5">
                                        <div className="flex justify-center md:justify-start items-center gap-4">
                                            <span className="p-2 rounded-lg bg-[#292216] text-[#33ABD1] border-[#E29D37]">
                                                <svg
                                                    width="24"
                                                    height="25"
                                                    viewBox="0 0 24 25"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M11.7352 15.073C12.6775 14.281 13.3533 13.2184 13.6711 12.0292C13.989 10.8401 13.9334 9.58194 13.5119 8.42547C13.0904 7.26899 12.3234 6.27013 11.315 5.56434C10.3066 4.85855 9.10548 4.47998 7.8746 4.47998C6.64371 4.47998 5.44261 4.85855 4.43418 5.56434C3.42575 6.27013 2.65879 7.26899 2.23731 8.42547C1.81583 9.58194 1.76024 10.8401 2.07805 12.0292C2.39587 13.2184 3.07173 14.281 4.01397 15.073C2.54264 15.7383 1.26758 16.7715 0.311784 18.073C0.13525 18.3135 0.0615074 18.6144 0.10678 18.9093C0.152052 19.2042 0.312631 19.4691 0.553191 19.6456C0.79375 19.8222 1.09459 19.8959 1.38952 19.8506C1.68445 19.8054 1.94931 19.6448 2.12585 19.4042C2.78748 18.5006 3.65281 17.7657 4.65164 17.2591C5.65046 16.7525 6.75464 16.4884 7.8746 16.4884C8.99455 16.4884 10.0987 16.7525 11.0976 17.2591C12.0964 17.7657 12.9617 18.5006 13.6233 19.4042C13.7999 19.6449 14.0648 19.8056 14.3598 19.851C14.6548 19.8963 14.9558 19.8226 15.1965 19.6461C15.4372 19.4696 15.5979 19.2046 15.6432 18.9096C15.6886 18.6146 15.6149 18.3137 15.4383 18.073C14.482 16.7717 13.2067 15.7385 11.7352 15.073ZM4.1246 10.4848C4.1246 9.74317 4.34453 9.01814 4.75659 8.40146C5.16864 7.78477 5.75431 7.30413 6.43953 7.0203C7.12476 6.73647 7.87876 6.66221 8.60619 6.8069C9.33361 6.9516 10.0018 7.30875 10.5262 7.8332C11.0507 8.35764 11.4078 9.02583 11.5525 9.75326C11.6972 10.4807 11.623 11.2347 11.3391 11.9199C11.0553 12.6051 10.5747 13.1908 9.95799 13.6029C9.3413 14.0149 8.61628 14.2348 7.8746 14.2348C6.88004 14.2348 5.92621 13.8398 5.22295 13.1365C4.51969 12.4332 4.1246 11.4794 4.1246 10.4848ZM23.4465 19.6414C23.3274 19.7289 23.1922 19.7921 23.0487 19.8274C22.9051 19.8626 22.7561 19.8693 22.61 19.8469C22.4639 19.8245 22.3236 19.7736 22.1973 19.697C22.0709 19.6204 21.9608 19.5196 21.8733 19.4005C21.2101 18.4986 20.3444 17.7649 19.3459 17.2585C18.3475 16.7521 17.2441 16.4871 16.1246 16.4848C15.8262 16.4848 15.5401 16.3663 15.3291 16.1553C15.1181 15.9444 14.9996 15.6582 14.9996 15.3598C14.9996 15.0615 15.1181 14.7753 15.3291 14.5644C15.5401 14.3534 15.8262 14.2348 16.1246 14.2348C16.6767 14.2342 17.2219 14.1116 17.7212 13.8759C18.2205 13.6402 18.6616 13.2971 19.013 12.8711C19.3643 12.4452 19.6173 11.9469 19.7538 11.4119C19.8903 10.8769 19.907 10.3183 19.8026 9.77614C19.6983 9.23394 19.4755 8.72147 19.1501 8.27534C18.8248 7.82921 18.405 7.46042 17.9206 7.19533C17.4363 6.93023 16.8994 6.77537 16.3482 6.74179C15.7971 6.70821 15.2454 6.79676 14.7324 7.0011C14.595 7.05736 14.4478 7.08586 14.2993 7.08497C14.1509 7.08408 14.004 7.0538 13.8673 6.99589C13.7306 6.93798 13.6067 6.85358 13.5028 6.74755C13.3988 6.64152 13.3169 6.51597 13.2617 6.37813C13.2065 6.24029 13.1792 6.09289 13.1812 5.94442C13.1833 5.79596 13.2147 5.64937 13.2737 5.51311C13.3327 5.37685 13.418 5.25361 13.5249 5.1505C13.6317 5.0474 13.7579 4.96645 13.8962 4.91235C15.2202 4.38223 16.6898 4.3411 18.0414 4.79633C19.393 5.25156 20.5383 6.17337 21.2718 7.39649C22.0054 8.61961 22.2793 10.064 22.0444 11.4708C21.8094 12.8775 21.0811 14.1546 19.9899 15.073C21.4612 15.7383 22.7363 16.7715 23.6921 18.073C23.8669 18.3138 23.9392 18.614 23.8931 18.9079C23.8471 19.2019 23.6865 19.4656 23.4465 19.6414Z"
                                                        fill="#E29D37"
                                                    />
                                                </svg>
                                            </span>
                                            <span className="text-lg font-bold text-[#E29D37]">
                                                Easy Collaboration
                                            </span>
                                        </div>
                                        <h3 className="text-3xl font-medium text-black dark:text-white md:w-3/5 text-center md:text-left mt-3 md:mt-0 mb-3 md:md-0">
                                            The best solution for seamless
                                            productive teamwork
                                        </h3>
                                        <p className="text-[#9B9CA1] text-md leading-relaxed text-center md:text-left mx-3 md:mx-0 md:w-3/5">
                                            Working together on documents has
                                            never been easier, allowing you and
                                            your team to collaborate and provide
                                            feedback.
                                        </p>
                                    </div>
                                    <div className="flex md:justify-end justify-center mt-6 md:mt-0">
                                        <a
                                            href="#"
                                            className="bg-[#1F1F1F] text-[#FBFBFB] py-4 px-10 rounded-full text-lg font-semibold flex">
                                            Learn More
                                            <div className="pl-5 py-2">
                                                <img
                                                    src={arrowIcon}
                                                    alt="arrow"
                                                />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                {/* Cards */}
                                <div className="lg:flex gap-3">
                                    {collabCards?.map((e, index) => (
                                        <div key={index} className="flex-1">
                                            <CollabCardComponent
                                                image={e?.img}
                                                data={e?.data}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Download */}
                <section>
                    <div className="w-full container mx-auto flex-wrap p-8 md:p-4">
                        <div className="flex flex-col items-center w-full gap-4 mb-12 ">
                            <div className="w-full max-w-screen-lg p-3">
                                <DownloadCard />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <Footer />
            </main>
        </>
    );
}
