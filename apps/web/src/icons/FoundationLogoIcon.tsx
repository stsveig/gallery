import { SVGProps } from 'react';

type Props = {
  mode?: 'light' | 'dark';
} & SVGProps<SVGSVGElement>;
export function FoundationLogoIcon({ mode = 'light', ...props }: Props) {
  return (
    <svg width="24" viewBox="0 0 483 163" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M319.319 81.1272C319.319 125.933 282.997 162.254 238.192 162.254C193.386 162.254 157.065 125.933 157.065 81.1272C157.065 36.3219 193.386 0 238.192 0C282.997 0 319.319 36.3219 319.319 81.1272ZM82.0191 8.9492C83.8215 5.82733 88.3276 5.82733 90.13 8.9492L171.515 149.912C173.317 153.034 171.064 156.936 167.459 156.936H4.68978C1.08496 156.936 -1.16805 153.034 0.634362 149.912L82.0191 8.9492ZM339.31 4.8383C334.138 4.8383 329.945 9.03141 329.945 14.2039V148.069C329.945 153.242 334.138 157.435 339.31 157.435H473.176C478.348 157.435 482.541 153.242 482.541 148.069V14.2039C482.541 9.03142 478.348 4.8383 473.176 4.8383H339.31Z"
        fill={mode === 'light' ? '#fff' : '#000'}
      />
    </svg>
  );
}
