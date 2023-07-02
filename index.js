const generateColorButton = document.querySelector('[data-gen]');
const colorCodeCopyBtn = document.querySelector('[data-copy]');
const audio = new Audio('ting.mp3')

const year = document.getElementById('year')

const randomColor = ()=>{
    let n = Math.floor(Math.random()*100)
    document.querySelector('[data-hex]').innerText = colorsArray[n].color;
    document.querySelector('[data-color]').innerText = colorsArray[n].name;
    document.getElementById('color-display').style.backgroundColor = colorsArray[n].color;
    console.log(n);
}

generateColorButton.addEventListener('click', ()=>{
    randomColor();
});
colorCodeCopyBtn.addEventListener('click', ()=>{
    navigator.clipboard.writeText(document.querySelector('[data-hex]').innerText)
    console.log(document.querySelector('[data-hex]').innerText)
    audio.play()
})

const randomGradient = ()=>{
    let o = Math.floor(Math.random()*100)
    document.querySelector('[data-css]').innerText = gradientColors[o];
    document.getElementById('grad-display').style.backgroundImage = gradientColors[o]
    console.log(o);
}

const generateGradButton = document.querySelector('[data-grad]')
const gradCodeCopyBtn = document.querySelector('[data-grad-copy]');

generateGradButton.addEventListener('click', ()=>{
    randomGradient()
});

gradCodeCopyBtn.addEventListener('click', ()=>{
    navigator.clipboard.writeText(document.querySelector('[data-css]').innerText)
    console.log(document.querySelector('[data-css]').innerText)
    audio.play()
})

