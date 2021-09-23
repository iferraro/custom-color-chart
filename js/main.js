addBar("Wet Sand", "AEA98B");
addBar("Kidney Bean", "B9535D");
addBar("Dauntless Pink", "CC3399");
addBar("Protagonist", "B51B37");
addBar("IF Signature", "CC2034");
addBar("Jaunty", "FF2625");
addBar("Pleasant Orange", "F77F00");
addBar("Honeycomb", "FE9C01");
addBar("Pompous Orange", "FFAC40");
addBar("Sardonic Green", "8DA868");
addBar("Erudite", "378C40");
addBar("Tiger Beetle", "188E68");
addBar("Swamp", "204338");
addBar("Humble Green", "00201C");
addBar("Cyan Spirit: Dark", "003A42");
addBar("Sincere Blue", "2626C6");
addBar("Hydrangea", "044CE1");
addBar("Linear Blue: Dark", "036595");
addBar("Linear Blue: Light", "0385B5");
addBar("Mail", "EDEFEE");
addBar("Robin Egg", "9ACACA");
addBar("Sand-ish Teal-ish", "547C86");
addBar("Cyan Spirit: Light", "00FFDA");
addBar("Copper Crystal", "00B5C1");
addBar("Righteous Blue: Light", "007696");
addBar("Righteous Blue: Dark", "004056");
addBar("Exec", "18213A");
addBar("Morado Misterioso", "280D3F");

function addBar(colorName, colorHex) {
    let hex = "#" + colorHex;
    let horiz = $("<h2></h2>").text(colorName);
    horiz.css("background-color", hex);
    let descrip = $("<p></p>").text(hex);
    let descripAlt = $("<p></p>").text($(horiz).css("background-color"));
    horiz.append(descrip);
    horiz.append(descripAlt);
    descrip.hide();
    descripAlt.hide();
    $("body").append(horiz);
    if (colorHex[0] <= 3 && colorHex[2] <= 3 && colorHex[4] <= 3) {
        horiz.css("color", "white");
    }
    horiz.click(function () {
        descrip.toggle(150);
        descripAlt.toggle(150);
    });
}