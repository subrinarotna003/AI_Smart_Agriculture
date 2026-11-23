/** A lightweight animated field, drawn locally so the banner works without remote media. */
export default function FarmScene() {
  return (
    <svg className="farm-scene" viewBox="0 0 1440 700" preserveAspectRatio="xMaxYMid slice" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="farm-sky" x2="0" y2="1"><stop stopColor="#bdded0" /><stop offset="1" stopColor="#f0f2c8" /></linearGradient>
        <linearGradient id="farm-ground" x2="0" y2="1"><stop stopColor="#729b39" /><stop offset="1" stopColor="#235633" /></linearGradient>
        <linearGradient id="farm-leaf" x2="1" y2="0"><stop stopColor="#336b32" /><stop offset="1" stopColor="#a4cc55" /></linearGradient>
        <radialGradient id="farm-glow"><stop stopColor="#fff6c8" stopOpacity=".7" /><stop offset="1" stopColor="#fff6c8" stopOpacity="0" /></radialGradient>
        <g id="rice-plant">
          <path d="M0 0 Q-3-42 5-89 M0 0 Q-22-44-29-65 M0 0 Q26-30 34-67 M0 0 Q-4-34-19-88 M0 0 Q12-43 23-99" fill="none" stroke="#b5cf62" strokeWidth="3" strokeLinecap="round" />
          <path d="M-3-22 Q-44-35-44-62 Q-14-56-3-22 M4-28 Q42-46 45-79 Q14-64 4-28 M0-12 Q-28-17-36-38 Q-9-34 0-12 M7-51 Q-11-71-8-103 Q8-84 7-51" fill="url(#farm-leaf)" />
          <path d="M23-99 Q38-101 36-87 M5-89 Q17-97 20-82" fill="none" stroke="#d3d87b" strokeWidth="4" strokeLinecap="round" />
        </g>
      </defs>
      <path fill="url(#farm-sky)" d="M0 0h1440v700H0z" />
      <circle cx="1150" cy="116" r="240" fill="url(#farm-glow)" /><circle cx="1150" cy="116" r="42" fill="#fff3bc" />
      <g className="field-cloud field-cloud-one" fill="#fff" opacity=".35"><ellipse cx="860" cy="115" rx="95" ry="17" /><ellipse cx="825" cy="104" rx="36" ry="22" /><ellipse cx="875" cy="96" rx="40" ry="25" /></g>
      <g className="field-cloud field-cloud-two" fill="#fff" opacity=".3"><ellipse cx="1280" cy="208" rx="102" ry="15" /><ellipse cx="1300" cy="193" rx="48" ry="24" /></g>
      <path d="M0 287Q160 205 320 271T640 260T980 241T1440 267V420H0Z" fill="#86a777" />
      <path d="M0 317Q230 249 418 305T800 288T1120 284T1440 309V460H0Z" fill="#5f8751" />
      <g fill="#3c6946"><path d="M1350 289v-57h7v57Z" /><circle cx="1353" cy="218" r="33" /><circle cx="1329" cy="239" r="25" /><circle cx="1377" cy="239" r="29" /><path d="M822 297v-42h5v42Z" /><circle cx="824" cy="242" r="26" /></g>
      <path d="M0 343Q690 280 1440 334V700H0Z" fill="url(#farm-ground)" />
      <g fill="none" strokeLinecap="round"><path d="M704 326Q1010 405 1450 507" stroke="#b0bf69" strokeWidth="20" /><path d="M596 331Q848 427 1232 700" stroke="#749644" strokeWidth="35" /><path d="M437 335Q503 438 726 700" stroke="#aac35b" strokeWidth="35" /><path d="M290 338Q234 468 122 700" stroke="#6e963e" strokeWidth="38" /><path d="M930 326Q1202 366 1450 385" stroke="#9fb652" strokeWidth="12" /></g>
      <path d="M1056 335Q976 427 925 700H1068Q1047 491 1092 340Z" fill="#aaa66d" /><path d="M1071 341Q1014 449 1000 700" fill="none" stroke="#c7be87" strokeWidth="5" opacity=".5" />
      {[0, 1, 2, 3, 4].map(row => (
        <g key={row}>
          {Array.from({ length: 15 }, (_, col) => {
            const x = col * 110 - 40 + (row % 2) * 35
            const y = 365 + row * 81
            if (x > 900 && x < 1110) return null
            return <g key={col} transform={`translate(${x} ${y}) scale(${0.34 + row * 0.23})`} opacity={0.7 + row * 0.06}><g className="rice-sway" style={{ animationDelay: `${-(col * 0.41 + row * 0.7)}s` }}><use href="#rice-plant" /></g></g>
          })}
        </g>
      ))}
      <ellipse cx="1112" cy="537" rx="92" ry="16" fill="#254f2e" opacity=".25" />
      <g className="field-farmer">
        <path d="M1102 440L1092 490L1075 530L1099 534L1124 492L1136 450Z" fill="#253e39" />
        <path d="M1132 444L1144 487L1167 524L1147 535L1115 493L1110 452Z" fill="#304e42" />
        <path d="M1076 525q-17 7-18 14h42v-11Z M1147 527l-3 12h39q-2-10-19-14Z" fill="#25392e" />
        <g className="farmer-working-body">
          <path d="M1096 364Q1118 349 1140 372L1164 425L1135 462L1095 447L1085 397Z" fill="#d3a24c" />
          <path d="M1101 367L1119 394L1129 451L1096 447L1086 398Z" fill="#e5bc70" />
          <path d="M1097 367L1088 349L1107 334L1121 360Z" fill="#a16a43" />
          <ellipse cx="1093" cy="333" rx="21" ry="27" transform="rotate(-25 1093 333)" fill="#b37d4e" />
          <path d="M1077 331q-11-8-3-23q20-24 41 1l-6 15-16-9Z" fill="#364c35" />
          <path d="M1055 317L1090 281L1133 309Q1090 327 1055 317Z" fill="#ddc185" />
          <path d="M1055 317Q1089 307 1133 309" stroke="#ba985a" fill="none" strokeWidth="5" />
          <g className="farmer-working-arm">
            <path d="M1135 381L1147 417L1090 445" fill="none" stroke="#bb864f" strokeWidth="15" strokeLinecap="round" />
            <path d="M1133 378L1141 405" stroke="#d3a24c" strokeWidth="23" strokeLinecap="round" />
            <path d="M1084 432L1035 529" stroke="#71583b" strokeWidth="6" strokeLinecap="round" /><path d="M1011 529L1044 523L1049 537L1022 543Z" fill="#75817a" />
            <circle cx="1089" cy="445" r="8" fill="#b37d4e" />
          </g>
        </g>
      </g>
      <g transform="translate(1215 611) scale(1.5)"><g className="rice-sway"><use href="#rice-plant" /></g></g>
      <g transform="translate(1388 715) scale(2.1)"><g className="rice-sway"><use href="#rice-plant" /></g></g>
      <g transform="translate(760 740) scale(1.8)"><g className="rice-sway"><use href="#rice-plant" /></g></g>
      <path d="M1010 165q8-10 16 0q8-10 16 0 M1230 254q6-8 12 0q6-8 12 0" stroke="#527660" strokeWidth="2" fill="none" />
    </svg>
  )
}
