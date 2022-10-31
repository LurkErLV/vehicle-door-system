mp.keys.bind(0x4C, true, () => {
    let localPlayer = mp.players.local
    let idVehicle = mp.game.vehicle.getClosestVehicle(localPlayer.position.x, localPlayer.position.y, localPlayer.position.z, 10, 0, 70)
    let vehicle = mp.vehicles.atHandle(idVehicle)
    if (!vehicle) return;
    
    mp.events.callRemote("lockVehicle", vehicle)
});
