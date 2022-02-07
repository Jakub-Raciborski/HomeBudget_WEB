$("#timeInterval").change(function () {
    let selectedOption = $("#timeInterval :selected").text();
    if(selectedOption=="Select a date") {
		alert("test");
		let selectON = '<div class="chooseDateTile">' +
						'<div><label for="firstBalanceDay">First day:</label></div>' +
						'<div><input id="firstBalanceDay" type="date" name="newEntryDate"></div>' +
						'</div>' +
						'<div class="chooseDateTile" id="lastDayBalanceChooseTile">' +
						'<div><label for="lastBalanceDay">Last day:</label></div>' +
						'<div><input id="lastBalanceDay" type="date" name="newEntryDate"></div>' +
						'</div>' +
						'<div class="clearBox"></div>';
		$("#datesSelector").html(selectON);
		}
    else{
			let selectOFF = ''
			$("#datesSelector").html(selectOFF);
		}
});