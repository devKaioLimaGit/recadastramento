const Units = require("../../database/model/Units");

class CreateUnitsService {
    async execute({ unit, address }) {
        const unitAlreadyExists = await Units.findOne({ where: { unit } });

        if (unitAlreadyExists) {
            throw new Error("Unidade já existe!");
        }

        const unitService = await Units.create({
            unit,
            address
        });

        return unitService;
    }
}

module.exports = CreateUnitsService;
