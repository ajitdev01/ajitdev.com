const Loader = () => {
  return (
    <div className="loader-container">

      <div class="main-container">
        <div class="loader">
          <svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="chipGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#2d2d2d"></stop>
                <stop offset="100%" stop-color="#0f0f0f"></stop>
              </linearGradient>

              <linearGradient id="textGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#eeeeee"></stop>
                <stop offset="100%" stop-color="#888888"></stop>
              </linearGradient>

              <linearGradient id="pinGradient" x1="1" y1="0" x2="0" y2="0">
                <stop offset="0%" stop-color="#bbbbbb"></stop>
                <stop offset="50%" stop-color="#888888"></stop>
                <stop offset="100%" stop-color="#555555"></stop>
              </linearGradient>
            </defs>

            <g id="traces">
              <path d="M100 100 H200 V210 H326" class="trace-bg"></path>
              <path d="M100 100 H200 V210 H326" class="trace-flow purple"></path>

              <path d="M80 180 H180 V230 H326" class="trace-bg"></path>
              <path d="M80 180 H180 V230 H326" class="trace-flow blue"></path>

              <path d="M60 260 H150 V250 H326" class="trace-bg"></path>
              <path d="M60 260 H150 V250 H326" class="trace-flow yellow"></path>

              <path d="M100 350 H200 V270 H326" class="trace-bg"></path>
              <path d="M100 350 H200 V270 H326" class="trace-flow green"></path>

              <path d="M700 90 H560 V210 H474" class="trace-bg"></path>
              <path d="M700 90 H560 V210 H474" class="trace-flow blue"></path>

              <path d="M740 160 H580 V230 H474" class="trace-bg"></path>
              <path d="M740 160 H580 V230 H474" class="trace-flow green"></path>

              <path d="M720 250 H590 V250 H474" class="trace-bg"></path>
              <path d="M720 250 H590 V250 H474" class="trace-flow red"></path>

              <path d="M680 340 H570 V270 H474" class="trace-bg"></path>
              <path d="M680 340 H570 V270 H474" class="trace-flow yellow"></path>
            </g>

            <rect
              x="330"
              y="190"
              width="140"
              height="100"
              rx="20"
              ry="20"
              fill="url(#chipGradient)"
              stroke="#222"
              stroke-width="3"
              filter="drop-shadow(0 0 6px rgba(0,0,0,0.8))"
            ></rect>

            <g>
              <rect
                x="322"
                y="205"
                width="8"
                height="10"
                fill="url(#pinGradient)"
                rx="2"
              ></rect>
              <rect
                x="322"
                y="225"
                width="8"
                height="10"
                fill="url(#pinGradient)"
                rx="2"
              ></rect>
              <rect
                x="322"
                y="245"
                width="8"
                height="10"
                fill="url(#pinGradient)"
                rx="2"
              ></rect>
              <rect
                x="322"
                y="265"
                width="8"
                height="10"
                fill="url(#pinGradient)"
                rx="2"
              ></rect>
            </g>

            <g>
              <rect
                x="470"
                y="205"
                width="8"
                height="10"
                fill="url(#pinGradient)"
                rx="2"
              ></rect>
              <rect
                x="470"
                y="225"
                width="8"
                height="10"
                fill="url(#pinGradient)"
                rx="2"
              ></rect>
              <rect
                x="470"
                y="245"
                width="8"
                height="10"
                fill="url(#pinGradient)"
                rx="2"
              ></rect>
              <rect
                x="470"
                y="265"
                width="8"
                height="10"
                fill="url(#pinGradient)"
                rx="2"
              ></rect>
            </g>

            <text
              x="400"
              y="240"
              font-family="Arial, sans-serif"
              font-size="22"
              fill="url(#textGradient)"
              text-anchor="middle"
              alignment-baseline="middle"
            >
              Loading
            </text>

            <circle cx="100" cy="100" r="5" fill="black"></circle>
            <circle cx="80" cy="180" r="5" fill="black"></circle>
            <circle cx="60" cy="260" r="5" fill="black"></circle>
            <circle cx="100" cy="350" r="5" fill="black"></circle>

            <circle cx="700" cy="90" r="5" fill="black"></circle>
            <circle cx="740" cy="160" r="5" fill="black"></circle>
            <circle cx="720" cy="250" r="5" fill="black"></circle>
            <circle cx="680" cy="340" r="5" fill="black"></circle>
          </svg>
        </div>
      </div>


    </div>
  );
};

export default Loader;
