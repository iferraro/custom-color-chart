const colors = [
    {name: "Wet Sand", hex: "AEA98B"},
    {name: "Kidney Bean", hex: "B9535D"},
    {name: "Dauntless Pink", hex: "CC3399"},
    {name: "Protagonist", hex: "B51B37"},
    {name: "Jaunty", hex: "FF2625"},
    {name: "Pleasant Orange", hex: "F77F00"},
    {name: "Honeycomb", hex: "FE9C01"},
    {name: "Pompous Orange", hex: "FFAC40"},
    {name: "Sardonic Green", hex: "8DA868"},
    {name: "Evidently Emerald", hex: "378C40"},
    {name: "Tiger Beetle", hex: "188E68"},
    {name: "Swamp", hex: "204338"},
    {name: "Humble Green", hex: "00201C"},
    {name: "Cyan Spirit: Dark", hex: "003A42"},
    {name: "Sincere Blue", hex: "2626C6"},
    {name: "Hydrangea", hex: "044CE1"},
    {name: "Linear: Dark", hex: "036595"},
    {name: "Linear: Light", hex: "0385B5"},
    {name: "Formidiblue", hex: "0482CD"},
    {name: "Mail", hex: "EDEFEE"},
    {name: "Robin Egg", hex: "9ACACA"},
    {name: "Sand-ish Teal-ish", hex: "547C86"},
    {name: "Cyan Spirit: Light", hex: "00FFDA"},
    {name: "Righteous: Light", hex: "007696"},
    {name: "Righteous: Dark", hex: "004056"},
    {name: "Exec", hex: "18213A"},
    {name: "Morado Misterioso", hex: "280D3F"},
];

colors.forEach(function(c) {
    const frame = $("<div class='frame'></div>");
    const hexVal = '#' + c.hex;
    frame.css("background-color", hexVal);
    $("#col2").append(frame);
    const infoFrame = $("<p class='infoFrame'></p>").html(`
        ${c.name}
        <br>
        ${hexVal}
        <br>
        ${$(frame).css("background-color")}
    `);
    frame.append(infoFrame);
    infoFrame.hide();
    frame.click(function() {
        // infoFrame.show();
        // infoFrame.animate({width: "45%"}, 150);
        infoFrame.slideToggle(150);
    });
});
