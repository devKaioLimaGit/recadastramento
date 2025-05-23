const Units = require("../../database/model/Units");

class UpdateUnitsServices {
    async execute({ id, unit, address, capacity }) {
        try {
            const unitService = await Units.update(
                { unit, address, capacity },
                { where: { id } }
            );

            return "Dados da unidade atualizados!";
        }catch(error){
            throw new Error("Erro ao atualizar unidade!")
        }

    }
}

module.exports = UpdateUnitsServices;
