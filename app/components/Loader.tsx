export default function Loader() {
  return (
    <div className="loader-container">

      <div className="main-container">
        <div className="loader">
          <svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="chipGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2d2d2d"></stop>
                <stop offset="100%" stopColor="#0f0f0f"></stop>
              </linearGradient>

              <linearGradient id="textGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#eeeeee"></stop>
                <stop offset="100%" stopColor="#888888"></stop>
              </linearGradient>

              <linearGradient id="pinGradient" x1="1" y1="0" x2="0" y2="0">
                <stop offset="0%" stopColor="#bbbbbb"></stop>
                <stop offset="50%" stopColor="#888888"></stop>
                <stop offset="100%" stopColor="#555555"></stop>
              </linearGradient>
            </defs>

            <g id="traces">
              <path d="M100 100 H200 V210 H326" className="trace-bg"></path>
              <path d="M100 100 H200 V210 H326" className="trace-flow purple"></path>

              <path d="M80 180 H180 V230 H326" className="trace-bg"></path>
              <path d="M80 180 H180 V230 H326" className="trace-flow blue"></path>

              <path d="M60 260 H150 V250 H326" className="trace-bg"></path>
              <path d="M60 260 H150 V250 H326" className="trace-flow yellow"></path>

              <path d="M100 350 H200 V270 H326" className="trace-bg"></path>
              <path d="M100 350 H200 V270 H326" className="trace-flow green"></path>

              <path d="M700 90 H560 V210 H474" className="trace-bg"></path>
              <path d="M700 90 H560 V210 H474" className="trace-flow blue"></path>

              <path d="M740 160 H580 V230 H474" className="trace-bg"></path>
              <path d="M740 160 H580 V230 H474" className="trace-flow green"></path>

              <path d="M720 250 H590 V250 H474" className="trace-bg"></path>
              <path d="M720 250 H590 V250 H474" className="trace-flow red"></path>

              <path d="M680 340 H570 V270 H474" className="trace-bg"></path>
              <path d="M680 340 H570 V270 H474" className="trace-flow yellow"></path>
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
              strokeWidth="3"
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
              fontFamily="Arial, sans-serif"
              fontSize="22"
              fill="url(#textGradient)"
              textAnchor="middle"
              alignmentBaseline="middle"
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
}
