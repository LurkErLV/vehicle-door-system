mp.events.add("lockVehicle", (player, vehicle) => {
    vehicle.locked = !vehicle.locked;
    player.notify(vehicle.locked ? "Открыто" : "Закрыто")
});