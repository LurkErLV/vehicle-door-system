let timeNow = Date.now();

mp.events.add('calc_km', (player, vehicle_data) => {
	vehicle_data = JSON.parse(vehicle_data);
	let distance = 0;
	let speed = vehicle_data.speed;
	let veh_class = vehicle_data.class;
	
	let trip = Math.floor(speed * ((Date.now() - timeNow) / 1000) * 100) / 100;
		
        distance += parseFloat(trip / 1000);
        timeNow = Date.now();
		var kmS = distance;
		kmS = kmS + player.vehicle.getVariable('kmS');
		let data = JSON.stringify({"playerID":player.id,"distance":distance,"state":true,"vehicle":player.vehicle, "class": veh_class});
		mp.events.call('tank', player, data);
		player.vehicle.setVariable('kmS', kmS);
});

mp.events.add('tank', (player, args) => {
	args = JSON.parse(args);
	player = mp.players.at(args.playerID);
	var vehicle = mp.vehicles.at(args.vehicle);
	var Veh_data = args.distance;
	var State = args.state;
	let veh_class = args.class;
	if(State){
	
	if(player.vehicle.getVariable('Tank') != null){
		

			let rest = (Veh_data*3);
			let tank = player.vehicle.getVariable('Tank');
			let newtank = (tank - rest);
			if(newtank < 0){
				player.vehicle.engine = false;
				player.notify("~r~Топливо закончилось");
				player.vehicle.setVariable('Tank', 0);
			} else{
				player.vehicle.setVariable('Tank', newtank);
			}
			
			}else{
				if (
					veh_class === 0 || // Compacts
					veh_class === 1 || // Sedans
					veh_class === 3    // Coupes
				  ) {
					player.vehicle.setVariable("Tank", 50);
					player.vehicle.setVariable("TankMax", 50);
					player.vehicle.setVariable("kmS", 0);
				  } else if (
					veh_class === 2 || // SUVs
					veh_class === 9 || // Off-Road
					veh_class === 12   // Vans
				  ) {
					player.vehicle.setVariable("Tank", 75);
					player.vehicle.setVariable("TankMax", 75);
					player.vehicle.setVariable("kmS", 0);
				  } else if (veh_class === 4) { // Muscle
					player.vehicle.setVariable("Tank", 60);
					player.vehicle.setVariable("TankMax", 60);
					player.vehicle.setVariable("kmS", 0);
				  } else if (
					veh_class === 5 || // Sports Classic
					veh_class === 6    // Sports
				  ) {
					player.vehicle.setVariable("Tank", 55);
					player.vehicle.setVariable("TankMax", 55);
					player.vehicle.setVariable("kmS", 0);
				  } else if (veh_class === 7) { // Super
					player.vehicle.setVariable("Tank", 115);
					player.vehicle.setVariable("TankMax", 115);
					player.vehicle.setVariable("kmS", 0);
				  } else if (veh_class === 8) { // Motorcycles
					player.vehicle.setVariable("Tank", 30);
					player.vehicle.setVariable("TankMax", 30);
					player.vehicle.setVariable("kmS", 0);
				  } else if (
					veh_class === 10 || // Industrial
					veh_class === 20    // Commercial
				  ) {
					player.vehicle.setVariable("Tank", 170);
					player.vehicle.setVariable("TankMax", 170);
					player.vehicle.setVariable("kmS", 0);
				  } else if (veh_class === 14) { // Boats
					player.vehicle.setVariable("Tank", 70);
					player.vehicle.setVariable("TankMax", 70);
					player.vehicle.setVariable("kmS", 0);
				  } else if (
					veh_class === 15 || // Helicopters
					veh_class === 16    // Planes
				  ) {
					player.vehicle.setVariable("Tank", 600);
					player.vehicle.setVariable("TankMax", 600);
					player.vehicle.setVariable("kmS", 0);
				  } else if (veh_class === 17) { // Service
					player.vehicle.setVariable("Tank", 500);
					player.vehicle.setVariable("TankMax", 500);
					player.vehicle.setVariable("kmS", 0);
				  } else if (
					veh_class === 18 || // Emergency
					veh_class === 19    // Military
				  ) {
					player.vehicle.setVariable("Tank", 120);
					player.vehicle.setVariable("TankMax", 120);
					player.vehicle.setVariable("kmS", 0);
				  } else {
					player.vehicle.setVariable("Tank", 0);
					player.vehicle.setVariable("TankMax", 0);
					player.vehicle.setVariable("kmS", 0);
				  }
		}
		}
});