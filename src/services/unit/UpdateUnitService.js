const Units = require("../../database/model/Units");

class UpdateUnitsService {
    async execute({ id, unit, address }) {
        try {
            const unitService = await Units.update(
                { unit, address },
                { where: { id } }
            );

            return "Dados da unidade atualizados!";
        }catch(error){
            throw new Error("Erro ao atualizar unidade!")
        }

    }
}

module.exports = UpdateUnitsService;
