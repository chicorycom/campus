export default function PromoUser({className, image, name="Assane Sarr"}) {
  return (
    <svg className={className} width="74" height="70" fill="none">
        <path d="M5 2.96v7.34l1.97-1.88.29-.1h3.15L5 2.97ZM17.08 3.44c0-.46.07-.9.21-1.32.15-.42.35-.8.62-1.12.26-.31.58-.57.92-.74.35-.17.71-.26 1.09-.26H70.8c.75 0 1.48.36 2 1 .54.65.84 1.52.84 2.44v7.74c0 .91-.3 1.79-.83 2.43-.53.65-1.26 1-2.01 1H19.92c-.38 0-.74-.08-1.09-.25a2.87 2.87 0 0 1-.92-.75c-.27-.32-.47-.7-.62-1.11a4.07 4.07 0 0 1-.21-1.32V3.44Z" fill="#06BDFC"></path>
        <text x="20" y="10" fill="black" font-size="0.6em">{name}</text>
        <g filter="url(#promo-user-right_svg__a)"><circle cx="27.88" cy="29.24" r="10.8" fill="url(#promo-user-right_svg__b)"></circle></g>
        <defs>
            <pattern id="promo-user-right_svg__b" patternContentUnits="objectBoundingBox" width="1" height="1"><use href="#promo-user-right_svg__c" transform="scale(.0039)"></use></pattern>
            <filter id="promo-user-right_svg__a" x="0.55" y="14.62" width="54.66" height="54.66" filterUnits="userSpaceOnUse" color-interpolationfilters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feMorphology radius="2.54" in="SourceAlpha" result="effect1_dropShadow_2402_21450"></feMorphology><feOffset dy="12.71"></feOffset><feGaussianBlur stdDeviation="9.53"></feGaussianBlur><feColorMatrix values="0 0 0 0 0.0196078 0 0 0 0 0.0980392 0 0 0 0 0.176471 0 0 0 0.35 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_2402_21450"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow_2402_21450" result="shape"></feBlend></filter>
            <image id="promo-user-right_svg__c" width="256" height="256" href={image} />
        </defs>
    </svg>
  )
}
