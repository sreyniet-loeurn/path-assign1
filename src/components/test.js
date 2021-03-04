// import React from "react";

// function test() {
//   return (
//     <div class="col-md-8">
//       <div class="card">
//         <div class="card-body">
//           <div class="d-md-flex align-items-center">
//             <div>
//               <h4 class="card-title">Sales Summary</h4>
//               <h5 class="card-subtitle">Overview of Latest Month</h5>
//             </div>
//             <div class="ms-auto d-flex no-block align-items-center">
//               <ul class="list-inline font-12 dl m-r-15 m-b-0">
//                 <li class="list-inline-item text-info">
//                   <i class="fa fa-circle"></i> Iphone
//                 </li>
//                 <li class="list-inline-item text-primary">
//                   <i class="fa fa-circle"></i> Ipad
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div class="row">
//             <div class="col-lg-12">
//               <div class="campaign ct-charts">
//                 <div
//                   class="chartist-tooltip"
//                   style="top: 71px; left: 315px;"
//                 ></div>
//                 <svg
//                   xmlns:ct="http://gionkunz.github.com/chartist-js/ct"
//                   width="100%"
//                   height="100%"
//                   class="ct-chart-line"
//                   style="width: 100%; height: 100%;"
//                 >
//                   <g class="ct-grids">
//                     <line
//                       x1="30"
//                       x2="30"
//                       y1="15"
//                       y2="215"
//                       class="ct-grid ct-horizontal"
//                     ></line>
//                     <line
//                       x1="104.42633928571429"
//                       x2="104.42633928571429"
//                       y1="15"
//                       y2="215"
//                       class="ct-grid ct-horizontal"
//                     ></line>
//                     <line
//                       x1="178.85267857142858"
//                       x2="178.85267857142858"
//                       y1="15"
//                       y2="215"
//                       class="ct-grid ct-horizontal"
//                     ></line>
//                     <line
//                       x1="253.2790178571429"
//                       x2="253.2790178571429"
//                       y1="15"
//                       y2="215"
//                       class="ct-grid ct-horizontal"
//                     ></line>
//                     <line
//                       x1="327.70535714285717"
//                       x2="327.70535714285717"
//                       y1="15"
//                       y2="215"
//                       class="ct-grid ct-horizontal"
//                     ></line>
//                     <line
//                       x1="402.13169642857144"
//                       x2="402.13169642857144"
//                       y1="15"
//                       y2="215"
//                       class="ct-grid ct-horizontal"
//                     ></line>
//                     <line
//                       x1="476.5580357142858"
//                       x2="476.5580357142858"
//                       y1="15"
//                       y2="215"
//                       class="ct-grid ct-horizontal"
//                     ></line>
//                     <line
//                       x1="550.984375"
//                       x2="550.984375"
//                       y1="15"
//                       y2="215"
//                       class="ct-grid ct-horizontal"
//                     ></line>
//                     <line
//                       y1="215"
//                       y2="215"
//                       x1="30"
//                       x2="550.984375"
//                       class="ct-grid ct-vertical"
//                     ></line>
//                     <line
//                       y1="148.33333333333331"
//                       y2="148.33333333333331"
//                       x1="30"
//                       x2="550.984375"
//                       class="ct-grid ct-vertical"
//                     ></line>
//                     <line
//                       y1="81.66666666666666"
//                       y2="81.66666666666666"
//                       x1="30"
//                       x2="550.984375"
//                       class="ct-grid ct-vertical"
//                     ></line>
//                     <line
//                       y1="15"
//                       y2="15"
//                       x1="30"
//                       x2="550.984375"
//                       class="ct-grid ct-vertical"
//                     ></line>
//                   </g>
//                   <g>
//                     <g class="ct-series ct-series-a">
//                       <path
//                         d="M30,215L30,215C54.809,203.889,79.618,185.37,104.426,181.667C129.235,177.963,154.044,177.963,178.853,175C203.661,172.037,228.47,169.62,253.279,161.667C278.088,153.713,302.897,48.333,327.705,48.333C352.514,48.333,377.323,150.817,402.132,155C426.94,159.183,451.749,161.667,476.558,161.667C501.367,161.667,526.176,90.556,550.984,55L550.984,215Z"
//                         class="ct-area"
//                         x1="NaN"
//                       ></path>
//                       <path
//                         d="M30,215C54.809,203.889,79.618,185.37,104.426,181.667C129.235,177.963,154.044,177.963,178.853,175C203.661,172.037,228.47,169.62,253.279,161.667C278.088,153.713,302.897,48.333,327.705,48.333C352.514,48.333,377.323,150.817,402.132,155C426.94,159.183,451.749,161.667,476.558,161.667C501.367,161.667,526.176,90.556,550.984,55"
//                         class="ct-line"
//                       ></path>
//                       <line
//                         x1="30"
//                         y1="215"
//                         x2="30.01"
//                         y2="215"
//                         class="ct-point"
//                         ct:value="0"
//                       ></line>
//                       <line
//                         x1="104.42633928571429"
//                         y1="181.66666666666666"
//                         x2="104.4363392857143"
//                         y2="181.66666666666666"
//                         class="ct-point"
//                         ct:value="5"
//                       ></line>
//                       <line
//                         x1="178.85267857142858"
//                         y1="175"
//                         x2="178.86267857142857"
//                         y2="175"
//                         class="ct-point"
//                         ct:value="6"
//                       ></line>
//                       <line
//                         x1="253.2790178571429"
//                         y1="161.66666666666666"
//                         x2="253.28901785714288"
//                         y2="161.66666666666666"
//                         class="ct-point"
//                         ct:value="8"
//                       ></line>
//                       <line
//                         x1="327.70535714285717"
//                         y1="48.33333333333334"
//                         x2="327.71535714285716"
//                         y2="48.33333333333334"
//                         class="ct-point"
//                         ct:value="25"
//                       ></line>
//                       <line
//                         x1="402.13169642857144"
//                         y1="155"
//                         x2="402.14169642857144"
//                         y2="155"
//                         class="ct-point"
//                         ct:value="9"
//                       ></line>
//                       <line
//                         x1="476.5580357142858"
//                         y1="161.66666666666666"
//                         x2="476.56803571428577"
//                         y2="161.66666666666666"
//                         class="ct-point"
//                         ct:value="8"
//                       ></line>
//                       <line
//                         x1="550.984375"
//                         y1="55"
//                         x2="550.994375"
//                         y2="55"
//                         class="ct-point"
//                         ct:value="24"
//                       ></line>
//                     </g>
//                     <g class="ct-series ct-series-b">
//                       <path
//                         d="M30,215L30,215C54.809,208.333,79.618,195,104.426,195C129.235,195,154.044,208.333,178.853,208.333C203.661,208.333,228.47,205.476,253.279,201.667C278.088,197.857,302.897,161.667,327.705,161.667C352.514,161.667,377.323,208.333,402.132,208.333C426.94,208.333,451.749,181.667,476.558,181.667C501.367,181.667,526.176,199.444,550.984,208.333L550.984,215Z"
//                         class="ct-area"
//                         x1="NaN"
//                       ></path>
//                       <path
//                         d="M30,215C54.809,208.333,79.618,195,104.426,195C129.235,195,154.044,208.333,178.853,208.333C203.661,208.333,228.47,205.476,253.279,201.667C278.088,197.857,302.897,161.667,327.705,161.667C352.514,161.667,377.323,208.333,402.132,208.333C426.94,208.333,451.749,181.667,476.558,181.667C501.367,181.667,526.176,199.444,550.984,208.333"
//                         class="ct-line"
//                       ></path>
//                       <line
//                         x1="30"
//                         y1="215"
//                         x2="30.01"
//                         y2="215"
//                         class="ct-point"
//                         ct:value="0"
//                       ></line>
//                       <line
//                         x1="104.42633928571429"
//                         y1="195"
//                         x2="104.4363392857143"
//                         y2="195"
//                         class="ct-point"
//                         ct:value="3"
//                       ></line>
//                       <line
//                         x1="178.85267857142858"
//                         y1="208.33333333333334"
//                         x2="178.86267857142857"
//                         y2="208.33333333333334"
//                         class="ct-point"
//                         ct:value="1"
//                       ></line>
//                       <line
//                         x1="253.2790178571429"
//                         y1="201.66666666666666"
//                         x2="253.28901785714288"
//                         y2="201.66666666666666"
//                         class="ct-point"
//                         ct:value="2"
//                       ></line>
//                       <line
//                         x1="327.70535714285717"
//                         y1="161.66666666666666"
//                         x2="327.71535714285716"
//                         y2="161.66666666666666"
//                         class="ct-point"
//                         ct:value="8"
//                       ></line>
//                       <line
//                         x1="402.13169642857144"
//                         y1="208.33333333333334"
//                         x2="402.14169642857144"
//                         y2="208.33333333333334"
//                         class="ct-point"
//                         ct:value="1"
//                       ></line>
//                       <line
//                         x1="476.5580357142858"
//                         y1="181.66666666666666"
//                         x2="476.56803571428577"
//                         y2="181.66666666666666"
//                         class="ct-point"
//                         ct:value="5"
//                       ></line>
//                       <line
//                         x1="550.984375"
//                         y1="208.33333333333334"
//                         x2="550.994375"
//                         y2="208.33333333333334"
//                         class="ct-point"
//                         ct:value="1"
//                       ></line>
//                     </g>
//                   </g>
//                   <g class="ct-labels">
//                     <foreignObject
//                       style="overflow: visible;"
//                       x="30"
//                       y="220"
//                       width="74.42633928571429"
//                       height="20"
//                     >
//                       <span
//                         class="ct-label ct-horizontal ct-end"
//                         xmlns="http://www.w3.org/2000/xmlns/"
//                         style="width: 74px; height: 20px;"
//                       >
//                         1
//                       </span>
//                     </foreignObject>
//                     <foreignObject
//                       style="overflow: visible;"
//                       x="104.42633928571429"
//                       y="220"
//                       width="74.42633928571429"
//                       height="20"
//                     >
//                       <span
//                         class="ct-label ct-horizontal ct-end"
//                         xmlns="http://www.w3.org/2000/xmlns/"
//                         style="width: 74px; height: 20px;"
//                       >
//                         2
//                       </span>
//                     </foreignObject>
//                     <foreignObject
//                       style="overflow: visible;"
//                       x="178.85267857142858"
//                       y="220"
//                       width="74.4263392857143"
//                       height="20"
//                     >
//                       <span
//                         class="ct-label ct-horizontal ct-end"
//                         xmlns="http://www.w3.org/2000/xmlns/"
//                         style="width: 74px; height: 20px;"
//                       >
//                         3
//                       </span>
//                     </foreignObject>
//                     <foreignObject
//                       style="overflow: visible;"
//                       x="253.2790178571429"
//                       y="220"
//                       width="74.42633928571428"
//                       height="20"
//                     >
//                       <span
//                         class="ct-label ct-horizontal ct-end"
//                         xmlns="http://www.w3.org/2000/xmlns/"
//                         style="width: 74px; height: 20px;"
//                       >
//                         4
//                       </span>
//                     </foreignObject>
//                     <foreignObject
//                       style="overflow: visible;"
//                       x="327.70535714285717"
//                       y="220"
//                       width="74.42633928571428"
//                       height="20"
//                     >
//                       <span
//                         class="ct-label ct-horizontal ct-end"
//                         xmlns="http://www.w3.org/2000/xmlns/"
//                         style="width: 74px; height: 20px;"
//                       >
//                         5
//                       </span>
//                     </foreignObject>
//                     <foreignObject
//                       style="overflow: visible;"
//                       x="402.13169642857144"
//                       y="220"
//                       width="74.42633928571433"
//                       height="20"
//                     >
//                       <span
//                         class="ct-label ct-horizontal ct-end"
//                         xmlns="http://www.w3.org/2000/xmlns/"
//                         style="width: 74px; height: 20px;"
//                       >
//                         6
//                       </span>
//                     </foreignObject>
//                     <foreignObject
//                       style="overflow: visible;"
//                       x="476.5580357142858"
//                       y="220"
//                       width="74.42633928571422"
//                       height="20"
//                     >
//                       <span
//                         class="ct-label ct-horizontal ct-end"
//                         xmlns="http://www.w3.org/2000/xmlns/"
//                         style="width: 74px; height: 20px;"
//                       >
//                         7
//                       </span>
//                     </foreignObject>
//                     <foreignObject
//                       style="overflow: visible;"
//                       x="550.984375"
//                       y="220"
//                       width="30"
//                       height="20"
//                     >
//                       <span
//                         class="ct-label ct-horizontal ct-end"
//                         xmlns="http://www.w3.org/2000/xmlns/"
//                         style="width: 30px; height: 20px;"
//                       >
//                         8
//                       </span>
//                     </foreignObject>
//                     <foreignObject
//                       style="overflow: visible;"
//                       y="148.33333333333331"
//                       x="10"
//                       height="66.66666666666667"
//                       width="10"
//                     >
//                       <span
//                         class="ct-label ct-vertical ct-start"
//                         xmlns="http://www.w3.org/2000/xmlns/"
//                         style="height: 67px; width: 10px;"
//                       >
//                         0k
//                       </span>
//                     </foreignObject>
//                     <foreignObject
//                       style="overflow: visible;"
//                       y="81.66666666666664"
//                       x="10"
//                       height="66.66666666666667"
//                       width="10"
//                     >
//                       <span
//                         class="ct-label ct-vertical ct-start"
//                         xmlns="http://www.w3.org/2000/xmlns/"
//                         style="height: 67px; width: 10px;"
//                       >
//                         10k
//                       </span>
//                     </foreignObject>
//                     <foreignObject
//                       style="overflow: visible;"
//                       y="15"
//                       x="10"
//                       height="66.66666666666666"
//                       width="10"
//                     >
//                       <span
//                         class="ct-label ct-vertical ct-start"
//                         xmlns="http://www.w3.org/2000/xmlns/"
//                         style="height: 67px; width: 10px;"
//                       >
//                         20k
//                       </span>
//                     </foreignObject>
//                     <foreignObject
//                       style="overflow: visible;"
//                       y="-15"
//                       x="10"
//                       height="30"
//                       width="10"
//                     >
//                       <span
//                         class="ct-label ct-vertical ct-start"
//                         xmlns="http://www.w3.org/2000/xmlns/"
//                         style="height: 30px; width: 10px;"
//                       >
//                         30k
//                       </span>
//                     </foreignObject>
//                   </g>
//                   <defs>
//                     <linearGradient id="gradient" x1="0" y1="1" x2="0" y2="0">
//                       <stop
//                         offset="0"
//                         stop-color="rgba(255, 255, 255, 1)"
//                       ></stop>
//                       <stop
//                         offset="1"
//                         stop-color="rgba(64, 196, 255, 1)"
//                       ></stop>
//                     </linearGradient>
//                   </defs>
//                 </svg>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default test;
