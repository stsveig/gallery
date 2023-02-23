export default function HideIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3.5 3.5L20.5 20.5" stroke="black" strokeMiterlimit="10" />
      <path
        d="M9 6.4C9.9722 6.10721 10.985 5.97216 12 6C14.0482 6.02814 16.0524 6.59812 17.8088 7.65199C19.5653 8.70586 21.0113 10.206 22 12C21.1396 13.6038 19.9046 14.976 18.4 16"
        stroke="black"
      />
      <path
        d="M16.9 16.9C15.3606 17.6025 13.6919 17.9771 12 18C9.95184 17.9719 7.94764 17.4019 6.19119 16.348C4.43474 15.2941 2.98867 13.794 2 12C3.17407 9.8952 4.94994 8.18897 7.1 7.1"
        stroke="black"
      />
      <path
        d="M12 9C12.3977 8.98603 12.7941 9.05408 13.1644 9.1999C13.5347 9.34572 13.871 9.5662 14.1524 9.84761C14.4338 10.129 14.6543 10.4653 14.8001 10.8356C14.9459 11.2059 15.014 11.6023 15 12"
        stroke="black"
      />
      <path
        d="M14.1 14.1C13.837 14.3944 13.5127 14.6276 13.1499 14.7831C12.7871 14.9386 12.3945 15.0126 12 15C11.6023 15.014 11.2059 14.9459 10.8356 14.8001C10.4653 14.6543 10.129 14.4338 9.84761 14.1524C9.5662 13.871 9.34572 13.5347 9.1999 13.1644C9.05408 12.7941 8.98603 12.3977 9 12C8.98738 11.6055 9.06143 11.2129 9.21693 10.8501C9.37243 10.4873 9.60559 10.163 9.9 9.9"
        stroke="black"
      />
    </svg>
  );
}