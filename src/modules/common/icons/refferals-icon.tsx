export const RefferalsIcon = ({
  className,
  h = "26",
  w = "27",
}: {
  className?: string;
  h?: string | number;
  w?: string | number;
}) => {
  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 27 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M18.5 4.00001C18.5 3.7348 18.6054 3.48044 18.7929 3.29291C18.9804 3.10537 19.2348 3.00001 19.5 3.00001H21.5V1.00001C21.5 0.734798 21.6054 0.480444 21.7929 0.292907C21.9804 0.105371 22.2348 1.42096e-05 22.5 1.42096e-05C22.7652 1.42096e-05 23.0196 0.105371 23.2071 0.292907C23.3946 0.480444 23.5 0.734798 23.5 1.00001V3.00001H25.5C25.7652 3.00001 26.0196 3.10537 26.2071 3.29291C26.3946 3.48044 26.5 3.7348 26.5 4.00001C26.5 4.26523 26.3946 4.51958 26.2071 4.70712C26.0196 4.89466 25.7652 5.00001 25.5 5.00001H23.5V7.00001C23.5 7.26523 23.3946 7.51958 23.2071 7.70712C23.0196 7.89466 22.7652 8.00001 22.5 8.00001C22.2348 8.00001 21.9804 7.89466 21.7929 7.70712C21.6054 7.51958 21.5 7.26523 21.5 7.00001V5.00001H19.5C19.2348 5.00001 18.9804 4.89466 18.7929 4.70712C18.6054 4.51958 18.5 4.26523 18.5 4.00001ZM26.32 10.835C26.7769 13.5507 26.3588 16.3413 25.1263 18.804C23.8937 21.2666 21.9104 23.2738 19.4628 24.5358C17.0151 25.7978 14.2297 26.2492 11.5087 25.8249C8.7877 25.4006 6.27196 24.1226 4.32469 22.1753C2.37741 20.2281 1.09938 17.7123 0.675098 14.9913C0.25082 12.2704 0.702259 9.48494 1.96423 7.03726C3.22621 4.58958 5.23341 2.60628 7.69605 1.37373C10.1587 0.141183 12.9493 -0.276842 15.665 0.180014C15.9246 0.22592 16.1555 0.372467 16.3076 0.587778C16.4597 0.803088 16.5207 1.06974 16.4772 1.32974C16.4337 1.58974 16.2893 1.82204 16.0754 1.97613C15.8615 2.13021 15.5954 2.1936 15.335 2.15251C13.7577 1.88717 12.1415 1.96873 10.5989 2.39152C9.05624 2.81431 7.62429 3.56817 6.40265 4.60064C5.18101 5.63311 4.19903 6.91938 3.52505 8.36994C2.85107 9.82051 2.50127 11.4005 2.5 13C2.49763 15.6928 3.48731 18.292 5.28 20.3013C6.39529 18.6851 7.96352 17.4348 9.7875 16.7075C8.80773 15.9358 8.09279 14.878 7.74209 13.6811C7.3914 12.4843 7.42238 11.2079 7.83074 10.0294C8.23909 8.85101 9.00452 7.82912 10.0206 7.10588C11.0366 6.38263 12.2528 5.99399 13.5 5.99399C14.7472 5.99399 15.9634 6.38263 16.9794 7.10588C17.9955 7.82912 18.7609 8.85101 19.1693 10.0294C19.5776 11.2079 19.6086 12.4843 19.2579 13.6811C18.9072 14.878 18.1923 15.9358 17.2125 16.7075C19.0365 17.4348 20.6047 18.6851 21.72 20.3013C23.5127 18.292 24.5024 15.6928 24.5 13C24.5 12.3852 24.449 11.7714 24.3475 11.165C24.3245 11.0349 24.3275 10.9016 24.3563 10.7727C24.3851 10.6437 24.4392 10.5218 24.5154 10.4139C24.5917 10.306 24.6885 10.2143 24.8004 10.144C24.9122 10.0738 25.0369 10.0264 25.1672 10.0046C25.2975 9.98278 25.4308 9.98701 25.5595 10.017C25.6881 10.0471 25.8095 10.1023 25.9167 10.1795C26.0239 10.2567 26.1147 10.3544 26.184 10.4669C26.2532 10.5794 26.2994 10.7045 26.32 10.835ZM13.5 16C14.2911 16 15.0645 15.7654 15.7223 15.3259C16.3801 14.8864 16.8928 14.2617 17.1955 13.5307C17.4983 12.7998 17.5775 11.9956 17.4231 11.2197C17.2688 10.4437 16.8878 9.731 16.3284 9.17159C15.769 8.61218 15.0563 8.23121 14.2804 8.07687C13.5044 7.92253 12.7002 8.00175 11.9693 8.3045C11.2384 8.60725 10.6137 9.11994 10.1741 9.77773C9.7346 10.4355 9.5 11.2089 9.5 12C9.5 13.0609 9.92143 14.0783 10.6716 14.8284C11.4217 15.5786 12.4391 16 13.5 16ZM13.5 24C15.9417 24.0025 18.3141 23.1885 20.24 21.6875C19.5166 20.5561 18.52 19.625 17.3421 18.9801C16.1642 18.3351 14.8429 17.9971 13.5 17.9971C12.1571 17.9971 10.8358 18.3351 9.6579 18.9801C8.48001 19.625 7.48342 20.5561 6.76 21.6875C8.68587 23.1885 11.0583 24.0025 13.5 24Z"
        fill="currentColor"
      />
    </svg>
  );
};
