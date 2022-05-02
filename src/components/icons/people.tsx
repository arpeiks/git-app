import { IconProps } from "@typings/props";

const PeopleIcon = ({ color = "#24292E" }: IconProps) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fill={color}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.49999 3.5C4.96956 3.5 4.46085 3.71071 4.08578 4.08578C3.71071 4.46086 3.49999 4.96956 3.49999 5.5C3.49999 6.03043 3.71071 6.53914 4.08578 6.91421C4.46085 7.28928 4.96956 7.5 5.49999 7.5C6.03042 7.5 6.53913 7.28928 6.91421 6.91421C7.28928 6.53914 7.49999 6.03043 7.49999 5.5C7.49999 4.96956 7.28928 4.46086 6.91421 4.08578C6.53913 3.71071 6.03042 3.5 5.49999 3.5ZM1.99999 5.5C1.99992 4.91987 2.14405 4.34882 2.41942 3.83821C2.69479 3.32761 3.09276 2.89346 3.57754 2.57481C4.06232 2.25616 4.61871 2.06301 5.19665 2.01274C5.7746 1.96246 6.35598 2.05663 6.8885 2.28677C7.42102 2.51692 7.88799 2.87582 8.24739 3.33121C8.6068 3.78659 8.84738 4.32417 8.94749 4.89559C9.0476 5.46702 9.0041 6.05437 8.8209 6.60481C8.63771 7.15525 8.32056 7.65153 7.89799 8.049C8.69485 8.43558 9.38671 9.00867 9.91488 9.71963C10.4431 10.4306 10.792 11.2585 10.932 12.133C10.9632 12.3295 10.915 12.5304 10.798 12.6914C10.6811 12.8524 10.505 12.9603 10.3085 12.9915C10.112 13.0227 9.91111 12.9745 9.75011 12.8575C9.58911 12.7406 9.48115 12.5645 9.44999 12.368C9.29867 11.4294 8.81804 10.5753 8.09424 9.95882C7.37043 9.34235 6.45074 9.00379 5.49999 9.00379C4.54924 9.00379 3.62956 9.34235 2.90575 9.95882C2.18194 10.5753 1.70131 11.4294 1.54999 12.368C1.5345 12.4653 1.49998 12.5586 1.44843 12.6426C1.39687 12.7266 1.32928 12.7996 1.24952 12.8574C1.16975 12.9153 1.07937 12.9568 0.983542 12.9797C0.88771 13.0027 0.788301 13.0065 0.690991 12.991C0.593682 12.9755 0.500377 12.941 0.416405 12.8894C0.332433 12.8379 0.259438 12.7703 0.201587 12.6905C0.143736 12.6108 0.102162 12.5204 0.07924 12.4245C0.0563177 12.3287 0.0524954 12.2293 0.0679914 12.132C0.208326 11.2578 0.557366 10.4304 1.08552 9.71976C1.61368 9.00917 2.30538 8.4364 3.10199 8.05C2.75352 7.72304 2.4759 7.328 2.28635 6.88937C2.09679 6.45073 1.99932 5.97784 1.99999 5.5ZM11 4C10.8011 4 10.6103 4.07901 10.4697 4.21967C10.329 4.36032 10.25 4.55108 10.25 4.75C10.25 4.94891 10.329 5.13967 10.4697 5.28033C10.6103 5.42098 10.8011 5.5 11 5.5C11.3383 5.50002 11.6667 5.61443 11.9319 5.82465C12.197 6.03487 12.3833 6.32854 12.4604 6.65798C12.5375 6.98742 12.501 7.33327 12.3568 7.63934C12.2126 7.94542 11.9692 8.19375 11.666 8.344C11.541 8.40618 11.4358 8.50203 11.3623 8.62075C11.2888 8.73948 11.2499 8.87636 11.25 9.016V9.368C11.2498 9.53646 11.3063 9.70009 11.4104 9.83252C11.5145 9.96495 11.6602 10.0585 11.824 10.098C13.024 10.387 13.986 11.298 14.346 12.47C14.3745 12.5645 14.4215 12.6525 14.4841 12.7289C14.5468 12.8052 14.6239 12.8685 14.7111 12.915C14.7982 12.9614 14.8937 12.9902 14.992 12.9997C15.0903 13.0092 15.1895 12.9991 15.284 12.9702C15.3784 12.9412 15.4662 12.8939 15.5422 12.8309C15.6183 12.7679 15.6812 12.6905 15.7273 12.6031C15.7734 12.5158 15.8018 12.4202 15.8108 12.3218C15.8199 12.2235 15.8094 12.1243 15.78 12.03C15.5798 11.3806 15.2496 10.7787 14.8095 10.261C14.3694 9.74317 13.8286 9.32028 13.22 9.018C13.6109 8.58794 13.8686 8.05357 13.9615 7.47985C14.0545 6.90613 13.9788 6.31776 13.7437 5.78625C13.5085 5.25474 13.124 4.80298 12.637 4.48587C12.1499 4.16876 11.5812 3.99996 11 4Z"
    />
  </svg>
);

export default PeopleIcon;