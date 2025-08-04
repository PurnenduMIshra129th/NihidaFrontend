// eslint-disable-next-line @typescript-eslint/naming-convention
export const FacebookIcon = ({
  size = 24,
  color = "currentColor",
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    width={size}
    height={size}
    fill={color}
    {...props}
  >
    <path
      xmlns="http://www.w3.org/2000/svg"
      fill="#1877F2"
      d="M256 128C256 57.308 198.692 0 128 0C57.308 0 0 57.307 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.347-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.958 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"
    />
    <path
      xmlns="http://www.w3.org/2000/svg"
      fill="#FFF"
      d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A128.959 128.959 0 0 0 128 256a128.9 128.9 0 0 0 20-1.555V165h29.825"
    />
  </svg>
);
// eslint-disable-next-line @typescript-eslint/naming-convention
export const TwitterIcon = ({
  size = 24,
  color = "currentColor",
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 209"
    width={size}
    height={size}
    fill={color}
    {...props}
  >
    <path
      xmlns="http://www.w3.org/2000/svg"
      fill="#55acee"
      d="M256 25.45a105.04 105.04 0 0 1-30.166 8.27c10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52c0 4.117.465 8.125 1.36 11.97c-43.65-2.191-82.35-23.1-108.255-54.876c-4.52 7.757-7.11 16.78-7.11 26.404c0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 0 1-23.79-6.57c-.003.22-.003.44-.003.661c0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475c-17.975 14.086-40.622 22.483-65.228 22.483c-4.24 0-8.42-.249-12.529-.734c23.243 14.902 50.85 23.597 80.51 23.597c96.607 0 149.434-80.031 149.434-149.435c0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 0 0 256 25.45"
    />
  </svg>
);
// eslint-disable-next-line @typescript-eslint/naming-convention
export const TelegramIcon = ({
  size = 24,
  color = "currentColor",
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    width={size}
    height={size}
    fill={color}
    {...props}
  >
    <defs xmlns="http://www.w3.org/2000/svg">
      <linearGradient id="logosTelegram0" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#2AABEE" />
        <stop offset="100%" stopColor="#229ED9" />
      </linearGradient>
    </defs>
    <path
      xmlns="http://www.w3.org/2000/svg"
      fill="url(#logosTelegram0)"
      d="M128 0C94.06 0 61.48 13.494 37.5 37.49A128.038 128.038 0 0 0 0 128c0 33.934 13.5 66.514 37.5 90.51C61.48 242.506 94.06 256 128 256s66.52-13.494 90.5-37.49c24-23.996 37.5-56.576 37.5-90.51c0-33.934-13.5-66.514-37.5-90.51C194.52 13.494 161.94 0 128 0Z"
    />
    <path
      xmlns="http://www.w3.org/2000/svg"
      fill="#FFF"
      d="M57.94 126.648c37.32-16.256 62.2-26.974 74.64-32.152c35.56-14.786 42.94-17.354 47.76-17.441c1.06-.017 3.42.245 4.96 1.49c1.28 1.05 1.64 2.47 1.82 3.467c.16.996.38 3.266.2 5.038c-1.92 20.24-10.26 69.356-14.5 92.026c-1.78 9.592-5.32 12.808-8.74 13.122c-7.44.684-13.08-4.912-20.28-9.63c-11.26-7.386-17.62-11.982-28.56-19.188c-12.64-8.328-4.44-12.906 2.76-20.386c1.88-1.958 34.64-31.748 35.26-34.45c.08-.338.16-1.598-.6-2.262c-.74-.666-1.84-.438-2.64-.258c-1.14.256-19.12 12.152-54 35.686c-5.1 3.508-9.72 5.218-13.88 5.128c-4.56-.098-13.36-2.584-19.9-4.708c-8-2.606-14.38-3.984-13.82-8.41c.28-2.304 3.46-4.662 9.52-7.072Z"
    />
  </svg>
);
// eslint-disable-next-line @typescript-eslint/naming-convention
export const YoutubeIcon = ({
  size = 24,
  color = "currentColor",
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 180"
    width={size}
    height={size}
    fill={color}
    {...props}
  >
    <path
      xmlns="http://www.w3.org/2000/svg"
      fill="red"
      d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134Z"
    />
    <path
      xmlns="http://www.w3.org/2000/svg"
      fill="#FFF"
      d="m102.421 128.06l66.328-38.418l-66.328-38.418z"
    />
  </svg>
);

// eslint-disable-next-line @typescript-eslint/naming-convention
export const InstagramIcon = ({
  size = 24,
  color = "currentColor",
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    width={size}
    height={size}
    fill={color}
    {...props}
  >
    <g xmlns="http://www.w3.org/2000/svg" fill="none">
      <rect
        width="256"
        height="256"
        fill="url(#skillIconsInstagram0)"
        rx="60"
      />
      <rect
        width="256"
        height="256"
        fill="url(#skillIconsInstagram1)"
        rx="60"
      />
      <path
        fill="#fff"
        d="M128.009 28c-27.158 0-30.567.119-41.233.604c-10.646.488-17.913 2.173-24.271 4.646c-6.578 2.554-12.157 5.971-17.715 11.531c-5.563 5.559-8.98 11.138-11.542 17.713c-2.48 6.36-4.167 13.63-4.646 24.271c-.477 10.667-.602 14.077-.602 41.236s.12 30.557.604 41.223c.49 10.646 2.175 17.913 4.646 24.271c2.556 6.578 5.973 12.157 11.533 17.715c5.557 5.563 11.136 8.988 17.709 11.542c6.363 2.473 13.631 4.158 24.275 4.646c10.667.485 14.073.604 41.23.604c27.161 0 30.559-.119 41.225-.604c10.646-.488 17.921-2.173 24.284-4.646c6.575-2.554 12.146-5.979 17.702-11.542c5.563-5.558 8.979-11.137 11.542-17.712c2.458-6.361 4.146-13.63 4.646-24.272c.479-10.666.604-14.066.604-41.225s-.125-30.567-.604-41.234c-.5-10.646-2.188-17.912-4.646-24.27c-2.563-6.578-5.979-12.157-11.542-17.716c-5.562-5.562-11.125-8.979-17.708-11.53c-6.375-2.474-13.646-4.16-24.292-4.647c-10.667-.485-14.063-.604-41.23-.604h.031Zm-8.971 18.021c2.663-.004 5.634 0 8.971 0c26.701 0 29.865.096 40.409.575c9.75.446 15.042 2.075 18.567 3.444c4.667 1.812 7.994 3.979 11.492 7.48c3.5 3.5 5.666 6.833 7.483 11.5c1.369 3.52 3 8.812 3.444 18.562c.479 10.542.583 13.708.583 40.396c0 26.688-.104 29.855-.583 40.396c-.446 9.75-2.075 15.042-3.444 18.563c-1.812 4.667-3.983 7.99-7.483 11.488c-3.5 3.5-6.823 5.666-11.492 7.479c-3.521 1.375-8.817 3-18.567 3.446c-10.542.479-13.708.583-40.409.583c-26.702 0-29.867-.104-40.408-.583c-9.75-.45-15.042-2.079-18.57-3.448c-4.666-1.813-8-3.979-11.5-7.479s-5.666-6.825-7.483-11.494c-1.369-3.521-3-8.813-3.444-18.563c-.479-10.542-.575-13.708-.575-40.413c0-26.704.096-29.854.575-40.396c.446-9.75 2.075-15.042 3.444-18.567c1.813-4.667 3.983-8 7.484-11.5c3.5-3.5 6.833-5.667 11.5-7.483c3.525-1.375 8.819-3 18.569-3.448c9.225-.417 12.8-.542 31.437-.563v.025Zm62.351 16.604c-6.625 0-12 5.37-12 11.996c0 6.625 5.375 12 12 12s12-5.375 12-12s-5.375-12-12-12v.004Zm-53.38 14.021c-28.36 0-51.354 22.994-51.354 51.355c0 28.361 22.994 51.344 51.354 51.344c28.361 0 51.347-22.983 51.347-51.344c0-28.36-22.988-51.355-51.349-51.355h.002Zm0 18.021c18.409 0 33.334 14.923 33.334 33.334c0 18.409-14.925 33.334-33.334 33.334c-18.41 0-33.333-14.925-33.333-33.334c0-18.411 14.923-33.334 33.333-33.334Z"
      />
      <defs>
        <radialGradient
          id="skillIconsInstagram0"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(0 -253.715 235.975 0 68 275.717)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FD5" />
          <stop offset=".1" stopColor="#FD5" />
          <stop offset=".5" stopColor="#FF543E" />
          <stop offset="1" stopColor="#C837AB" />
        </radialGradient>
        <radialGradient
          id="skillIconsInstagram1"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(22.25952 111.2061 -458.39518 91.75449 -42.881 18.441)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3771C8" />
          <stop offset=".128" stopColor="#3771C8" />
          <stop offset="1" stopColor="#60F" stopOpacity="0" />
        </radialGradient>
      </defs>
    </g>
  </svg>
);
// eslint-disable-next-line @typescript-eslint/naming-convention
export const LinkedinIcon = ({
  size = 24,
  color = "currentColor",
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    width={size}
    height={size}
    fill={color}
    {...props}
  >
    <g xmlns="http://www.w3.org/2000/svg" fill="none">
      <rect width="256" height="256" fill="#fff" rx="60" />
      <rect width="256" height="256" fill="#0A66C2" rx="60" />
      <path
        fill="#fff"
        d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168c-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82c19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4ZM38 59.627c0 11.865 9.767 21.627 21.632 21.627c11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38C47.762 38 38 47.763 38 59.627Zm6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4Z"
      />
    </g>
  </svg>
);
// eslint-disable-next-line @typescript-eslint/naming-convention
export const WhatsappIcon = ({
  size = 24,
  color = "currentColor",
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 258"
    width={size}
    height={size}
    fill={color}
    {...props}
  >
    <defs xmlns="http://www.w3.org/2000/svg">
      <linearGradient
        id="logosWhatsappIcon0"
        x1="50%"
        x2="50%"
        y1="100%"
        y2="0%"
      >
        <stop offset="0%" stopColor="#1FAF38" />
        <stop offset="100%" stopColor="#60D669" />
      </linearGradient>
      <linearGradient
        id="logosWhatsappIcon1"
        x1="50%"
        x2="50%"
        y1="100%"
        y2="0%"
      >
        <stop offset="0%" stopColor="#F9F9F9" />
        <stop offset="100%" stopColor="#FFF" />
      </linearGradient>
    </defs>
    <path
      xmlns="http://www.w3.org/2000/svg"
      fill="url(#logosWhatsappIcon0)"
      d="M5.463 127.456c-.006 21.677 5.658 42.843 16.428 61.499L4.433 252.697l65.232-17.104a122.994 122.994 0 0 0 58.8 14.97h.054c67.815 0 123.018-55.183 123.047-123.01c.013-32.867-12.775-63.773-36.009-87.025c-23.23-23.25-54.125-36.061-87.043-36.076c-67.823 0-123.022 55.18-123.05 123.004"
    />
    <path
      xmlns="http://www.w3.org/2000/svg"
      fill="url(#logosWhatsappIcon1)"
      d="M1.07 127.416c-.007 22.457 5.86 44.38 17.014 63.704L0 257.147l67.571-17.717c18.618 10.151 39.58 15.503 60.91 15.511h.055c70.248 0 127.434-57.168 127.464-127.423c.012-34.048-13.236-66.065-37.3-90.15C194.633 13.286 162.633.014 128.536 0C58.276 0 1.099 57.16 1.071 127.416Zm40.24 60.376l-2.523-4.005c-10.606-16.864-16.204-36.352-16.196-56.363C22.614 69.029 70.138 21.52 128.576 21.52c28.3.012 54.896 11.044 74.9 31.06c20.003 20.018 31.01 46.628 31.003 74.93c-.026 58.395-47.551 105.91-105.943 105.91h-.042c-19.013-.01-37.66-5.116-53.922-14.765l-3.87-2.295l-40.098 10.513l10.706-39.082Z"
    />
    <path
      xmlns="http://www.w3.org/2000/svg"
      fill="#FFF"
      d="M96.678 74.148c-2.386-5.303-4.897-5.41-7.166-5.503c-1.858-.08-3.982-.074-6.104-.074c-2.124 0-5.575.799-8.492 3.984c-2.92 3.188-11.148 10.892-11.148 26.561c0 15.67 11.413 30.813 13.004 32.94c1.593 2.123 22.033 35.307 54.405 48.073c26.904 10.609 32.379 8.499 38.218 7.967c5.84-.53 18.844-7.702 21.497-15.139c2.655-7.436 2.655-13.81 1.859-15.142c-.796-1.327-2.92-2.124-6.105-3.716c-3.186-1.593-18.844-9.298-21.763-10.361c-2.92-1.062-5.043-1.592-7.167 1.597c-2.124 3.184-8.223 10.356-10.082 12.48c-1.857 2.129-3.716 2.394-6.9.801c-3.187-1.598-13.444-4.957-25.613-15.806c-9.468-8.442-15.86-18.867-17.718-22.056c-1.858-3.184-.199-4.91 1.398-6.497c1.431-1.427 3.186-3.719 4.78-5.578c1.588-1.86 2.118-3.187 3.18-5.311c1.063-2.126.531-3.986-.264-5.579c-.798-1.593-6.987-17.343-9.819-23.64"
    />
  </svg>
);
// eslint-disable-next-line @typescript-eslint/naming-convention
export const CallIcon = ({ size = 24, color = "currentColor", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    width={size}
    height={size}
    fill={color}
    {...props}
  >
    <path
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      fillRule="evenodd"
      d="M14.031 11.852c-.428-.539-1.123-1.32-1.718-1.394c-.362-.045-.778.255-1.188.538c-.08.04-.698.408-.773.43c-.396.113-1.241.146-1.752-.32c-.492-.45-1.27-1.283-1.898-2.046c-.6-.786-1.229-1.731-1.551-2.311c-.336-.601-.094-1.396.114-1.746c.038-.063.498-.536.601-.646l.015.018c.381-.32.78-.645.825-.997c.074-.586-.525-1.439-.953-1.979C5.325.858 4.662-.089 3.759.045c-.34.05-.633.169-.922.34L2.829.376a1.823 1.823 0 0 0-.048.037l-.025.013l.003.004c-.166.128-.64.482-.694.53c-.586.521-1.468 1.748-.786 3.955c.506 1.64 1.585 3.566 3.055 5.514l-.008.007c.072.094.146.179.221.27c.07.093.139.185.211.277l.01-.007c1.56 1.879 3.196 3.381 4.689 4.267c2.01 1.192 3.439.655 4.099.228c.062-.041.534-.408.694-.529l.004.004c.006-.006.01-.014.018-.02a3.27 3.27 0 0 0 .043-.033l-.006-.008c.242-.234.436-.484.57-.799c.351-.829-.42-1.693-.848-2.234z"
    />
  </svg>
);
// eslint-disable-next-line @typescript-eslint/naming-convention
export const ArrowRightDoubleFillIcon = ({
  size = 24,
  color = "currentColor",
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill={color}
    {...props}
  >
    <path
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      d="m19.164 12l-6.207-6.207l-1.414 1.414L16.336 12l-4.793 4.793l1.414 1.414L19.164 12Zm-5.65 0L7.307 5.793L5.893 7.207L10.686 12l-4.793 4.793l1.414 1.414L13.514 12Z"
    />
  </svg>
);
// eslint-disable-next-line @typescript-eslint/naming-convention
export const StarIcon = ({ size = 24, color = "currentColor", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    width={size}
    height={size}
    fill={color}
    {...props}
  >
    <path
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      d="M62 25.154H39.082L32 3l-7.082 22.154H2l18.541 13.693L13.459 61L32 47.309L50.541 61l-7.082-22.152L62 25.154z"
    />
  </svg>
);
// eslint-disable-next-line @typescript-eslint/naming-convention
export const QuoteLeftIcon = ({
  size = 24,
  color = "currentColor",
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1664 1408"
    width={size}
    height={size}
    fill={color}
    {...props}
  >
    <path
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      d="M768 832v384q0 80-56 136t-136 56H192q-80 0-136-56T0 1216V512q0-104 40.5-198.5T150 150T313.5 40.5T512 0h64q26 0 45 19t19 45v128q0 26-19 45t-45 19h-64q-106 0-181 75t-75 181v32q0 40 28 68t68 28h224q80 0 136 56t56 136zm896 0v384q0 80-56 136t-136 56h-384q-80 0-136-56t-56-136V512q0-104 40.5-198.5T1046 150t163.5-109.5T1408 0h64q26 0 45 19t19 45v128q0 26-19 45t-45 19h-64q-106 0-181 75t-75 181v32q0 40 28 68t68 28h224q80 0 136 56t56 136z"
    />
  </svg>
);
// eslint-disable-next-line @typescript-eslint/naming-convention
export const MessageIcon = ({
  size = 24,
  color = "currentColor",
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    width={size}
    height={size}
    fill={color}
    {...props}
  >
    <path
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      d="M0 8v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-10 4z"
    />
    <path
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      d="M2 2a2 2 0 0 0-2 2v2l10 4l10-4V4a2 2 0 0 0-2-2z"
    />
  </svg>
);
// eslint-disable-next-line @typescript-eslint/naming-convention
export const CrossIcon = ({ size = 24, color = "currentColor", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    width={size}
    height={size}
    fill={color}
    {...props}
  >
    <path
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      d="M15.854 12.854L11 8l4.854-4.854a.503.503 0 0 0 0-.707L13.561.146a.499.499 0 0 0-.707 0L8 5L3.146.146a.5.5 0 0 0-.707 0L.146 2.439a.499.499 0 0 0 0 .707L5 8L.146 12.854a.5.5 0 0 0 0 .707l2.293 2.293a.499.499 0 0 0 .707 0L8 11l4.854 4.854a.5.5 0 0 0 .707 0l2.293-2.293a.499.499 0 0 0 0-.707z"
    />
  </svg>
);
// eslint-disable-next-line @typescript-eslint/naming-convention
export const ContactsFilledIcon = ({
  size = 24,
  color = "currentColor",
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill={color}
    {...props}
  >
    <path
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      d="M15.436 14.778c-.595-.25-1.336-.563-1.336-.803v-1.57A3.549 3.549 0 0 0 15.5 9.6V7.5C15.5 5.57 13.93 4 12 4S8.5 5.57 8.5 7.5v2.1a3.55 3.55 0 0 0 1.4 2.806v1.569c0 .226-.734.54-1.323.792C7.152 15.376 5 16.296 5 18.7v.35h14v-.35c0-2.42-2.144-3.324-3.564-3.922"
      opacity=".25"
    />
    <path
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      d="M8.5 9.5v-2a3.5 3.5 0 1 1 7 0v2c0 1.19-.593 2.24-1.5 2.873v.95a1 1 0 0 0 .629.928l1.586.635A4.431 4.431 0 0 1 19 19H5a4.431 4.431 0 0 1 2.785-4.114l1.586-.635a1 1 0 0 0 .629-.928v-.95A3.496 3.496 0 0 1 8.5 9.5"
    />
  </svg>
);
// eslint-disable-next-line @typescript-eslint/naming-convention
export const EmailIcon = ({ size = 24, color = "currentColor", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 42 42"
    width={size}
    height={size}
    fill={color}
    {...props}
  >
    <path
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      d="M40.5 31.5v-18S22.3 26.2 20.53 26.859C18.79 26.23.5 13.5.5 13.5v18c0 2.5.53 3 3 3h34c2.529 0 3-.439 3-3zm-.029-21.529c0-1.821-.531-2.471-2.971-2.471h-34c-2.51 0-3 .78-3 2.6l.03.28s18.069 12.44 20 13.12c2.04-.79 19.97-13.4 19.97-13.4l-.029-.129z"
    />
  </svg>
);
// eslint-disable-next-line @typescript-eslint/naming-convention
export const MobileIcon = ({ size = 24, color = "currentColor", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 576 1024"
    width={size}
    height={size}
    fill={color}
    {...props}
  >
    <path
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      d="M512 1024H64q-26 0-45-18.5T0 960V256q0-26 19-45t45-19V64q0-26 19-45t45.5-19t45 19T192 64v128h320q27 0 45.5 19t18.5 45v704q0 27-18.5 45.5T512 1024zM256 880q0 7 4.5 11.5T272 896h32q7 0 11.5-4.5T320 880v-32q0-7-4.5-11.5T304 832h-32q-7 0-11.5 4.5T256 848v32zm0-128q0 7 4.5 11.5T272 768h32q7 0 11.5-4.5T320 752v-32q0-7-4.5-11.5T304 704h-32q-7 0-11.5 4.5T256 720v32zm0-128q0 7 4.5 11.5T272 640h32q7 0 11.5-4.5T320 624v-32q0-7-4.5-11.5T304 576h-32q-7 0-11.5 4.5T256 592v32zM128 880q0 7 4.5 11.5T144 896h32q7 0 11.5-4.5T192 880v-32q0-7-4.5-11.5T176 832h-32q-7 0-11.5 4.5T128 848v32zm0-128q0 7 4.5 11.5T144 768h32q7 0 11.5-4.5T192 752v-32q0-7-4.5-11.5T176 704h-32q-7 0-11.5 4.5T128 720v32zm0-128q0 7 4.5 11.5T144 640h32q7 0 11.5-4.5T192 624v-32q0-7-4.5-11.5T176 576h-32q-7 0-11.5 4.5T128 592v32zm320-272q0-13-9.5-22.5T416 320H160q-13 0-22.5 9.5T128 352v128q0 13 9.5 22.5T160 512h256q13 0 22.5-9.5T448 480V352zm0 240q0-7-4.5-11.5T432 576h-32q-7 0-11.5 4.5T384 592v32q0 7 4.5 11.5T400 640h32q7 0 11.5-4.5T448 624v-32zm0 128q0-7-4.5-11.5T432 704h-32q-7 0-11.5 4.5T384 720v32q0 7 4.5 11.5T400 768h32q7 0 11.5-4.5T448 752v-32zm0 128q0-7-4.5-11.5T432 832h-32q-7 0-11.5 4.5T384 848v32q0 7 4.5 11.5T400 896h32q7 0 11.5-4.5T448 880v-32z"
    />
  </svg>
);
// eslint-disable-next-line @typescript-eslint/naming-convention
export const AddressIcon = ({
  size = 24,
  color = "currentColor",
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1025 768"
    width={size}
    height={size}
    fill={color}
    {...props}
  >
    <path
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      d="M960.5 768h-896q-26 0-45-19t-19-45V64q0-27 19-45.5T64.5 0h896q26 0 45 18.5t19 45.5v640q0 26-19 45t-45 19zm-800-128h256q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5h-256q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5zm320-320h-320q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5h320q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5zm0 128h-320q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5h320q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5zm416-288q0-13-9.5-22.5t-22.5-9.5h-192q-13 0-22.5 9.5t-9.5 22.5v192q0 13 9.5 22.5t22.5 9.5h192q13 0 22.5-9.5t9.5-22.5V160z"
    />
  </svg>
);
// eslint-disable-next-line @typescript-eslint/naming-convention
export const MoneyIcon = ({ size = 24, color = "currentColor", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 750 710"
    width={size}
    height={size}
    fill={color}
    {...props}
  >
    <path
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      d="M713 39q11-3 20 4t8 18v369q0 8-4 14t-12 9q-58 17-116 18t-116-5t-116-18t-116-18t-116-7t-116 16q-11 3-20-5t-9-18V48q0-18 16-23Q74 8 132 6t116 6t117 17l116 18q57 9 116 7t116-15zM371 355q17 0 32-9t26-25t18-37t6-45t-6-45t-18-37t-26-25t-32-9t-32 9t-27 25t-17 37l-7 45q-4 24 7 45t17 37t27 25t32 9z"
    />
  </svg>
);
// eslint-disable-next-line @typescript-eslint/naming-convention
export const TelegramIconChangedBG = ({
  size = 24,
  color = "currentColor",
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width={size}
    height={size}
    fill={color}
    {...props}
  >
    <path
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      d="M470.435 45.423L16.827 221.249c-18.254 8.188-24.428 24.585-4.412 33.484l116.37 37.173l281.368-174.79c15.363-10.973 31.091-8.047 17.557 4.024L186.053 341.075l-7.591 93.076c7.031 14.371 19.905 14.438 28.117 7.295l66.858-63.589l114.505 86.187c26.595 15.826 41.066 5.613 46.788-23.394l75.105-357.47c7.798-35.705-5.5-51.437-39.4-37.757z"
    />
  </svg>
);
// eslint-disable-next-line @typescript-eslint/naming-convention
export const QuoteAltIcon = ({
  size = 24,
  color = "currentColor",
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1200 1200"
    width={size}
    height={size}
    fill={color}
    {...props}
  >
    <path
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      d="M600 0C268.629 0 0 268.629 0 600s268.629 600 600 600s600-268.629 600-600S931.371 0 600 0zm-45.923 282.422l25.781 118.727c-75.541 16.721-145.005 38.468-139.38 122.826h88.77v315.968H261.841V544.629c.095-234.691 172.401-253.786 292.236-262.207zm358.228 0l25.854 118.727c-75.541 16.721-145.005 38.468-139.38 122.826h88.77v315.968H620.142V544.629c.094-234.691 172.328-253.786 292.163-262.207z"
    />
  </svg>
);
// eslint-disable-next-line @typescript-eslint/naming-convention
export const EcologyIcon = ({
  size = 24,
  color = "currentColor",
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width={size}
    height={size}
    fill={color}
    {...props}
  >
    <path
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      d="M256 23c-71.69 0-130 58.31-130 130s58.31 130 130 130s130-58.31 130-130S327.69 23 256 23zm-8.33 31.127l-11.774 35.246l52.145-5.463l-5.186-17.457l14.624 4.049v19.367l22.843 1.49l-4.468-17.38l12.007-6.954C352.41 87.553 368 118.417 368 153c0 16.668-3.625 32.471-10.125 46.672l-26.13 4.422v31.478a112.138 112.138 0 0 1-16.099 12.29l-11.216-17.448l-21.852 5.96l6.14 23.786A112.353 112.353 0 0 1 256 265c-31.013 0-59.037-12.535-79.297-32.826l19.96-2.752l13.41-26.322l-42.712-21.354l30.295-25.826l-26.32-21.85l-26.893 8.963c3.112-35.448 22.653-66.103 50.994-84.318l5.696 45.556l46.537-50.144zm38.88 64.217l-36.17 23.176l31.606 28.093l22.827-6.672l-2.108 27.391l41.79-10.535l-15.804-35.818l-25.283.351l22.475-19.314l-39.332-6.672zm-37.573 40.383l-19.315 8.427l13.695 10.184l5.62-18.611zm-45.362 3.154l-13.408 15.89l37.147 26.108l-23.739-41.998zm59.76 8.785l-13.695 25.637l33.01 22.474l-11.59-16.506l14.398-17.207l-22.123-14.398zM60.17 198.061c-8.818-.137-17.843 11.093-17.895 39.882c-.078 44.153-4.356 56.616 16.077 106.551C73.335 381.112 80.054 409.257 128 432c5.68 20.022 3.413 24.73-.44 41.84c-3.596 15.974 33.423 18.91 60.534 5.453c29.091-15.868 26.65-59.557 21.453-89.184c-6.044-34.454-25.06-41.615-41.543-56.332c-17.115-24.475-21.098-68.813-48.856-86.699c-5.797-3.735-35.37-7.527 5.262 93.942c-53.571-13.268-43.813-74.773-47.687-120.31c-1.154-13.561-8.773-22.53-16.553-22.65zm391.66 0c-7.78.12-15.399 9.088-16.553 22.65c-3.874 45.536 5.884 107.041-47.687 120.309c40.633-101.47 11.059-97.677 5.262-93.942c-27.758 17.886-31.74 62.224-48.856 86.7c-16.482 14.716-35.5 21.877-41.543 56.331c-5.197 29.627-7.638 73.316 21.453 89.184c27.111 13.456 64.13 10.521 60.533-5.453c-3.852-17.11-6.119-21.818-.439-41.84c47.946-22.743 54.665-50.888 69.648-87.506c20.433-49.935 16.155-62.398 16.077-106.55c-.052-28.79-9.077-40.02-17.895-39.883z"
    />
  </svg>
);
// eslint-disable-next-line @typescript-eslint/naming-convention
export const GiftIcon = ({ size = 24, color = "currentColor", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width={size}
    height={size}
    fill={color}
    {...props}
  >
    <path
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      d="M469 128h-76q12-20 12-43q0-35-25-60T320 0q-40 0-64 30q-24-30-64-30q-35 0-60 25t-25 60q0 23 12 43H43q-18 0-30.5 12.5T0 171v42q0 18 12.5 30.5T43 256v192q0 27 18 45.5t46 18.5h298q28 0 46-18.5t18-45.5V256q18 0 30.5-12.5T512 213v-42q0-18-12.5-30.5T469 128zM192 469h-85q-22 0-22-21V256h107v213zm0-256H43v-42h149v42zm0-85q-17 0-30-12.5T149 85q0-17 13-29.5T192 43t30 12.5T235 85q0 18-13 30.5T192 128zm85 341h-42V256h42v213zm0-256h-42v-42h42v42zm0-128q0-17 13-29.5T320 43t30 12.5T363 85q0 18-13 30.5T320 128t-30-12.5T277 85zm150 363q0 21-22 21h-85V256h107v192zm42-235H320v-42h149v42z"
    />
  </svg>
);
// eslint-disable-next-line @typescript-eslint/naming-convention
export const MediaIcon = ({ size = 24, color = "currentColor", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width={size}
    height={size}
    fill={color}
    {...props}
  >
    <path
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      d="M244.4 69.8L174.5 0h-58.2l69.8 69.8h58.3zm151.2 0L325.8 0h-58.2l69.8 69.8h58.2zM418.9 0l69.8 69.8H512V0h-93.1zm0 162.9h-93.1l69.8-69.8h-58.2l-69.8 69.8h-93.1l69.8-69.8h-58.2l-69.8 69.8h-93l69.8-69.8H0v372.4C0 491.1 20.9 512 46.5 512h418.9c25.7 0 46.5-20.9 46.5-46.5V93.1h-23.3l-69.7 69.8zM23.3 0H0v69.8h93.1L23.3 0z"
    />
  </svg>
);
// eslint-disable-next-line @typescript-eslint/naming-convention
export const NewspaperFoldingIcon = ({
  size = 24,
  color = "currentColor",
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    width={size}
    height={size}
    fill={color}
    {...props}
  >
    <g
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="4"
    >
      <path stroke="#000" d="M22 44L21 36" />
      <path
        fill="#2F88FF"
        stroke="#000"
        d="M42 44V12H26L27 20L28 28L29 36L22 44H42Z"
      />
      <path stroke="#fff" d="M28 28H33" />
      <path stroke="#fff" d="M27 20H33" />
      <path
        fill="#2F88FF"
        stroke="#000"
        d="M6 4H25L26 12L27 20L28 28L29 36H21H6V4Z"
      />
      <path stroke="#fff" d="M12 12H19" />
      <path stroke="#fff" d="M12 20H20" />
      <path stroke="#fff" d="M12 28H21" />
    </g>
  </svg>
);

// eslint-disable-next-line @typescript-eslint/naming-convention
export const PlusIcon = ({ size = 24, color = "currentColor", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 15 15"
    width={size}
    height={size}
    fill={color}
    {...props}
  >
    <path
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      fillRule="evenodd"
      d="M8 2.75a.5.5 0 0 0-1 0V7H2.75a.5.5 0 0 0 0 1H7v4.25a.5.5 0 0 0 1 0V8h4.25a.5.5 0 0 0 0-1H8V2.75Z"
      clipRule="evenodd"
    />
  </svg>
);
// eslint-disable-next-line @typescript-eslint/naming-convention
export const BlogIcon = ({ size = 24, color = "currentColor", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill={color}
    {...props}
  >
    <path
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      d="M5 16a3 3 0 1 0 0 6a3 3 0 0 0 0-6ZM5 1c9.925 0 18 8.075 18 18m-5 0c0-7.168-5.832-13-13-13m8 13c0-4.411-3.589-8-8-8m-3 0v8"
    />
  </svg>
);
// eslint-disable-next-line @typescript-eslint/naming-convention
export const NewsIcon = ({ size = 24, color = "currentColor", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    width={size}
    height={size}
    fill={color}
    {...props}
  >
    <path
      xmlns="http://www.w3.org/2000/svg"
      fill="#FF5722"
      d="M32 15v28H10c-2.2 0-4-1.8-4-4V15h26z"
    />
    <path
      xmlns="http://www.w3.org/2000/svg"
      fill="#FFCCBC"
      d="M14 5v34c0 2.2-1.8 4-4 4h29c2.2 0 4-1.8 4-4V5H14z"
    />
    <path
      xmlns="http://www.w3.org/2000/svg"
      fill="#FF5722"
      d="M20 10h18v4H20zm0 7h8v2h-8zm10 0h8v2h-8zm-10 4h8v2h-8zm10 0h8v2h-8zm-10 4h8v2h-8zm10 0h8v2h-8zm-10 4h8v2h-8zm10 0h8v2h-8zm-10 4h8v2h-8zm10 0h8v2h-8zm-10 4h8v2h-8zm10 0h8v2h-8z"
    />
  </svg>
);
// eslint-disable-next-line @typescript-eslint/naming-convention
export const ISocialServicesIcon = ({
  size = 24,
  color = "currentColor",
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    width={size}
    height={size}
    fill={color}
    {...props}
  >
    <path
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      d="M56.824 35.562V23.041c0-1.777 1.454-3.222 3.241-3.222a3.222 3.222 0 0 1 3.221 3.222v17.145a9.925 9.925 0 0 1-2.383 6.449L50.212 57.989c-1.061.999-1.321 1.883-1.321 3.223v2.067H37.254l-.013-4.918c0-1.873-.153-4.376 2.191-6.832l13.566-13.622a2.574 2.574 0 0 1 3.751 3.522l-6.543 7.009c-.424.497-1.142 1.434-1.498 2.582c-.192.596-.247 1.177-.258 1.844h2.106c.008-.475.044-.857.157-1.211c.206-.662.616-1.258.925-1.64l6.642-7.29c.835-.842 1.293-1.932 1.293-3.078c0-1.721-1.035-3.304-2.747-4.084zm-49.025 0V23.041c0-1.777-1.454-3.222-3.241-3.222a3.222 3.222 0 0 0-3.221 3.222v17.145c0 2.371.853 4.661 2.384 6.449l10.692 11.354c1.06.999 1.321 1.883 1.321 3.223v2.067h11.637l.013-4.918c0-1.873.153-4.376-2.191-6.832L11.627 37.907a2.574 2.574 0 0 0-3.751 3.522l6.544 7.009c.424.497 1.142 1.434 1.498 2.582c.193.596.247 1.177.258 1.844H14.07c-.008-.475-.043-.857-.158-1.211c-.205-.662-.616-1.258-.925-1.64l-6.642-7.289c-.835-.842-1.293-1.933-1.293-3.078c0-1.722 1.035-3.305 2.747-4.085zM33.536 6.123a2.762 2.762 0 0 0 0-5.526a2.763 2.763 0 0 0 0 5.526zm-14.987.015a2.79 2.79 0 0 1-2.802-2.781a2.79 2.79 0 0 1 2.802-2.78c1.548 0 2.806 1.244 2.806 2.78c0 1.539-1.258 2.781-2.806 2.781zm28.712 10.664a1.938 1.938 0 1 0-.002-3.876a1.938 1.938 0 0 0 .002 3.876z"
    />
    <path
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      d="M50.067 17.758H44.84c-.024 0-1.749-.157-1.749-.157l-2.189-7.63c-.881-3.072-3.457-2.978-3.457-2.978h-7.086s-2.574-.094-3.455 2.978l-1.081 3.757l-1.078-3.757c-.886-3.072-3.455-2.978-3.455-2.978h-5.483s-2.576-.094-3.457 2.978l-2.207 7.689c-.21.72.184 1.266.814 1.448c.628.179 1.271-.138 1.432-.711l2.15-7.495l1.047-.002l-3.138 12.977h2.773v9.218c0 .759.612 1.377 1.373 1.377c.759 0 1.38-.618 1.38-1.377v-9.218h1.163v9.218c0 .759.613 1.377 1.372 1.377a1.38 1.38 0 0 0 1.382-1.377v-9.218h2.725L21.511 10.9l1.043.002l2.126 7.416c.035.127.092.243.166.343c.208.315.571.489.975.476c.404.013.765-.16.973-.47a1.01 1.01 0 0 0 .181-.383l2.115-7.383l.964-.002v21.928c0 .896.733 1.62 1.627 1.62c.895 0 1.62-.724 1.62-1.62V20.351h1.198v12.476c0 .896.726 1.62 1.618 1.62c.897 0 1.632-.724 1.632-1.62V10.899l1.048.002l2.058 7.495c.112.369.42.613.789.707c.016.004.024.011.037.015c.328.074 1.84.503 2.95.82v13.6a1.141 1.141 0 0 0 2.28 0v-6.794h.892v6.794c0 .628.509 1.137 1.137 1.137s1.144-.509 1.144-1.137V20.834h.875v4.304c0 .473.383.853.848.853a.842.842 0 0 0 .838-.853v-4.896c.002-1.371-1.205-2.484-2.576-2.484z"
    />
  </svg>
);

// eslint-disable-next-line @typescript-eslint/naming-convention
export const VideoIcon = ({ size = 24, color = "currentColor", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width={size}
    height={size}
    fill={color}
    {...props}
  >
    <path
      xmlns="http://www.w3.org/2000/svg"
      fill="#1C3C50"
      d="M98 10h-4c-1.104 0-9 4.896-9 6H74v26h11c0 1.104 7.896 6 9 6h4a2 2 0 0 0 2-1.999V12a2 2 0 0 0-2-2zM69.979 48.569c.006 2.149.015 3.432.021 3.432v-3l-.021-.432zM12 58a2.003 2.003 0 0 0 2 2h8.957c1.812 2.618 4.459 6 6.043 6h2c5.523 0 10 4.479 10 10.001V96a4 4 0 0 0 4 4h13a4 4 0 0 0 4-4V66h5c2.209 0 3-.79 3-2.999v-11H12V58z"
    />
    <path
      xmlns="http://www.w3.org/2000/svg"
      fill="#EBEEEF"
      d="M70 0H12C5.373 0 0 5.373 0 12v28c0 6.628 5.373 12.001 12 12.001h58c-.051 0-.07-52.052 0-52.001z"
    />
    <path
      xmlns="http://www.w3.org/2000/svg"
      fill="#C8CBCB"
      d="M27 15h-6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2z"
    />
    <path
      xmlns="http://www.w3.org/2000/svg"
      fill="#23475F"
      d="M72 0h-2v52h2a2 2 0 0 0 2-2.001V2a2 2 0 0 0-2-2zm13 16h-3v26h3V16z"
    />
    <path
      xmlns="http://www.w3.org/2000/svg"
      fill="#fff"
      d="M54 12a6 6 0 1 0 6 6c0-3.313-2.688-6-6-6z"
    />
    <path
      xmlns="http://www.w3.org/2000/svg"
      fill="#FF4B39"
      d="M54 14a4 4 0 1 0 0 8a4 4 0 0 0 0-8z"
    />
    <path
      xmlns="http://www.w3.org/2000/svg"
      fill="#00BD9C"
      d="M37 14H13a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2z"
    />
    <path
      xmlns="http://www.w3.org/2000/svg"
      fill="#1C3C50"
      d="M28 13h-6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2z"
    />
    <path
      xmlns="http://www.w3.org/2000/svg"
      fill="#23475F"
      d="M26 13h-2v10h2V13z"
    />
    <path
      xmlns="http://www.w3.org/2000/svg"
      fill="#BCC4C8"
      d="M0 36v4c0 6.628 5.373 12.001 12 12.001h58c-.02 0-.033-7.074-.041-16L0 36z"
    />
    <path
      xmlns="http://www.w3.org/2000/svg"
      fill="#23475F"
      d="M98 10h-4c-.176 0-.538.135-1 .349v37.302c.462.214.824.349 1 .349h4a2 2 0 0 0 2-1.999V12a2 2 0 0 0-2-2z"
    />
    <path
      xmlns="http://www.w3.org/2000/svg"
      fill="#00A185"
      d="M20 21v-5.722c-.595.346-1 .984-1 1.723v5h1.277A1.984 1.984 0 0 1 20 21z"
    />
    <path
      xmlns="http://www.w3.org/2000/svg"
      fill="#23475F"
      d="M22.957 60c1.812 2.618 4.459 6 6.043 6h38c2.209 0 3-.79 3-2.999"
    />
    <path
      xmlns="http://www.w3.org/2000/svg"
      fill="#23475F"
      d="M22.957 60c1.812 2.618 4.459 6 6.043 6h38c2.209 0 3-.79 3-2.999V60H22.957z"
    />
  </svg>
);

// eslint-disable-next-line @typescript-eslint/naming-convention
export const ImageIcon = ({ size = 24, color = "currentColor", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill={color}
    {...props}
  >
    <circle
      xmlns="http://www.w3.org/2000/svg"
      cx="8.5"
      cy="8.5"
      r="2.5"
      fill="currentColor"
    />
    <path
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      d="M16 10c-2 0-3 3-4.5 3s-1.499-1-3.5-1c-2 0-3.001 4-3.001 4H19s-1-6-3-6zm4-7H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zm0 14H4V5h16v12z"
    />
  </svg>
);

// eslint-disable-next-line @typescript-eslint/naming-convention
export const LinkIcon = ({ size = 24, color = "currentColor", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1000 1000"
    width={size}
    height={size}
    fill={color}
    {...props}
  >
    <path
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      d="M1000 267q0 112-78 188L747 631q-78 78-189 78q-97 0-171-63l115-115q26 17 56 17q44 0 75-31l175-176q31-29 31-74q0-44-30.5-74.5T734 162q-25 0-49.5 12T652 208H414L546 79Q626 1 734 1q110 0 188 78t78 188zm-387 89L498 471q-26-17-56-17q-44 0-75 31L192 661q-31 29-31 74q0 44 30.5 74.5T266 840q25 0 49.5-12t32.5-34h238L454 923q-80 78-188 78q-110 0-188-78T0 735q0-112 78-188l175-176q78-78 189-78q97 0 171 63z"
    />
  </svg>
);
// eslint-disable-next-line @typescript-eslint/naming-convention
export const HamburgerIcon = ({
  size = 24,
  color = "currentColor",
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width={size}
    height={size}
    fill={color}
    {...props}
  >
    <path
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 8h22M5 16h22M5 24h22"
    />
  </svg>
);
// eslint-disable-next-line @typescript-eslint/naming-convention
export const Gmail = (props: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="m18.73 5.41l-1.28 1L12 10.46L6.55 6.37l-1.28-1A2 2 0 0 0 2 7.05v11.59A1.36 1.36 0 0 0 3.36 20h3.19v-7.72L12 16.37l5.45-4.09V20h3.19A1.36 1.36 0 0 0 22 18.64V7.05a2 2 0 0 0-3.27-1.64z"
    ></path>
  </svg>
);
// eslint-disable-next-line @typescript-eslint/naming-convention
export const Success = (props: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 48 48"
    {...props}
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="4"
    >
      <path d="m24 4l5.253 3.832l6.503-.012l1.997 6.188l5.268 3.812L41 24l2.021 6.18l-5.268 3.812l-1.997 6.188l-6.503-.012L24 44l-5.253-3.832l-6.503.012l-1.997-6.188l-5.268-3.812L7 24l-2.021-6.18l5.268-3.812l1.997-6.188l6.503.012L24 4Z"></path>
      <path d="m17 24l5 5l10-10"></path>
    </g>
  </svg>
);
// eslint-disable-next-line @typescript-eslint/naming-convention
export const Info = (props: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 48 48"
    {...props}
  >
    <g fill="none">
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="4"
        d="M24 44a19.937 19.937 0 0 0 14.142-5.858A19.937 19.937 0 0 0 44 24a19.938 19.938 0 0 0-5.858-14.142A19.937 19.937 0 0 0 24 4A19.938 19.938 0 0 0 9.858 9.858A19.938 19.938 0 0 0 4 24a19.937 19.937 0 0 0 5.858 14.142A19.938 19.938 0 0 0 24 44Z"
      ></path>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M24 11a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5Z"
        clipRule="evenodd"
      ></path>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
        d="M24.5 34V20h-2M21 34h7"
      ></path>
    </g>
  </svg>
);
// eslint-disable-next-line @typescript-eslint/naming-convention
export const Warning = (props: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    {...props}
  >
    <g fill="none" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeWidth="2"
        d="M16 18v-6M6.358 27h19.284c1.516 0 2.48-1.62 1.759-2.953l-9.642-17.8c-.757-1.397-2.761-1.397-3.518 0L4.6 24.047C3.877 25.38 4.842 27 6.358 27Z"
      ></path>
      <path
        fill="currentColor"
        d="M17 21.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z"
      ></path>
    </g>
  </svg>
);
// eslint-disable-next-line @typescript-eslint/naming-convention
export const DangerTriangleOutline = (props: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="currentColor">
      <path d="M12 7.25a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0V8a.75.75 0 0 1 .75-.75ZM12 17a1 1 0 1 0 0-2a1 1 0 0 0 0 2Z"></path>
      <path
        fillRule="evenodd"
        d="M8.294 4.476C9.366 3.115 10.502 2.25 12 2.25c1.498 0 2.634.865 3.706 2.226c1.054 1.34 2.17 3.32 3.6 5.855l.436.772c1.181 2.095 2.115 3.75 2.605 5.077c.5 1.358.62 2.59-.138 3.677c-.735 1.055-1.962 1.486-3.51 1.69c-1.541.203-3.615.203-6.274.203h-.85c-2.66 0-4.733 0-6.274-.203c-1.548-.204-2.775-.635-3.51-1.69c-.758-1.087-.639-2.32-.138-3.677c.49-1.328 1.424-2.982 2.605-5.077l.436-.772c1.429-2.535 2.546-4.516 3.6-5.855Zm1.179.928C8.499 6.641 7.437 8.52 5.965 11.13l-.364.645c-1.226 2.174-2.097 3.724-2.54 4.925c-.438 1.186-.378 1.814-.04 2.3c.361.516 1.038.87 2.476 1.06c1.432.188 3.406.19 6.14.19h.727c2.733 0 4.707-.002 6.14-.19c1.437-.19 2.114-.544 2.474-1.06c.339-.486.4-1.114-.038-2.3c-.444-1.201-1.315-2.751-2.541-4.925l-.364-.645c-1.472-2.61-2.534-4.489-3.508-5.726C13.562 4.18 12.813 3.75 12 3.75c-.813 0-1.562.429-2.527 1.654Z"
        clipRule="evenodd"
      ></path>
    </g>
  </svg>
);
// eslint-disable-next-line @typescript-eslint/naming-convention
export const Neutral = (props: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="M12 1.316C6.099 1.316 1.316 6.099 1.316 12S6.099 22.684 12 22.684S22.684 17.901 22.684 12c-.012-5.896-4.788-10.672-10.683-10.684H12zm0 22.297C5.586 23.613.387 18.414.387 12S5.586.387 12 .387S23.613 5.586 23.613 12v.015c0 6.405-5.192 11.597-11.597 11.597H12h.001z"
    ></path>
    <path
      fill="currentColor"
      d="M12 24C5.386 23.966.034 18.614 0 12.003V12C0 5.373 5.373 0 12 0s12 5.373 12 12c-.034 6.614-5.386 11.966-11.997 12zM12 .774C5.8.774.774 5.8.774 12S5.8 23.226 12 23.226S23.226 18.2 23.226 12C23.222 5.802 18.198.779 12.001.774zm0 22.297C5.886 23.071.929 18.114.929 12S5.886.929 12 .929S23.071 5.886 23.071 12S18.114 23.071 12 23.071zm0-21.368C6.313 1.703 1.703 6.313 1.703 12S6.313 22.297 12 22.297S22.297 17.687 22.297 12v-.005c0-5.684-4.608-10.292-10.292-10.292H12z"
    ></path>
    <path
      fill="currentColor"
      d="M9.677 9.91v.009c0 1.15-.932 2.082-2.082 2.082h-.009a2.09 2.09 0 0 1 0-4.18h.009c1.15 0 2.082.932 2.082 2.082v.009zm8.904 0a2.09 2.09 0 0 1-4.18 0v-.009c0-1.15.932-2.082 2.082-2.082h.009a2.132 2.132 0 0 1 2.09 2.088v.002zm-2.168 7.277H7.51a.465.465 0 1 1 0-.93h8.903a.499.499 0 0 1 .464.463v.021c0 .246-.2.446-.446.446h-.02h.001z"
    ></path>
    <path
      fill="currentColor"
      d="M16.413 17.574H7.51a.852.852 0 0 1 0-1.704h8.903a.852.852 0 0 1 0 1.704zm-8.826-.929c-.077 0-.077.077 0 0c-.02.02-.033.047-.033.077s.013.058.033.077h8.903a.077.077 0 0 0 .077-.077c0-.077 0-.077-.077-.077z"
    ></path>
  </svg>
);
// eslint-disable-next-line @typescript-eslint/naming-convention
export const TeamLine = (props: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="M12 11a5 5 0 0 1 5 5v6h-2v-6a3 3 0 0 0-2.824-2.995L12 13a3 3 0 0 0-2.995 2.824L9 16v6H7v-6a5 5 0 0 1 5-5Zm-6.5 3c.279 0 .55.033.81.094a5.948 5.948 0 0 0-.301 1.575L6 16v.086a1.493 1.493 0 0 0-.356-.08L5.5 16a1.5 1.5 0 0 0-1.493 1.355L4 17.5V22H2v-4.5A3.5 3.5 0 0 1 5.5 14Zm13 0a3.5 3.5 0 0 1 3.5 3.5V22h-2v-4.5a1.5 1.5 0 0 0-1.355-1.493L18.5 16c-.175 0-.343.03-.5.085V16c0-.666-.108-1.306-.308-1.904c.258-.063.53-.096.808-.096Zm-13-6a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5Zm13 0a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5Zm-13 2a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1Zm13 0a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1ZM12 2a4 4 0 1 1 0 8a4 4 0 0 1 0-8Zm0 2a2 2 0 1 0 0 4a2 2 0 0 0 0-4Z"
    ></path>
  </svg>
);
// eslint-disable-next-line @typescript-eslint/naming-convention
export const Help = (props: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 48 48"
    {...props}
  >
    <g fill="none">
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="4"
        d="M24 44a19.937 19.937 0 0 0 14.142-5.858A19.937 19.937 0 0 0 44 24a19.938 19.938 0 0 0-5.858-14.142A19.937 19.937 0 0 0 24 4A19.938 19.938 0 0 0 9.858 9.858A19.938 19.938 0 0 0 4 24a19.937 19.937 0 0 0 5.858 14.142A19.938 19.938 0 0 0 24 44Z"
      ></path>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
        d="M24 28.625v-4a6 6 0 1 0-6-6"
      ></path>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M24 37.625a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5Z"
        clipRule="evenodd"
      ></path>
    </g>
  </svg>
);
// eslint-disable-next-line @typescript-eslint/naming-convention
export const Partnership = (props: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    {...props}
  >
    <path
      fill="currentColor"
      d="M8 9a4 4 0 1 1 4-4a4 4 0 0 1-4 4zm0-6a2 2 0 1 0 2 2a2 2 0 0 0-2-2zm16 6a4 4 0 1 1 4-4a4 4 0 0 1-4 4zm0-6a2 2 0 1 0 2 2a2 2 0 0 0-2-2zm2 27h-4a2 2 0 0 1-2-2v-7h2v7h4v-9h2v-6a1 1 0 0 0-1-1h-6.42L16 20l-4.58-8H5a1 1 0 0 0-1 1v6h2v9h4v-7h2v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7a2 2 0 0 1-2-2v-6a3 3 0 0 1 3-3h7.58L16 16l3.42-6H27a3 3 0 0 1 3 3v6a2 2 0 0 1-2 2v7a2 2 0 0 1-2 2z"
    ></path>
  </svg>
);
// eslint-disable-next-line @typescript-eslint/naming-convention
export const BackupOutline = (props: { className?: string }) => (
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path fill="currentColor" d="M6.5 20q-2.275 0-3.888-1.575T1 14.575q0-1.95 1.175-3.475T5.25 9.15q.625-2.3 2.5-3.725T12 4q2.925 0 4.963 2.038T19 11q1.725.2 2.863 1.488T23 15.5q0 1.875-1.313 3.188T18.5 20H13q-.825 0-1.413-.588T11 18v-5.15L9.4 14.4L8 13l4-4l4 4l-1.4 1.4l-1.6-1.55V18h5.5q1.05 0 1.775-.725T21 15.5q0-1.05-.725-1.775T18.5 13H17v-2q0-2.075-1.463-3.538T12 6Q9.925 6 8.462 7.463T7 11h-.5q-1.45 0-2.475 1.025T3 14.5q0 1.45 1.025 2.475T6.5 18H9v2H6.5Zm5.5-7Z"></path>
</svg>
    )
