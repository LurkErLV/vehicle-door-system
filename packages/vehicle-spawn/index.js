mp.events.addCommand("veh", (player, vehId) => {
    const vehicle = mp.joaat(vehId);
    if (vehicle) {
        player.veh = mp.vehicles.new(vehId, player.position)
        player.veh.dimension = player.dimension;
        player.outputChatBox("!{green} Машина заспавнена!");
    } else {
        player.outputChatBox("!{red}Укажите название транспорта!");
    }
  });