const colorsArray = [
    { name: "TURQUOISE", color: "rgb(26, 188, 156)" },
    { name: "EMERALD", color: "rgb(46, 204, 113)" },
    { name: "PETER RIVER", color: "rgb(52, 152, 219)" },
    { name: "AMETHYST", color: "rgb(155, 89, 182)" },
    { name: "WET ASPHALT", color: "rgb(52, 73, 94)" },
    { name: "GREEN SEA", color: "rgb(22, 160, 133)" },
    { name: "NEPHRITIS", color: "rgb(39, 174, 96)" },
    { name: "BELIZE HOLE", color: "rgb(41, 128, 185)" },
    { name: "WISTERIA", color: "rgb(142, 68, 173)" },
    { name: "MIDNIGHT BLUE", color: "rgb(44, 62, 80)" },
    { name: "SUN FLOWER", color: "rgb(241, 196, 15)" },
    { name: "CARROT", color: "rgb(230, 126, 34)" },
    { name: "ALIZARIN", color: "rgb(231, 76, 60)" },
    { name: "CLOUDS", color: "rgb(236, 240, 241)" },
    { name: "CONCRETE", color: "rgb(149, 165, 166)" },
    { name: "ORANGE", color: "rgb(243, 156, 18)" },
    { name: "PUMPKIN", color: "rgb(211, 84, 0)" },
    { name: "POMEGRANATE", color: "rgb(192, 57, 43)" },
    { name: "SILVER", color: "rgb(189, 195, 199)" },
    { name: "ASBESTOS", color: "rgb(127, 140, 141)" },
    { name: "SUNFLOWER", color: "rgb(255, 195, 18)" },
    { name: "ENERGOS", color: "rgb(196, 229, 56)" },
    { name: "BLUE MARTINA", color: "rgb(18, 203, 196)" },
    { name: "LAVENDER ROSE", color: "rgb(253, 167, 223)" },
    { name: "BARA RED", color: "rgb(237, 76, 103)" },
    { name: "RADIANT YELLOW", color: "rgb(247, 159, 31)" },
    { name: "ANDROID GREEN", color: "rgb(163, 203, 56)" },
    { name: "MEDITERRANEAN SEA", color: "rgb(18, 137, 167)" },
    { name: "LAVENDER TEA", color: "rgb(217, 128, 250)" },
    { name: "VERY BERRY", color: "rgb(181, 52, 113)" },
    { name: "PUTINS BALLS", color: "rgb(238, 90, 36)" },
    { name: "PIXELATED GRASS", color: "rgb(0, 148, 50)" },
    { name: "MERCHANT MARINE BLUE", color: "rgb(6, 82, 221)" },
    { name: "FORGOTTEN PURPLE", color: "rgb(153, 128, 250)" },
    { name: "HOLLYHOCK", color: "rgb(131, 52, 113)" },
    { name: "RED PIGMENT", color: "rgb(234, 32, 39)" },
    { name: "TURKISH AQUA", color: "rgb(0, 98, 102)" },
    { name: "20000 LEAGUES UNDER THE SEA", color: "rgb(27, 20, 100)" },
    { name: "CIRCUMORBITAL RING", color: "rgb(87, 88, 187)" },
    { name: "MAGENTA PURPLE", color: "rgb(111, 30, 81)" },
    { name: "HIGHLIGHTER PINK", color: "rgb(239, 87, 119)" },
    { name: "DARK PERIWINKLE", color: "rgb(87, 95, 207)" },
    { name: "MEGAMAN", color: "rgb(75, 207, 250)" },
    { name: "FRESH TURQUOISE", color: "rgb(52, 231, 228)" },
    { name: "MINTY GREEN", color: "rgb(11, 232, 129)" },
    { name: "SIZZLING RED", color: "rgb(245, 59, 87)" },
    { name: "FREE SPEECH BLUE", color: "rgb(60, 64, 198)" },
    { name: "SPIRO DISCO BALL", color: "rgb(15, 188, 249)" },
    { name: "JADE DUST", color: "rgb(0, 216, 214)" },
    { name: "GREEN TEAL", color: "rgb(5, 196, 107)" },
    { name: "NÂRENJI ORANGE", color: "rgb(255, 192, 72)" },
    { name: "YRIEL YELLOW", color: "rgb(255, 221, 89)" },
    { name: "SUNSET ORANGE", color: "rgb(255, 94, 87)" },
    { name: "HINT OF ELUSIVE BLUE", color: "rgb(210, 218, 226)" },
    { name: "GOOD NIGHT!", color: "rgb(72, 84, 96)" },
    { name: "CHROME YELLOW", color: "rgb(255, 168, 1)" },
    { name: "VIBRANT YELLOW", color: "rgb(255, 211, 42)" },
    { name: "RED ORANGE", color: "rgb(255, 63, 52)" },
    { name: "LONDON SQUARE", color: "rgb(128, 142, 155)" },
    { name: "BLACK PEARL", color: "rgb(30, 39, 46)" },
    { name: "JACKSONS PURPLE", color: "rgb(64, 64, 122)" },
    { name: "C64 PURPLE", color: "rgb(112, 111, 211)" },
    { name: "SWAN WHITE", color: "rgb(247, 241, 227)" },
    { name: "SUMMER SKY", color: "rgb(52, 172, 224)" },
    { name: "CELESTIAL GREEN", color: "rgb(51, 217, 178)" },
    { name: "LUCKY POINT", color: "rgb(44, 44, 84)" },
    { name: "LIBERTY", color: "rgb(71, 71, 135)" },
    { name: "HOT STONE", color: "rgb(170, 166, 157)" },
    { name: "DEVIL BLUE", color: "rgb(34, 112, 147)" },
    { name: "PALM SPRINGS SPLASH", color: "rgb(33, 140, 116)" },
    { name: "FLUORESCENT RED", color: "rgb(255, 82, 82)" },
    { name: "SYNTHETIC PUMPKIN", color: "rgb(255, 121, 63)" },
    { name: "CROCODILE TOOTH", color: "rgb(209, 204, 192)" },
    { name: "MANDARIN SORBET", color: "rgb(255, 177, 66)" },
    { name: "SPICED BUTTERNUT", color: "rgb(255, 218, 121)" },
    { name: "EYE OF NEWT", color: "rgb(179, 57, 57)" },
    { name: "CHILEAN FIRE", color: "rgb(205, 97, 51)" },
    { name: "GREY PORCELAIN", color: "rgb(132, 129, 122)" },
    { name: "ALAMEDA OCHRE", color: "rgb(204, 142, 53)" },
    { name: "DESERT", color: "rgb(204, 174, 98)" },
    { name: "ORCHID ORANGE", color: "rgb(254, 164, 127)" },
    { name: "SPIRO DISCO BALL", color: "rgb(37, 204, 247)" },
    { name: "HONEY GLOW", color: "rgb(234, 181, 67)" },
    { name: "SWEET GARDEN", color: "rgb(85, 230, 193)" },
    { name: "FALLING STAR", color: "rgb(202, 211, 200)" },
    { name: "RICH GARDENIA", color: "rgb(249, 127, 81)" },
    { name: "CLEAR CHILL", color: "rgb(27, 156, 252)" },
    { name: "SARAWAK WHITE PEPPER", color: "rgb(248, 239, 186)" },
    { name: "KEPPEL", color: "rgb(88, 177, 159)" },
    { name: "SHIP'S OFFICER", color: "rgb(44, 58, 71)" },
    { name: "FIERY FUCHSIA", color: "rgb(179, 55, 113)" },
    { name: "BLUEBELL", color: "rgb(59, 59, 152)" },
    { name: "GEORGIA", color: "rgb(253, 114, 114)" },
    { name: "OASIS STREAM", color: "rgb(154, 236, 219)" },
    { name: "BRIGHT UBE", color: "rgb(214, 162, 232)" },
    { name: "MAGENTA PURPLE", color: "rgb(109, 33, 79)" },
    { name: "ENDING NAVY BLUE", color: "rgb(24, 44, 97)" },
    { name: "SASQUATCH SOCKS", color: "rgb(252, 66, 123)" },
    { name: "PINE GLADE", color: "rgb(189, 197, 129)" },
    { name: "HIGHLIGHTER LAVENDER", color: "rgb(130, 88, 159)" }
]
const gradientColors = [
"linear-gradient(90deg, rgb(0, 255, 135) 0%, rgb(96, 239, 255) 100%)",
"linear-gradient(90deg, rgb(0, 97, 255) 0%, rgb(96, 239, 255) 100%)",
"linear-gradient(90deg, rgb(255, 27, 107) 0%, rgb(69, 202, 255) 100%)",
"linear-gradient(90deg, rgb(64, 201, 255) 0%, rgb(232, 28, 255) 100%)",
"linear-gradient(90deg, rgb(255, 147, 15) 0%, rgb(255, 249, 91) 100%)",
"linear-gradient(90deg, rgb(255, 15, 123) 0%, rgb(248, 155, 41) 100%)",
"linear-gradient(90deg, rgb(191, 15, 255) 0%, rgb(203, 255, 73) 100%)",
"linear-gradient(90deg, rgb(105, 110, 255) 0%, rgb(248, 172, 255) 100%)",
"linear-gradient(90deg, rgb(169, 255, 104) 0%, rgb(255, 137, 137) 100%)",
"linear-gradient(90deg, rgb(255, 88, 88) 0%, rgb(255, 200, 200) 100%)",
"linear-gradient(90deg, rgb(89, 92, 255) 0%, rgb(198, 248, 255) 100%)",
"linear-gradient(90deg, rgb(255, 165, 133) 0%, rgb(255, 237, 160) 100%)",
"linear-gradient(90deg, rgb(132, 255, 201) 0%, rgb(170, 178, 255) 50%, rgb(236, 160, 255) 100%)",
"linear-gradient(90deg, rgb(239, 112, 155) 0%, rgb(250, 147, 114) 100%)",
"linear-gradient(90deg, rgb(178, 239, 145) 0%, rgb(250, 147, 114) 100%)",
 "linear-gradient(90deg, rgb(155, 248, 244) 0%, rgb(111, 123, 247) 100%)",
 "linear-gradient(90deg, rgb(249, 197, 141) 0%, rgb(244, 146, 240) 100%)",
 "linear-gradient(90deg, rgb(244, 146, 240) 0%, rgb(161, 141, 206) 100%)",
 "linear-gradient(90deg, rgb(249, 177, 110) 0%, rgb(246, 128, 128) 100%)",
 "linear-gradient(90deg, rgb(155, 175, 217) 0%, rgb(16, 55, 131) 100%)",
 "linear-gradient(90deg, rgb(251, 208, 124) 0%, rgb(247, 247, 121) 100%)",
 "linear-gradient(90deg, rgb(197, 249, 215) 0%, rgb(247, 212, 134) 50%, rgb(242, 122, 125) 100%)",
 "linear-gradient(90deg, rgb(235, 244, 245) 0%, rgb(181, 198, 224) 100%)",
 "linear-gradient(90deg, rgb(246, 213, 247) 0%, rgb(251, 233, 215) 100%)",
 "linear-gradient(90deg, rgb(67, 35, 113) 0%, rgb(250, 174, 123) 100%)",
 "linear-gradient(90deg, rgb(233, 183, 206) 0%, rgb(211, 243, 241) 100%)",
 "linear-gradient(90deg, rgb(67, 156, 251) 0%, rgb(241, 135, 251) 100%)",
 "linear-gradient(90deg, rgb(29, 189, 230) 0%, rgb(241, 81, 94) 100%)",
 "linear-gradient(90deg, rgb(87, 235, 222) 0%, rgb(174, 251, 42) 100%)",
 "linear-gradient(90deg, rgb(66, 4, 126) 0%, rgb(7, 244, 158) 100%)",
 "linear-gradient(90deg, rgb(244, 242, 105) 0%, rgb(92, 178, 112) 100%)",
 "linear-gradient(90deg, rgb(177, 144, 186) 0%, rgb(232, 181, 149) 100%)",
 "linear-gradient(90deg, rgb(181, 151, 246) 0%, rgb(150, 198, 234) 100%)",
 "linear-gradient(90deg, rgb(201, 222, 244) 0%, rgb(245, 204, 212) 50%, rgb(184, 164, 201) 100%)",
 "linear-gradient(90deg, rgb(124, 101, 169) 0%, rgb(150, 212, 202) 100%)",
 "linear-gradient(90deg, rgb(246, 207, 190) 0%, rgb(185, 220, 242) 100%)",
 "linear-gradient(90deg, rgb(202, 239, 215) 0%, rgb(245, 191, 215) 50%, rgb(171, 201, 233) 100%)",
 "linear-gradient(90deg, rgb(159, 204, 250) 0%, rgb(9, 116, 241) 100%)",
 "linear-gradient(90deg, rgb(255, 184, 142) 0%, rgb(234, 87, 83) 100%)",
 "linear-gradient(90deg, rgb(211, 151, 250) 0%, rgb(131, 100, 232) 100%)",
 "linear-gradient(90deg, rgb(141, 233, 213) 0%, rgb(50, 196, 192) 100%)",
 "linear-gradient(90deg, rgb(245, 230, 173) 0%, rgb(241, 60, 119) 100%)",
 "linear-gradient(90deg, rgb(130, 244, 177) 0%, rgb(48, 198, 124) 100%)",
 "linear-gradient(90deg, rgb(212, 172, 251) 0%, rgb(184, 79, 206) 100%)",
 "linear-gradient(90deg, rgb(247, 186, 44) 0%, rgb(234, 84, 89) 100%)",
 "linear-gradient(90deg, rgb(97, 244, 222) 0%, rgb(110, 120, 255) 100%)",
 "linear-gradient(90deg, rgb(255, 203, 107) 0%, rgb(61, 139, 255) 100%)",
 "linear-gradient(90deg, rgb(168, 243, 104) 0%, rgb(249, 3, 94) 100%)",
 "linear-gradient(90deg, rgb(245, 201, 0) 0%, rgb(24, 49, 130) 100%)",
 "linear-gradient(90deg, rgb(255, 207, 103) 0%, rgb(211, 50, 29) 100%)",
 "linear-gradient(90deg, rgb(149, 249, 195) 0%, rgb(11, 56, 102) 100%)",
 "linear-gradient(90deg, rgb(77, 201, 230) 0%, rgb(33, 12, 174) 100%)",
 "linear-gradient(90deg, rgb(238, 184, 109) 0%, rgb(153, 70, 178) 100%)",
 "linear-gradient(90deg, rgb(217, 207, 121) 0%, rgb(86, 18, 214) 100%)",
 "linear-gradient(90deg, rgb(226, 219, 31) 0%, rgb(174, 16, 249) 100%)",
 "linear-gradient(90deg, rgb(126, 242, 157) 0%, rgb(15, 104, 169) 100%)",
 "linear-gradient(90deg, rgb(233, 208, 34) 0%, rgb(230, 11, 9) 100%)",
 "linear-gradient(90deg, rgb(255, 251, 175) 0%, rgb(171, 42, 237) 100%)",
 "linear-gradient(90deg, rgb(255, 239, 193) 0%, rgb(135, 79, 158) 100%)",
 "linear-gradient(90deg, rgb(239, 116, 92) 0%, rgb(52, 7, 61) 100%)",
 "linear-gradient(90deg, rgb(250, 255, 137) 0%, rgb(234, 114, 173) 100%)",
 "linear-gradient(90deg, rgb(145, 155, 255) 0%, rgb(19, 58, 148) 100%)",
 "linear-gradient(90deg, rgb(222, 184, 245) 0%, rgb(186, 66, 192) 100%)",
 "linear-gradient(90deg, rgb(243, 245, 32) 0%, rgb(89, 209, 2) 100%)",
 "linear-gradient(90deg, rgb(234, 152, 218) 0%, rgb(91, 108, 249) 100%)",
 "linear-gradient(90deg, rgb(255, 202, 166) 0%, rgb(248, 101, 148) 100%)",
 "linear-gradient(90deg, rgb(182, 243, 201) 0%, rgb(71, 102, 244) 100%)",
 "linear-gradient(90deg, rgb(243, 105, 110) 0%, rgb(248, 169, 2) 100%)",
 "linear-gradient(90deg, rgb(111, 247, 232) 0%, rgb(31, 126, 161) 100%)",
 "linear-gradient(90deg, rgb(244, 233, 0) 0%, rgb(96, 182, 241) 100%)",
 "linear-gradient(90deg, rgb(255, 215, 138) 0%, rgb(244, 118, 45) 100%)",
 "linear-gradient(90deg, rgb(255, 168, 189) 0%, rgb(36, 42, 207) 100%)",
 "linear-gradient(90deg, rgb(248, 153, 125) 0%, rgb(173, 51, 109) 100%)",
 "linear-gradient(90deg, rgb(111, 227, 225) 0%, rgb(82, 87, 229) 100%)",
 "linear-gradient(90deg, rgb(249, 164, 112) 0%, rgb(188, 85, 111) 100%)",
 "linear-gradient(90deg, rgb(237, 227, 66) 0%, rgb(255, 81, 235) 100%)",
 "linear-gradient(90deg, rgb(110, 241, 149) 0%, rgb(0, 227, 253) 100%)",
 "linear-gradient(90deg, rgb(57, 45, 105) 0%, rgb(181, 123, 238) 100%)",
 "linear-gradient(90deg, rgb(110, 238, 135) 0%, rgb(95, 197, 46) 100%)",
 "linear-gradient(90deg, rgb(252, 176, 243) 0%, rgb(61, 5, 221) 100%)",
 "linear-gradient(90deg, rgb(131, 245, 229) 0%, rgb(231, 97, 189) 100%)",
 "linear-gradient(90deg, rgb(247, 162, 161) 0%, rgb(255, 237, 0) 100%)",
 "linear-gradient(90deg, rgb(248, 207, 106) 0%, rgb(33, 120, 221) 100%)",
 "linear-gradient(90deg, rgb(248, 153, 153) 0%, rgb(246, 192, 186) 100%)",
 "linear-gradient(90deg, rgb(157, 128, 203) 0%, rgb(247, 194, 230) 100%)",
 "linear-gradient(90deg, rgb(249, 205, 195) 0%, rgb(250, 206, 251) 100%)",
 "linear-gradient(90deg, rgb(241, 225, 194) 0%, rgb(252, 188, 152) 100%)",
 "linear-gradient(90deg, rgb(247, 192, 236) 0%, rgb(167, 189, 234) 100%)",
 "linear-gradient(90deg, rgb(246, 196, 237) 0%, rgb(225, 218, 230) 100%)",
 "linear-gradient(90deg, rgb(135, 244, 181) 0%, rgb(147, 203, 241) 100%)",
 "linear-gradient(90deg, rgb(221, 180, 246) 0%, rgb(141, 208, 252) 100%)",
 "linear-gradient(90deg, rgb(242, 146, 237) 0%, rgb(243, 99, 100) 100%)",
 "linear-gradient(90deg, rgb(90, 178, 247) 0%, rgb(18, 207, 243) 100%)",
 "linear-gradient(90deg, rgb(248, 108, 167) 0%, rgb(244, 212, 68) 100%)",
 "linear-gradient(90deg, rgb(48, 197, 210) 0%, rgb(71, 16, 105) 100%)",
 "linear-gradient(90deg, rgb(98, 116, 231) 0%, rgb(135, 82, 163) 100%)",
 "linear-gradient(90deg, rgb(238, 217, 145) 0%, rgb(204, 247, 244) 100%)",
 "linear-gradient(90deg, rgb(148, 145, 226) 0%, rgb(175, 242, 216) 100%)",
 "linear-gradient(90deg, rgb(232, 189, 249) 0%, rgb(216, 222, 214) 100%)",
 "linear-gradient(90deg, rgb(149, 236, 176) 0%, rgb(243, 249, 138) 100%)"
]



let a = new Date().getFullYear()
year.innerHTML = ' ' + a