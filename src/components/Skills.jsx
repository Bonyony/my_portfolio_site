import React from "react";

const Skills = () => {
  return (
    <>
      <div id="skills"></div>
      <div className="mx-24 mt-40 mb-24 ">
        <h1 className="font-black text-5xl">SKILLS</h1>

        <div id="logos" className="grid grid-flow-row gap-5 mt-5 font-mono">
          <div id="webstack" className="flex flex-row justify-between">
            <div className="flex flex-row gap-5">
              {/* html */}
              <svg
                height="100px"
                width="100px"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="HTML5"
                role="img"
                viewBox="0 0 512 512"
              >
                <path fill="#e34f26" d="M71 460L30 0h451l-41 460-185 52" />
                <path fill="#ef652a" d="M256 472l149-41 35-394H256" />
                <path
                  fill="#ebebeb"
                  d="M256 208h-75l-5-58h80V94H114l15 171h127zm-1 147l-63-17-4-45h-56l7 89 116 32z"
                />
                <path
                  fill="#ffffff"
                  d="M255 208v57h70l-7 73-63 17v59l116-32 16-174zm0-114v56h137l5-56z"
                />
              </svg>
              {/* css */}
              <svg
                height="100px"
                width="100px"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="CSS3"
                role="img"
                viewBox="0 0 512 512"
              >
                <path fill="#264de4" d="M72 460L30 0h451l-41 460-184 52" />
                <path fill="#2965f1" d="M256 37V472l149-41 35-394" />
                <path
                  fill="#ebebeb"
                  d="m114 94h142v56H119m5 58h132v57H129m3 28h56l4 45 64 17v59L139 382"
                />
                <path
                  fill="#ffffff"
                  d="m256 208v57h69l-7 73-62 17v59l115-32 26-288H256v56h80l-5.5 58Z"
                />
              </svg>
              {/* js */}
              <svg
                width="100px"
                height="100px"
                viewBox="0 0 256 256"
                xmlns="http://www.w3.org/2000/svg"
                // preserveAspectRatio="xMinYMin meet"
              >
                <path d="M0 0h256v256H0V0z" fill="#F7DF1E" />
                <path d="M67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371 7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259-19.245 0-30.416-9.967-36.087-21.996M152.381 211.354l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607 9.969 0 16.325-4.984 16.325-11.858 0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257 0-18.044 13.747-31.792 35.228-31.792 15.294 0 26.292 5.328 34.196 19.247L210.29 147.43c-4.125-7.389-8.591-10.31-15.465-10.31-7.046 0-11.514 4.468-11.514 10.31 0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804 0 21.654-17.012 33.51-39.867 33.51-22.339 0-36.774-10.654-43.819-24.574" />
              </svg>
            </div>
            <div className="bg-slate-300 max-w-[50%] p-2 rounded-tr-xl rounded-bl-xl">
              <p>
                <strong>HTML5</strong>, <strong>CSS3</strong> and{" "}
                <strong>JavaScript</strong> are the technologies which make up
                my core web-stack. These are the foundations for everything that
                I do. I am very confident in my skills and abilities with each
                of these!
              </p>
            </div>
          </div>

          <div id="frameworks" className="flex flex-row justify-between">
            <div className="flex flex-row gap-5">
              {/* React */}
              <svg
                width="100px"
                height="100px"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.6789 15.9759C18.6789 14.5415 17.4796 13.3785 16 13.3785C14.5206 13.3785 13.3211 14.5415 13.3211 15.9759C13.3211 17.4105 14.5206 18.5734 16 18.5734C17.4796 18.5734 18.6789 17.4105 18.6789 15.9759Z"
                  fill="#53C1DE"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M24.7004 11.1537C25.2661 8.92478 25.9772 4.79148 23.4704 3.39016C20.9753 1.99495 17.7284 4.66843 16.0139 6.27318C14.3044 4.68442 10.9663 2.02237 8.46163 3.42814C5.96751 4.82803 6.73664 8.8928 7.3149 11.1357C4.98831 11.7764 1 13.1564 1 15.9759C1 18.7874 4.98416 20.2888 7.29698 20.9289C6.71658 23.1842 5.98596 27.1909 8.48327 28.5877C10.9973 29.9932 14.325 27.3945 16.0554 25.7722C17.7809 27.3864 20.9966 30.0021 23.4922 28.6014C25.9956 27.1963 25.3436 23.1184 24.7653 20.8625C27.0073 20.221 31 18.7523 31 15.9759C31 13.1835 26.9903 11.7923 24.7004 11.1537ZM24.4162 19.667C24.0365 18.5016 23.524 17.2623 22.8971 15.9821C23.4955 14.7321 23.9881 13.5088 24.3572 12.3509C26.0359 12.8228 29.7185 13.9013 29.7185 15.9759C29.7185 18.07 26.1846 19.1587 24.4162 19.667ZM22.85 27.526C20.988 28.571 18.2221 26.0696 16.9478 24.8809C17.7932 23.9844 18.638 22.9422 19.4625 21.7849C20.9129 21.6602 22.283 21.4562 23.5256 21.1777C23.9326 22.7734 24.7202 26.4763 22.85 27.526ZM9.12362 27.5111C7.26143 26.47 8.11258 22.8946 8.53957 21.2333C9.76834 21.4969 11.1286 21.6865 12.5824 21.8008C13.4123 22.9332 14.2816 23.9741 15.1576 24.8857C14.0753 25.9008 10.9945 28.557 9.12362 27.5111ZM2.28149 15.9759C2.28149 13.874 5.94207 12.8033 7.65904 12.3326C8.03451 13.5165 8.52695 14.7544 9.12123 16.0062C8.51925 17.2766 8.01977 18.5341 7.64085 19.732C6.00369 19.2776 2.28149 18.0791 2.28149 15.9759ZM9.1037 4.50354C10.9735 3.45416 13.8747 6.00983 15.1159 7.16013C14.2444 8.06754 13.3831 9.1006 12.5603 10.2265C11.1494 10.3533 9.79875 10.5569 8.55709 10.8297C8.09125 9.02071 7.23592 5.55179 9.1037 4.50354ZM20.3793 11.5771C21.3365 11.6942 22.2536 11.85 23.1147 12.0406C22.8562 12.844 22.534 13.6841 22.1545 14.5453C21.6044 13.5333 21.0139 12.5416 20.3793 11.5771ZM16.0143 8.0481C16.6054 8.66897 17.1974 9.3623 17.7798 10.1145C16.5985 10.0603 15.4153 10.0601 14.234 10.1137C14.8169 9.36848 15.414 8.67618 16.0143 8.0481ZM9.8565 14.5444C9.48329 13.6862 9.16398 12.8424 8.90322 12.0275C9.75918 11.8418 10.672 11.69 11.623 11.5748C10.9866 12.5372 10.3971 13.5285 9.8565 14.5444ZM11.6503 20.4657C10.6679 20.3594 9.74126 20.2153 8.88556 20.0347C9.15044 19.2055 9.47678 18.3435 9.85796 17.4668C10.406 18.4933 11.0045 19.4942 11.6503 20.4657ZM16.0498 23.9915C15.4424 23.356 14.8365 22.6531 14.2448 21.8971C15.4328 21.9423 16.6231 21.9424 17.811 21.891C17.2268 22.6608 16.6369 23.3647 16.0498 23.9915ZM22.1667 17.4222C22.5677 18.3084 22.9057 19.1657 23.1742 19.9809C22.3043 20.1734 21.3652 20.3284 20.3757 20.4435C21.015 19.4607 21.6149 18.4536 22.1667 17.4222ZM18.7473 20.5941C16.9301 20.72 15.1016 20.7186 13.2838 20.6044C12.2509 19.1415 11.3314 17.603 10.5377 16.0058C11.3276 14.4119 12.2404 12.8764 13.2684 11.4158C15.0875 11.2825 16.9178 11.2821 18.7369 11.4166C19.7561 12.8771 20.6675 14.4086 21.4757 15.9881C20.6771 17.5812 19.7595 19.1198 18.7473 20.5941ZM22.8303 4.4666C24.7006 5.51254 23.8681 9.22726 23.4595 10.8426C22.2149 10.5641 20.8633 10.3569 19.4483 10.2281C18.6239 9.09004 17.7698 8.05518 16.9124 7.15949C18.1695 5.98441 20.9781 3.43089 22.8303 4.4666Z"
                  fill="#53C1DE"
                />
              </svg>
              {/* tailwind */}
              <svg
                width="100px"
                height="100px"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>file_type_tailwind</title>
                <path
                  d="M9,13.7q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q11.1,10.9,9,13.7ZM2,22.1q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q4.1,19.3,2,22.1Z"
                  fill="#44a8b3"
                />
              </svg>
              {/* Vite */}
              <svg
                width="100px"
                height="100px"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
              >
                <title>file_type_vite</title>
                <path
                  d="M29.8836 6.146L16.7418 29.6457c-.2714.4851-.9684.488-1.2439.0052L2.0956 6.1482c-.3-.5262.1498-1.1635.746-1.057l13.156 2.3516a.7144.7144 0 00.2537-.0004l12.8808-2.3478c.5942-.1083 1.0463.5241.7515 1.0513z"
                  fill="url(#paint0_linear)"
                />
                <path
                  d="M22.2644 2.0069l-9.7253 1.9056a.3571.3571 0 00-.2879.3294l-.5982 10.1038c-.014.238.2045.4227.4367.3691l2.7077-.6248c.2534-.0585.4823.1647.4302.4194l-.8044 3.9393c-.0542.265.1947.4918.4536.4132l1.6724-.5082c.2593-.0787.5084.1487.4536.414l-1.2784 6.1877c-.08.387.4348.598.6495.2662L16.5173 25 24.442 9.1848c.1327-.2648-.096-.5667-.387-.5106l-2.787.5379c-.262.0505-.4848-.1934-.4109-.4497l1.8191-6.306c.074-.2568-.1496-.5009-.4118-.4495z"
                  fill="url(#paint1_linear)"
                />
                <defs id="defs50">
                  <linearGradient
                    id="paint0_linear"
                    x1="6.0002"
                    y1="32.9999"
                    x2="235"
                    y2="344"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(.07142 0 0 .07142 1.3398 1.8944)"
                  >
                    <stop stop-color="#41D1FF" id="stop38" />
                    <stop offset="1" stop-color="#BD34FE" id="stop40" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear"
                    x1="194.651"
                    y1="8.8182"
                    x2="236.076"
                    y2="292.989"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(.07142 0 0 .07142 1.3398 1.8944)"
                  >
                    <stop stop-color="#FFEA83" id="stop43" />
                    <stop offset=".0833" stop-color="#FFDD35" id="stop45" />
                    <stop offset="1" stop-color="#FFA800" id="stop47" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="bg-slate-200 max-w-[50%] p-2 rounded-tr-xl rounded-bl-xl">
              <p>
                <strong>React</strong>, <strong>TailwindCSS</strong> and{" "}
                <strong>Vite</strong> are my preferred frameworks and bundler.
                They each make my workflow much faster and easier.
              </p>
            </div>
          </div>

          <div id="utility" className="flex flex-row justify-between">
            <div className="flex flex-row gap-5">
              {/* Git */}
              <svg
                width="100px"
                height="100px"
                viewBox="0 0 256 256"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMinYMin meet"
              >
                <path
                  d="M251.172 116.594L139.4 4.828c-6.433-6.437-16.873-6.437-23.314 0l-23.21 23.21 29.443 29.443c6.842-2.312 14.688-.761 20.142 4.693 5.48 5.489 7.02 13.402 4.652 20.266l28.375 28.376c6.865-2.365 14.786-.835 20.269 4.657 7.663 7.66 7.663 20.075 0 27.74-7.665 7.666-20.08 7.666-27.749 0-5.764-5.77-7.188-14.235-4.27-21.336l-26.462-26.462-.003 69.637a19.82 19.82 0 0 1 5.188 3.71c7.663 7.66 7.663 20.076 0 27.747-7.665 7.662-20.086 7.662-27.74 0-7.663-7.671-7.663-20.086 0-27.746a19.654 19.654 0 0 1 6.421-4.281V94.196a19.378 19.378 0 0 1-6.421-4.281c-5.806-5.798-7.202-14.317-4.227-21.446L81.47 39.442l-76.64 76.635c-6.44 6.443-6.44 16.884 0 23.322l111.774 111.768c6.435 6.438 16.873 6.438 23.316 0l111.251-111.249c6.438-6.44 6.438-16.887 0-23.324"
                  fill="#DE4C36"
                />
              </svg>
            </div>
            <div className="bg-slate-100 max-w-[50%] p-2 rounded-tr-xl rounded-bl-xl">
              <p>
                <strong>Git</strong> (<strong>GitHub</strong>) is what makes my
                collaborative work easy. Whether I am contributing to projects,
                studying repositories or using libraries; I am always using Git.
              </p>
            </div>
          </div>

          <div id="newSkills" className="flex flex-row justify-between">
            <div className="flex flex-row gap-5">
              {/* Skills that I am learning */}
              {/* expo */}
              <svg
                fill="#000000"
                width="100px"
                height="100px"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M24.292 15.547c1.968 0.131 3.729-1.213 4.115-3.145-0.475-0.735-1.287-1.177-2.161-1.177-2.272-0.052-3.491 2.651-1.953 4.323zM15.115 4.697l5.359-3.104-1.708-0.963-7.391 4.281 0.589 0.328 1.119 0.629 2.032-1.176zM21.161 1.307c0.089 0.027 0.161 0.1 0.188 0.188l2.484 7.593c0.047 0.131-0.005 0.272-0.125 0.344-1.968 1.156-2.916 3.489-2.317 5.693 0.656 2.391 2.937 3.953 5.401 3.703 0.135-0.011 0.265 0.073 0.307 0.203l2.563 7.803c0.041 0.131-0.011 0.271-0.125 0.344l-7.859 4.771c-0.037 0.021-0.084 0.036-0.131 0.036-0.068 0.016-0.14 0-0.203-0.041l-2.765-1.797c-0.048-0.031-0.084-0.077-0.109-0.129l-5.396-12.896-8.219 4.875c-0.016 0.011-0.037 0.021-0.052 0.032-0.084 0.036-0.183 0.025-0.261-0.021l-1.859-1.093c-0.136-0.073-0.188-0.245-0.115-0.381l7.953-15.749c0.025-0.057 0.077-0.104 0.135-0.131l7.959-4.609c0.088-0.052 0.197-0.057 0.292-0.005zM12.839 6.407l-1.932-1.089-7.693 15.229 1.396 0.823 6.631-9.015c0.063-0.089 0.167-0.136 0.271-0.12 0.104 0.011 0.192 0.077 0.235 0.177l7.228 17.296 1.933 1.251-8.063-24.552zM26.245 16.964c-2.256 0-3.787-2.292-2.923-4.376 0.86-2.083 3.563-2.619 5.156-1.025 0.595 0.593 0.928 1.396 0.928 2.235 0.005 1.749-1.412 3.167-3.161 3.167z" />
              </svg>
              {/* TypeScript */}
              <svg
                width="100px"
                height="100px"
                viewBox="0 0 256 256"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                preserveAspectRatio="xMidYMid"
              >
                <g>
                  <polygon
                    fill="#007ACC"
                    transform="translate(128.000000, 128.000000) scale(1, -1) translate(-128.000000, -128.000000) "
                    points="0 128 0 0 128 0 256 0 256 128 256 256 128 256 0 256"
                  ></polygon>
                  <path
                    d="M146.658132,223.436863 L146.739401,212.953054 L130.079084,212.953054 L113.418767,212.953054 L113.418767,165.613371 L113.418767,118.273689 L101.63464,118.273689 L89.8505126,118.273689 L89.8505126,165.613371 L89.8505126,212.953054 L73.1901951,212.953054 L56.5298776,212.953054 L56.5298776,223.233689 C56.5298776,228.922577 56.6517824,233.676863 56.8143221,233.798768 C56.9362269,233.961308 77.2130522,234.042577 101.797179,234.001943 L146.536227,233.880038 L146.658132,223.436863 Z"
                    fill="#FFFFFF"
                    transform="translate(101.634640, 176.142993) rotate(-180.000000) translate(-101.634640, -176.142993) "
                  ></path>
                  <path
                    d="M206.566631,234.272145 C213.068219,232.646748 218.025679,229.761668 222.57679,225.048018 C224.933616,222.528653 228.428219,217.936907 228.712663,216.839764 C228.793933,216.514684 217.659965,209.037859 210.914568,204.852462 C210.670758,204.689922 209.69552,205.74643 208.598377,207.371827 C205.306949,212.166748 201.852981,214.239129 196.570441,214.604843 C188.809171,215.133097 183.811076,211.069605 183.851711,204.283573 C183.851711,202.292462 184.136155,201.114049 184.948854,199.488653 C186.65552,195.953414 189.825044,193.840399 199.7806,189.533097 C218.106949,181.649922 225.949489,176.448653 230.825679,169.053097 C236.270758,160.804208 237.489806,147.638494 233.792028,137.845478 C229.728536,127.199129 219.651076,119.966113 205.469489,117.568653 C201.080917,116.796589 190.678377,116.918494 185.964727,117.771827 C175.684092,119.600399 165.931711,124.679764 159.917743,131.343891 C157.560917,133.944526 152.969171,140.730557 153.253616,141.218176 C153.37552,141.380716 154.432028,142.030875 155.610441,142.721668 C156.748219,143.371827 161.05552,145.850557 165.119012,148.207383 L172.473933,152.474049 L174.01806,150.198494 C176.171711,146.907065 180.885362,142.396589 183.729806,140.893097 C191.897425,136.585795 203.112663,137.195319 208.639012,142.15278 C210.995838,144.30643 211.971076,146.541351 211.971076,149.83278 C211.971076,152.799129 211.605362,154.099446 210.061235,156.334367 C208.070123,159.178811 204.006631,161.576272 192.466314,166.574367 C179.259965,172.263256 173.571076,175.798494 168.369806,181.406113 C165.362822,184.656907 162.518377,189.858176 161.339965,194.206113 C160.364727,197.822621 160.120917,206.884208 160.892981,210.541351 C163.61552,223.300716 173.245996,232.199764 187.143139,234.841034 C191.653616,235.694367 202.137425,235.369287 206.566631,234.272145 Z"
                    fill="#FFFFFF"
                    transform="translate(194.578507, 176.190240) scale(1, -1) translate(-194.578507, -176.190240) "
                  ></path>
                </g>
              </svg>
            </div>
            <div className="bg-slate-50 max-w-[50%] p-2 rounded-tr-xl rounded-bl-xl">
              <p>
                <strong>Expo</strong> and <strong>TypeScript</strong> are
                technologies that I work with, but am still strengthening my
                skillbase. Expo is my favorite tool on this entire list as when
                combined with Expo Go, writing React Native code and seeing it
                appear on your phone screen truly feels like living in the
                future. I use TypeScript mainly in collaboration with others.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
