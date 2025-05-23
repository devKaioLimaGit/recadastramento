const Units = require("../../database/model/Units");

class CreateUnitsServices {
    async execute({ unit, address, capacity }) {
        const unitAlreadyExists = await Units.findOne({ where: { unit } });

        if (unitAlreadyExists) {
            throw new Error("Unidade já existe!");
        }

        const unitService = await Units.create({
            unit,
            address,
            capacity,
        });

        return unitService;
    }
}

module.exports = CreateUnitsServices;
