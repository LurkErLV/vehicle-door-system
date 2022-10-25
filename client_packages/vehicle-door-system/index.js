const player = mp.players.local;

mp.keys.bind(0x4C, true, () => {
    const vehicle = mp.game.vehicle.getClosestVehicle(player.position.x, player.position.y, player.position.z, 150, 0, 70);

    if (vehicle) {
        let newState = !vehicle.locked;
        vehicle.locked = newState;
        player.notify(`Автомобиль ${vehicle.locked ? 'закрыт' : 'открыт'}`);
    }
});
