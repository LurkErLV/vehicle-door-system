let speedo = mp.browsers.new("package://fuel-system/CEF/speedometer.html");
let showed = false;
let player = mp.players.local;

let newkm = 0.0;
var vehPos1 = null;
var vehPos2 = null;
let timeNow = Date.now();
let distance = 0;

mp.events.add('render', () => {
	if (player.vehicle && player.vehicle.getPedInSeat(-1) === player.handle) {

		if(showed === false)
		{
			speedo.execute("showSpeedo();");
			showed = true;
		}
		let vel = player.vehicle.getSpeed() * 3.6;
		let rpm = player.vehicle.rpm * 1000;


		let gas = player.vehicle.getVariable('Tank');
		let maxGas = player.vehicle.getVariable('TankMax');
		kmS = player.vehicle.getVariable('kmS');
		speedo.execute(`update(${vel}, ${rpm}, ${gas}, ${kmS}, ${maxGas});`);
	} else {
		if(showed)
		{
			speedo.execute("hideSpeedo();");
			showed = false;
		}
	}
});

setInterval(function(){_intervalFunction();},1000);

function _intervalFunction() {
	let player = mp.players.local;
		if (player.vehicle && player.vehicle.getPedInSeat(-1) === player.handle) // Check if player is in vehicle and is driver
		{
			let speed = mp.players.local.vehicle.getSpeed();
			let veh_class = mp.players.local.vehicle.getClass();
			let veh_data = JSON.stringify({"speed":speed, "class": veh_class});
			mp.events.callRemote('calc_km', (player, veh_data));
		}
};

mp.events.add('isInCar', () =>
{

});

