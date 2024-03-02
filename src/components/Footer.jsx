import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="flex flex-col items-center w-full gap-4">
      <div className="w-full max-w-screen-lg p-3">
        <div className="flex flex-col gap-6 md:gap-0 md:flex-row justify-between mb-5">
          {/* 1st column */}
          <div>
            <svg
              width="109"
              height="19"
              viewBox="0 0 109 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className='invert dark:invert-0'
            >
              <g clipPath="url(#clip0_836_2456)">
                <g clipPath="url(#clip1_836_2456)">
                  <g clipPath="url(#clip2_836_2456)">
                    <path
                      d="M8.995 13.3378C8.051 11.6268 6.643 10.2178 4.931 9.27479C6.643 8.33078 8.052 6.92279 8.995 5.21079C9.938 6.92279 11.347 8.33078 13.058 9.27479C11.347 10.2178 9.938 11.6268 8.995 13.3378ZM10.259 0.279785H7.729C7.729 4.54179 4.262 8.00879 0 8.00879V10.5388C4.262 10.5388 7.729 14.0078 7.729 18.2688H10.259C10.259 14.0078 13.728 10.5388 17.989 10.5388V8.00879C13.728 8.00879 10.259 4.54179 10.259 0.279785Z"
                      fill="#FBFBFB"
                    />
                  </g>
                </g>
                <path
                  d="M37.9107 6.01237H35.6321C35.5671 5.6387 35.4473 5.30768 35.2727 5.01931C35.098 4.72687 34.8807 4.47911 34.6208 4.27603C34.3608 4.07295 34.0643 3.92064 33.7313 3.8191C33.4023 3.7135 33.0469 3.6607 32.6651 3.6607C31.9868 3.6607 31.3857 3.83129 30.8617 4.17246C30.3378 4.50958 29.9276 5.00509 29.6311 5.65901C29.3346 6.30887 29.1863 7.10292 29.1863 8.04115C29.1863 8.99563 29.3346 9.79983 29.6311 10.4537C29.9316 11.1036 30.3419 11.5951 30.8617 11.9281C31.3857 12.2571 31.9848 12.4216 32.659 12.4216C33.0327 12.4216 33.382 12.3729 33.7069 12.2754C34.0359 12.1738 34.3304 12.0256 34.5903 11.8306C34.8543 11.6357 35.0757 11.396 35.2544 11.1117C35.4372 10.8274 35.5631 10.5025 35.6321 10.1369L37.9107 10.1491C37.8254 10.7421 37.6406 11.2986 37.3563 11.8184C37.076 12.3383 36.7084 12.7973 36.2535 13.1953C35.7986 13.5893 35.2666 13.898 34.6573 14.1214C34.0481 14.3407 33.3718 14.4504 32.6286 14.4504C31.5319 14.4504 30.5531 14.1965 29.692 13.6888C28.8309 13.1811 28.1527 12.448 27.6571 11.4895C27.1616 10.5309 26.9139 9.38148 26.9139 8.04115C26.9139 6.69675 27.1637 5.54732 27.6632 4.59284C28.1628 3.6343 28.8431 2.90118 29.7042 2.39348C30.5653 1.88577 31.54 1.63192 32.6286 1.63192C33.3231 1.63192 33.9689 1.7294 34.5659 1.92436C35.163 2.11932 35.6951 2.40566 36.1622 2.78339C36.6292 3.15706 37.0131 3.61602 37.3136 4.16028C37.6182 4.70047 37.8173 5.31784 37.9107 6.01237ZM42.5759 14.4687C41.983 14.4687 41.4488 14.363 40.9736 14.1518C40.5025 13.9366 40.1288 13.6198 39.8526 13.2014C39.5805 12.7831 39.4444 12.2673 39.4444 11.654C39.4444 11.1259 39.5419 10.6893 39.7369 10.3441C39.9318 9.99885 40.1979 9.72266 40.535 9.51551C40.8721 9.30837 41.2519 9.152 41.6743 9.0464C42.1007 8.93673 42.5414 8.85753 42.9963 8.80879C43.5446 8.75193 43.9894 8.70116 44.3306 8.65648C44.6717 8.60774 44.9195 8.53463 45.0738 8.43716C45.2322 8.33562 45.3114 8.17924 45.3114 7.96804V7.93149C45.3114 7.47252 45.1754 7.11713 44.9033 6.86531C44.6311 6.61349 44.2392 6.48758 43.7274 6.48758C43.1872 6.48758 42.7587 6.60537 42.4419 6.84094C42.1292 7.07652 41.918 7.35474 41.8083 7.6756L39.7491 7.38317C39.9115 6.81454 40.1796 6.33933 40.5533 5.95754C40.9269 5.57169 41.3839 5.28331 41.9241 5.09242C42.4643 4.89746 43.0613 4.79998 43.7152 4.79998C44.1661 4.79998 44.6149 4.85278 45.0617 4.95838C45.5084 5.06399 45.9166 5.23864 46.2862 5.48233C46.6558 5.72197 46.9523 6.04893 47.1757 6.46321C47.4032 6.8775 47.5169 7.39535 47.5169 8.01678V14.2798H45.3967V12.9943H45.3236C45.1896 13.2542 45.0007 13.4979 44.757 13.7254C44.5174 13.9488 44.2148 14.1295 43.8493 14.2676C43.4878 14.4016 43.0633 14.4687 42.5759 14.4687ZM43.1486 12.8481C43.5914 12.8481 43.9752 12.7607 44.3001 12.5861C44.625 12.4074 44.8748 12.1718 45.0495 11.8794C45.2282 11.5869 45.3175 11.2681 45.3175 10.9229V9.82013C45.2485 9.877 45.1307 9.9298 44.9642 9.97854C44.8017 10.0273 44.6189 10.0699 44.4159 10.1065C44.2128 10.143 44.0117 10.1755 43.8127 10.204C43.6137 10.2324 43.4411 10.2568 43.2949 10.2771C42.9659 10.3217 42.6714 10.3949 42.4115 10.4964C42.1515 10.5979 41.9464 10.7401 41.7961 10.9229C41.6458 11.1016 41.5707 11.3331 41.5707 11.6174C41.5707 12.0236 41.7189 12.3302 42.0154 12.5374C42.3119 12.7445 42.6897 12.8481 43.1486 12.8481ZM49.7345 17.789V4.92183H51.9034V6.4693H52.0314C52.1451 6.24185 52.3055 6.00019 52.5127 5.74431C52.7198 5.48436 53.0001 5.26301 53.3534 5.08023C53.7068 4.8934 54.1576 4.79998 54.706 4.79998C55.4289 4.79998 56.0808 4.98479 56.6616 5.35439C57.2465 5.71994 57.7095 6.26216 58.0507 6.98107C58.3959 7.69591 58.5685 8.57322 58.5685 9.61299C58.5685 10.6406 58.4 11.5138 58.0629 12.2327C57.7258 12.9516 57.2668 13.5 56.686 13.8777C56.1052 14.2554 55.4472 14.4443 54.712 14.4443C54.1759 14.4443 53.7312 14.3549 53.3778 14.1762C53.0244 13.9975 52.7401 13.7822 52.5249 13.5304C52.3137 13.2745 52.1492 13.0329 52.0314 12.8054H51.94V17.789H49.7345ZM51.8973 9.60081C51.8973 10.206 51.9826 10.736 52.1532 11.1909C52.3279 11.6458 52.5777 12.0012 52.9026 12.2571C53.2316 12.5089 53.6296 12.6348 54.0967 12.6348C54.5841 12.6348 54.9923 12.5049 55.3213 12.2449C55.6503 11.9809 55.898 11.6215 56.0646 11.1666C56.2351 10.7076 56.3204 10.1857 56.3204 9.60081C56.3204 9.02 56.2372 8.50417 56.0707 8.05333C55.9041 7.60249 55.6564 7.24913 55.3274 6.99325C54.9984 6.73737 54.5882 6.60943 54.0967 6.60943C53.6256 6.60943 53.2255 6.73331 52.8965 6.98107C52.5675 7.22883 52.3177 7.57609 52.1471 8.02287C51.9806 8.46965 51.8973 8.99563 51.8973 9.60081ZM60.4572 14.2798V4.92183H62.6627V14.2798H60.4572ZM61.566 3.59368C61.2167 3.59368 60.9162 3.47793 60.6643 3.24642C60.4125 3.01084 60.2866 2.72856 60.2866 2.39957C60.2866 2.06652 60.4125 1.78423 60.6643 1.55272C60.9162 1.31715 61.2167 1.19936 61.566 1.19936C61.9194 1.19936 62.2199 1.31715 62.4677 1.55272C62.7195 1.78423 62.8454 2.06652 62.8454 2.39957C62.8454 2.72856 62.7195 3.01084 62.4677 3.24642C62.2199 3.47793 61.9194 3.59368 61.566 3.59368ZM69.6034 4.92183V6.62771H64.2238V4.92183H69.6034ZM65.552 2.67982H67.7574V11.4651C67.7574 11.7616 67.8021 11.989 67.8915 12.1474C67.9849 12.3018 68.1067 12.4074 68.257 12.4642C68.4073 12.5211 68.5738 12.5495 68.7566 12.5495C68.8947 12.5495 69.0206 12.5394 69.1343 12.5191C69.2521 12.4988 69.3415 12.4805 69.4024 12.4642L69.774 14.1884C69.6562 14.229 69.4877 14.2737 69.2684 14.3224C69.0531 14.3712 68.7891 14.3996 68.4763 14.4077C67.924 14.424 67.4264 14.3407 66.9837 14.1579C66.541 13.9711 66.1897 13.6827 65.9297 13.2928C65.6738 12.9029 65.5479 12.4155 65.552 11.8306V2.67982ZM74.1408 14.4687C73.5478 14.4687 73.0137 14.363 72.5385 14.1518C72.0673 13.9366 71.6936 13.6198 71.4175 13.2014C71.1453 12.7831 71.0093 12.2673 71.0093 11.654C71.0093 11.1259 71.1067 10.6893 71.3017 10.3441C71.4967 9.99885 71.7627 9.72266 72.0998 9.51551C72.4369 9.30837 72.8167 9.152 73.2391 9.0464C73.6656 8.93673 74.1062 8.85753 74.5611 8.80879C75.1095 8.75193 75.5542 8.70116 75.8954 8.65648C76.2366 8.60774 76.4843 8.53463 76.6387 8.43716C76.7971 8.33562 76.8763 8.17924 76.8763 7.96804V7.93149C76.8763 7.47252 76.7402 7.11713 76.4681 6.86531C76.1959 6.61349 75.804 6.48758 75.2922 6.48758C74.752 6.48758 74.3235 6.60537 74.0067 6.84094C73.694 7.07652 73.4828 7.35474 73.3731 7.6756L71.3139 7.38317C71.4763 6.81454 71.7444 6.33933 72.1181 5.95754C72.4918 5.57169 72.9487 5.28331 73.4889 5.09242C74.0291 4.89746 74.6261 4.79998 75.28 4.79998C75.7309 4.79998 76.1797 4.85278 76.6265 4.95838C77.0733 5.06399 77.4814 5.23864 77.851 5.48233C78.2207 5.72197 78.5172 6.04893 78.7405 6.46321C78.968 6.8775 79.0817 7.39535 79.0817 8.01678V14.2798H76.9616V12.9943H76.8884C76.7544 13.2542 76.5655 13.4979 76.3219 13.7254C76.0822 13.9488 75.7796 14.1295 75.4141 14.2676C75.0526 14.4016 74.6282 14.4687 74.1408 14.4687ZM74.7135 12.8481C75.1562 12.8481 75.54 12.7607 75.8649 12.5861C76.1899 12.4074 76.4396 12.1718 76.6143 11.8794C76.793 11.5869 76.8824 11.2681 76.8824 10.9229V9.82013C76.8133 9.877 76.6955 9.9298 76.529 9.97854C76.3665 10.0273 76.1838 10.0699 75.9807 10.1065C75.7776 10.143 75.5765 10.1755 75.3775 10.204C75.1785 10.2324 75.0059 10.2568 74.8597 10.2771C74.5307 10.3217 74.2362 10.3949 73.9763 10.4964C73.7163 10.5979 73.5112 10.7401 73.3609 10.9229C73.2107 11.1016 73.1355 11.3331 73.1355 11.6174C73.1355 12.0236 73.2838 12.3302 73.5803 12.5374C73.8768 12.7445 74.2545 12.8481 74.7135 12.8481ZM83.5048 1.80251V14.2798H81.2994V1.80251H83.5048ZM85.7727 14.2798V4.92183H87.9782V14.2798H85.7727ZM86.8815 3.59368C86.5322 3.59368 86.2317 3.47793 85.9799 3.24642C85.728 3.01084 85.6021 2.72856 85.6021 2.39957C85.6021 2.06652 85.728 1.78423 85.9799 1.55272C86.2317 1.31715 86.5322 1.19936 86.8815 1.19936C87.2349 1.19936 87.5355 1.31715 87.7832 1.55272C88.035 1.78423 88.1609 2.06652 88.1609 2.39957C88.1609 2.72856 88.035 3.01084 87.7832 3.24642C87.5355 3.47793 87.2349 3.59368 86.8815 3.59368ZM90.1242 14.2798V12.8785L94.9494 6.82876V6.74956H90.2826V4.92183H97.6484V6.42666L93.0547 12.3729V12.4521H97.8068V14.2798H90.1242ZM103.754 14.4626C102.816 14.4626 102.006 14.2676 101.324 13.8777C100.645 13.4837 100.123 12.9273 99.7579 12.2084C99.3923 11.4854 99.2095 10.6345 99.2095 9.65564C99.2095 8.69304 99.3923 7.84822 99.7579 7.12119C100.127 6.3901 100.643 5.82148 101.305 5.41532C101.967 5.00509 102.745 4.79998 103.639 4.79998C104.215 4.79998 104.76 4.8934 105.272 5.08023C105.787 5.26301 106.242 5.54732 106.636 5.93317C107.034 6.31902 107.347 6.81048 107.574 7.40754C107.802 8.00053 107.916 8.70725 107.916 9.5277V10.204H100.245V8.71741H105.802C105.797 8.295 105.706 7.9193 105.527 7.59031C105.349 7.25726 105.099 6.99528 104.778 6.80439C104.461 6.61349 104.092 6.51804 103.669 6.51804C103.218 6.51804 102.822 6.62771 102.481 6.84703C102.14 7.0623 101.874 7.34661 101.683 7.69997C101.496 8.04927 101.401 8.43309 101.397 8.85144V10.1491C101.397 10.6934 101.496 11.1605 101.695 11.5504C101.894 11.9362 102.172 12.2327 102.53 12.4399C102.887 12.643 103.306 12.7445 103.785 12.7445C104.106 12.7445 104.396 12.6998 104.656 12.6105C104.916 12.517 105.142 12.381 105.332 12.2023C105.523 12.0236 105.668 11.8022 105.765 11.5382L107.824 11.7697C107.694 12.314 107.446 12.7892 107.081 13.1953C106.719 13.5974 106.256 13.9102 105.692 14.1336C105.127 14.3529 104.482 14.4626 103.754 14.4626Z"
                  fill="#FBFBFB"
                />
              </g>
              <defs>
                <clipPath id="clip0_836_2456">
                  <rect
                    width="109"
                    height="18"
                    fill="white"
                    transform="translate(0 0.279785)"
                  />
                </clipPath>
                <clipPath id="clip1_836_2456">
                  <rect
                    width="18"
                    height="18"
                    fill="white"
                    transform="translate(0 0.279785)"
                  />
                </clipPath>
                <clipPath id="clip2_836_2456">
                  <rect
                    width="18"
                    height="18"
                    fill="white"
                    transform="translate(0 0.279785)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>

          {/* 2nd column */}
          <div>
            <p className="text-md font-bold dark:text-white"> Product </p>
            <ul className="flex flex-col gap-3 mt-3">
              <li>
                <Link to={'#'} className="text-[#9B9CA1]">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to={'#'} className="text-[#9B9CA1]">
                  Features
                </Link>
              </li>
              <li>
                <Link to={'#'} className="text-[#9B9CA1]">
                  Integration
                </Link>
              </li>
              <li>
                <Link to={'#'} className="text-[#9B9CA1]">
                  Changelog
                </Link>
              </li>
            </ul>
          </div>

          {/* 3rd column */}
          <div>
            <p className="text-md font-bold dark:text-white"> Company </p>
            <ul className="flex flex-col gap-3 mt-3">
              <li>
                <Link to={'/about'} className="text-[#9B9CA1]">
                  About
                </Link>
              </li>
              <li>
                <Link to={'#'} className="text-[#9B9CA1]">
                  Blog
                </Link>
              </li>
              <li>
                <Link to={'#'} className="text-[#9B9CA1]">
                  Customers
                </Link>
              </li>
              <li>
                <Link to={'#'} className="text-[#9B9CA1] flex gap-3">
                  Careers
                  <svg
                    width="64"
                    height="26"
                    viewBox="0 0 64 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_836_2500)">
                      <rect
                        x="0.919922"
                        y="0.879883"
                        width="62.27"
                        height="24.8"
                        rx="12.4"
                        fill="dark:#112220"
                      />
                      <path
                        d="M13.9139 17.8799V8.07988H15.3979V12.2799H20.1439V8.07988H21.6279V17.8799H20.1439V13.4979H15.3979V17.8799H13.9139ZM24.405 9.61988C24.125 9.61988 23.8916 9.53588 23.705 9.36788C23.5276 9.19055 23.439 8.97122 23.439 8.70988C23.439 8.44855 23.5276 8.23388 23.705 8.06588C23.8916 7.88855 24.125 7.79988 24.405 7.79988C24.685 7.79988 24.9136 7.88855 25.091 8.06588C25.2776 8.23388 25.371 8.44855 25.371 8.70988C25.371 8.97122 25.2776 9.19055 25.091 9.36788C24.9136 9.53588 24.685 9.61988 24.405 9.61988ZM23.663 17.8799V10.9359H25.147V17.8799H23.663ZM27.106 17.8799V10.9359H28.436L28.562 12.2519C28.8046 11.7945 29.1406 11.4352 29.57 11.1739C30.0086 10.9032 30.536 10.7679 31.152 10.7679V12.3219H30.746C30.3353 12.3219 29.9666 12.3919 29.64 12.5319C29.3226 12.6625 29.066 12.8912 28.87 13.2179C28.6833 13.5352 28.59 13.9785 28.59 14.5479V17.8799H27.106ZM33.2643 9.61988C32.9843 9.61988 32.751 9.53588 32.5643 9.36788C32.387 9.19055 32.2983 8.97122 32.2983 8.70988C32.2983 8.44855 32.387 8.23388 32.5643 8.06588C32.751 7.88855 32.9843 7.79988 33.2643 7.79988C33.5443 7.79988 33.773 7.88855 33.9503 8.06588C34.137 8.23388 34.2303 8.44855 34.2303 8.70988C34.2303 8.97122 34.137 9.19055 33.9503 9.36788C33.773 9.53588 33.5443 9.61988 33.2643 9.61988ZM32.5223 17.8799V10.9359H34.0063V17.8799H32.5223ZM35.9653 17.8799V10.9359H37.2813L37.3933 12.1539C37.608 11.7245 37.9207 11.3885 38.3313 11.1459C38.7513 10.8939 39.232 10.7679 39.7733 10.7679C40.6133 10.7679 41.2713 11.0292 41.7473 11.5519C42.2327 12.0745 42.4753 12.8539 42.4753 13.8899V17.8799H41.0053V14.0439C41.0053 12.6999 40.4547 12.0279 39.3533 12.0279C38.8027 12.0279 38.3453 12.2239 37.9813 12.6159C37.6267 13.0079 37.4493 13.5679 37.4493 14.2959V17.8799H35.9653ZM47.0652 15.7519C46.7012 15.7519 46.3652 15.7099 46.0572 15.6259L45.4552 16.2139C45.5578 16.2792 45.6838 16.3352 45.8332 16.3819C45.9825 16.4285 46.1925 16.4705 46.4632 16.5079C46.7338 16.5452 47.1025 16.5825 47.5692 16.6199C48.4932 16.7039 49.1605 16.9279 49.5712 17.2919C49.9818 17.6465 50.1872 18.1225 50.1872 18.7199C50.1872 19.1305 50.0752 19.5179 49.8512 19.8819C49.6365 20.2552 49.2958 20.5539 48.8292 20.7779C48.3718 21.0112 47.7838 21.1279 47.0652 21.1279C46.0945 21.1279 45.3058 20.9412 44.6992 20.5679C44.1018 20.2039 43.8032 19.6485 43.8032 18.9019C43.8032 18.6125 43.8778 18.3232 44.0272 18.0339C44.1858 17.7539 44.4332 17.4879 44.7692 17.2359C44.5732 17.1519 44.4005 17.0632 44.2512 16.9699C44.1112 16.8672 43.9852 16.7645 43.8732 16.6619V16.3259L45.0772 15.0939C44.5358 14.6272 44.2652 14.0159 44.2652 13.2599C44.2652 12.8025 44.3725 12.3872 44.5872 12.0139C44.8112 11.6312 45.1332 11.3279 45.5532 11.1039C45.9732 10.8799 46.4772 10.7679 47.0652 10.7679C47.4572 10.7679 47.8212 10.8239 48.1572 10.9359H50.7472V11.9159L49.5152 11.9859C49.7392 12.3685 49.8512 12.7932 49.8512 13.2599C49.8512 13.7265 49.7392 14.1465 49.5152 14.5199C49.3005 14.8932 48.9832 15.1919 48.5632 15.4159C48.1525 15.6399 47.6532 15.7519 47.0652 15.7519ZM47.0652 14.5899C47.4945 14.5899 47.8398 14.4779 48.1012 14.2539C48.3718 14.0205 48.5072 13.6939 48.5072 13.2739C48.5072 12.8445 48.3718 12.5179 48.1012 12.2939C47.8398 12.0699 47.4945 11.9579 47.0652 11.9579C46.6265 11.9579 46.2718 12.0699 46.0012 12.2939C45.7398 12.5179 45.6092 12.8445 45.6092 13.2739C45.6092 13.6939 45.7398 14.0205 46.0012 14.2539C46.2718 14.4779 46.6265 14.5899 47.0652 14.5899ZM45.2032 18.7619C45.2032 19.1632 45.3805 19.4619 45.7352 19.6579C46.0898 19.8632 46.5332 19.9659 47.0652 19.9659C47.5785 19.9659 47.9938 19.8539 48.3112 19.6299C48.6285 19.4152 48.7872 19.1259 48.7872 18.7619C48.7872 18.4912 48.6798 18.2579 48.4652 18.0619C48.2505 17.8752 47.8445 17.7585 47.2472 17.7119C46.7992 17.6839 46.4025 17.6419 46.0572 17.5859C45.7305 17.7632 45.5065 17.9545 45.3852 18.1599C45.2638 18.3652 45.2032 18.5659 45.2032 18.7619Z"
                        fill="#33C6AB"
                      />
                      <rect
                        x="1.41992"
                        y="1.37988"
                        width="61.27"
                        height="23.8"
                        rx="11.9"
                        stroke="#236456"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_836_2500">
                        <rect
                          x="0.919922"
                          y="0.879883"
                          width="62.27"
                          height="24.8"
                          rx="12.4"
                          fill="white"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
              </li>
            </ul>
          </div>

          {/* 4th column */}
          <div>
            <p className="text-md font-bold dark:text-white"> Resources </p>
            <ul className="flex flex-col gap-3 mt-3">
              <li>
                <Link to={'#'} className="text-[#9B9CA1]">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to={'/contact'} className="text-[#9B9CA1]">
                  Contact
                </Link>
              </li>
              <li>
                <Link to={'#'} className="text-[#9B9CA1]">
                  Terms of service
                </Link>
              </li>
              <li>
                <Link to={'#'} className="text-[#9B9CA1]">
                  Privacy policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* copyright */}
        <div className="flex flex-col md:flex-row justify-center md:justify-between pt-5 border-t-2 border-t-[#9ca3af0f] mt-10 gap-3 md:gap-0">
          <div className="text-[#9B9CA1] text-center md:text-left">
            © 2024 Capitalize. All rights reserved.
          </div>

          <div className="lg:justify-end flex justify-center gap-3">
            {/* twitter */}
            <a href="">
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_836_2542)">
                  <path
                    d="M3.97222 2.63965C3.26922 2.63965 2.69922 3.20965 2.69922 3.91265V15.3666C2.69922 16.0706 3.26922 16.6396 3.97222 16.6396H15.4262C16.1302 16.6396 16.6992 16.0696 16.6992 15.3666V3.91265C16.6992 3.20965 16.1292 2.63965 15.4262 2.63965H3.97222ZM5.65722 5.82165H8.59222L10.3042 8.26965L12.4242 5.82165H13.3472L10.7192 8.86365L13.9342 13.4576H10.9992L9.09922 10.7406L6.75222 13.4576H5.81422L8.68122 10.1456L5.65722 5.82165ZM7.07722 6.57465L11.3742 12.7006H12.5132L8.21322 6.57465H7.07722Z"
                    fill="#9B9CA1"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_836_2542">
                    <rect
                      width="18"
                      height="18"
                      fill="white"
                      transform="translate(0.699219 0.639648)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </a>
            {/* linkedin */}
            <a href="">
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_836_2545)">
                  <path
                    d="M12.5792 2.63965C16.3992 2.63965 16.6992 2.93965 16.6992 6.75965V12.5196C16.6992 16.3396 16.3992 16.6396 12.5792 16.6396H6.81922C2.99922 16.6396 2.69922 16.3396 2.69922 12.5196V6.75965C2.69922 2.93965 2.99922 2.63965 6.81922 2.63965H12.5792ZM7.25922 13.4896V7.79465H5.48922V13.4896H7.25922ZM6.37422 6.97965C6.51252 6.98382 6.65024 6.96016 6.77922 6.91008C6.9082 6.86001 7.0258 6.78453 7.12505 6.68813C7.2243 6.59173 7.30318 6.47638 7.35699 6.34892C7.41081 6.22145 7.43847 6.08448 7.43834 5.94612C7.43821 5.80776 7.41028 5.67084 7.35621 5.54348C7.30215 5.41612 7.22305 5.30092 7.12362 5.20471C7.02418 5.10851 6.90643 5.03326 6.77735 4.98343C6.64828 4.9336 6.51051 4.91021 6.37222 4.91465C6.23656 4.91478 6.10226 4.94163 5.97698 4.99366C5.8517 5.0457 5.7379 5.1219 5.64207 5.21791C5.44853 5.41183 5.33995 5.67468 5.34022 5.94865C5.34048 6.22262 5.44957 6.48526 5.64348 6.6788C5.8374 6.87233 6.10025 6.97991 6.37422 6.97965ZM13.8992 13.4896V10.3656C13.8992 8.83265 13.5682 7.65265 11.7752 7.65265C10.9152 7.65265 10.3372 8.12465 10.1012 8.57265H10.0772V7.79465H8.37922V13.4896H10.1482V10.6726C10.1482 9.92965 10.2902 9.20965 11.2112 9.20965C12.1182 9.20965 12.1312 10.0596 12.1312 10.7196V13.4896H13.8992Z"
                    fill="#9B9CA1"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_836_2545">
                    <rect
                      width="18"
                      height="18"
                      fill="white"
                      transform="translate(0.699219 0.639648)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </a>
            {/* github */}
            <a href="">
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_836_2553)">
                  <path
                    d="M13.2112 3.60183C12.1512 2.96383 10.9362 2.63083 9.69922 2.63983C8.46222 2.63083 7.24622 2.96383 6.18622 3.60183C5.12322 4.23483 4.24522 5.13483 3.64022 6.21283C3.01022 7.31383 2.69922 8.51383 2.69922 9.81583C2.69922 11.3778 3.14422 12.7848 4.03422 14.0328C4.92422 15.2798 6.07322 16.1458 7.48322 16.6238C7.64822 16.6558 7.77022 16.6338 7.84722 16.5588C7.92522 16.4868 7.96922 16.3848 7.96622 16.2788L7.96222 15.7738C7.95922 15.4558 7.95722 15.1788 7.95722 14.9418L7.74822 14.9788C7.58122 15.0058 7.41122 15.0168 7.24222 15.0108C7.02922 15.0078 6.81722 14.9858 6.60822 14.9458C6.38622 14.9028 6.17722 14.8068 6.00022 14.6658C5.81222 14.5188 5.67222 14.3188 5.59922 14.0918L5.50822 13.8758C5.43122 13.7058 5.33522 13.5468 5.22122 13.4008C5.08922 13.2258 4.95822 13.1068 4.82422 13.0438L4.76022 12.9978C4.71722 12.9648 4.67722 12.9278 4.64122 12.8868C4.60822 12.8478 4.58122 12.8028 4.56122 12.7558C4.54322 12.7108 4.55722 12.6758 4.60522 12.6478C4.65422 12.6178 4.74222 12.6058 4.86922 12.6058L5.05322 12.6338C5.17322 12.6588 5.32422 12.7328 5.50322 12.8568C5.68322 12.9818 5.83022 13.1438 5.94422 13.3438C6.08422 13.5978 6.25322 13.7928 6.45122 13.9268C6.64822 14.0608 6.84722 14.1288 7.04922 14.1288C7.24722 14.1288 7.42122 14.1118 7.56722 14.0808C7.71322 14.0508 7.85022 14.0028 7.97722 13.9408C8.03322 13.5238 8.18122 13.2028 8.42322 12.9788C8.10822 12.9468 7.79722 12.8898 7.49022 12.8098C7.19022 12.7258 6.90222 12.6028 6.63422 12.4448C6.35022 12.2878 6.10022 12.0748 5.90022 11.8188C5.70622 11.5718 5.54622 11.2438 5.42222 10.8408C5.29122 10.3848 5.22922 9.91283 5.23622 9.43883C5.23622 8.68583 5.47522 8.04383 5.95622 7.51383C5.73122 6.94683 5.75122 6.31183 6.02022 5.60683C6.19522 5.55183 6.45622 5.59283 6.80322 5.73283C7.14922 5.87283 7.40222 5.99283 7.56422 6.09183C7.72522 6.19183 7.85422 6.27583 7.95122 6.34583C8.52022 6.18483 9.10822 6.10383 9.69922 6.10483C10.3012 6.10483 10.8842 6.18583 11.4492 6.34783L11.7952 6.12283C12.0322 5.97483 12.3122 5.83783 12.6342 5.71183C12.9572 5.58783 13.2032 5.55483 13.3742 5.60983C13.6472 6.31383 13.6712 6.94783 13.4462 7.51683C13.9262 8.04583 14.1662 8.68683 14.1662 9.43983C14.1662 9.96983 14.1042 10.4378 13.9792 10.8458C13.8552 11.2548 13.6942 11.5828 13.4952 11.8288C13.2912 12.0808 13.0412 12.2918 12.7582 12.4498C12.4642 12.6178 12.1772 12.7388 11.9022 12.8138C11.6252 12.8888 11.3152 12.9458 10.9672 12.9808C11.2832 13.2608 11.4412 13.7028 11.4412 14.3078V16.2798C11.4382 16.3848 11.4792 16.4868 11.5552 16.5598C11.6312 16.6348 11.7512 16.6558 11.9152 16.6248C13.3262 16.1438 14.4752 15.2808 15.3642 14.0308C16.2532 12.7848 16.6992 11.3778 16.6992 9.81483C16.7092 8.55283 16.3852 7.31083 15.7602 6.21383C15.1542 5.13583 14.2762 4.23583 13.2142 3.60283H13.2122L13.2112 3.60183Z"
                    fill="#9B9CA1"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_836_2553">
                    <rect
                      width="18"
                      height="18"
                      fill="white"
                      transform="translate(0.699219 0.639648)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </a>
            {/* discord */}
            <a href="">
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_836_2559)">
                  <path
                    d="M15.2434 4.63463C14.205 4.16537 13.1108 3.83098 11.9874 3.63963C11.9772 3.6376 11.9666 3.63882 11.9571 3.64312C11.9476 3.64743 11.9397 3.6546 11.9344 3.66363C11.7857 3.92995 11.6505 4.20364 11.5294 4.48363C10.3168 4.30245 9.08405 4.30245 7.87145 4.48363C7.74946 4.20285 7.61191 3.92909 7.45945 3.66363C7.45418 3.65488 7.44641 3.64792 7.43714 3.64364C7.42786 3.63936 7.41752 3.63796 7.40745 3.63963C6.28245 3.82963 5.18745 4.16463 4.15045 4.63363C4.14177 4.63733 4.13444 4.64361 4.12945 4.65163C2.05445 7.70163 1.48645 10.6756 1.76545 13.6126C1.76608 13.6198 1.76818 13.6268 1.77162 13.6332C1.77506 13.6396 1.77977 13.6452 1.78545 13.6496C2.99658 14.5314 4.34744 15.2031 5.78145 15.6366C5.79151 15.6396 5.80224 15.6395 5.81224 15.6363C5.82223 15.6331 5.83102 15.6269 5.83745 15.6186C6.14603 15.2063 6.41933 14.7688 6.65445 14.3106C6.65929 14.3012 6.66093 14.2904 6.65913 14.28C6.65732 14.2695 6.65217 14.2599 6.64445 14.2526C6.63969 14.2475 6.63389 14.2434 6.62745 14.2406C6.19678 14.0786 5.7795 13.883 5.37945 13.6556C5.37214 13.6515 5.36598 13.6457 5.36154 13.6386C5.35709 13.6315 5.3545 13.6234 5.354 13.615C5.35351 13.6066 5.35512 13.5983 5.35869 13.5907C5.36226 13.5831 5.36768 13.5766 5.37445 13.5716C5.45745 13.5096 5.54145 13.4456 5.62145 13.3816C5.62852 13.3756 5.63713 13.3716 5.64631 13.3702C5.6555 13.3688 5.66489 13.37 5.67345 13.3736C8.29245 14.5506 11.1264 14.5506 13.7144 13.3736C13.7229 13.3698 13.7323 13.3684 13.7414 13.3696C13.7505 13.3706 13.7592 13.3741 13.7664 13.3796C13.8464 13.4446 13.9304 13.5096 14.0154 13.5716C14.0221 13.5766 14.0274 13.5831 14.0309 13.5906C14.0344 13.5981 14.0359 13.6064 14.0354 13.6146C14.0351 13.623 14.0326 13.6312 14.0282 13.6383C14.0238 13.6455 14.0177 13.6514 14.0104 13.6556C13.6124 13.8856 13.1944 14.0806 12.7624 14.2406C12.7557 14.243 12.7495 14.2468 12.7443 14.2518C12.7391 14.2569 12.7351 14.2629 12.7324 14.2696C12.7302 14.2761 12.7292 14.2831 12.7298 14.2899C12.7303 14.2968 12.7322 14.3035 12.7354 14.3096C12.9754 14.7656 13.2474 15.2026 13.5514 15.6176C13.5575 15.6264 13.5662 15.633 13.5762 15.6366C13.5863 15.6402 13.5972 15.6406 13.6074 15.6376C15.0438 15.2049 16.3969 14.5328 17.6094 13.6496C17.6155 13.6454 17.6205 13.6399 17.6241 13.6335C17.6277 13.6271 17.6299 13.62 17.6304 13.6126C17.9644 10.2176 17.0714 7.26763 15.2644 4.65263C15.2604 4.64375 15.2533 4.63664 15.2444 4.63263L15.2434 4.63463ZM7.04545 11.8246C6.25745 11.8246 5.60845 11.1126 5.60845 10.2386C5.60845 9.36363 6.24545 8.65163 7.04545 8.65163C7.85345 8.65163 8.49645 9.37063 8.48445 10.2386C8.48445 11.1126 7.84645 11.8246 7.04545 11.8246ZM12.3624 11.8246C11.5744 11.8246 10.9244 11.1126 10.9244 10.2386C10.9244 9.36363 11.5614 8.65163 12.3624 8.65163C13.1694 8.65163 13.8124 9.37063 13.8004 10.2386C13.8004 11.1126 13.1694 11.8246 12.3624 11.8246Z"
                    fill="#9B9CA1"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_836_2559">
                    <rect
                      width="18"
                      height="18"
                      fill="white"
                      transform="translate(0.699219 0.639648)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
