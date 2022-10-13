import { User, Commandes, Ingredients, jonctIngr } from "../../ORM/Table.js";

export async function getCommand(req, res) {
  const user = await User.findAll({
    include: [
      {
        model: Commandes,
        include: [
          {
            model: jonctIngr,
            include: [
              {
                model: Ingredients,
              },
            ],
          },
        ],
      },
    ],
  });

  res.json({ data: user });
}

export async function postCommand(req, res) {
  let myNewUser = await User.create({ phone: req.body.telephone });
  let myNewCommand = await Commandes.create({ user_id: myNewUser.id });
  let indexIngredient = req.body.ingredients.forEach((element) => {
    jonctIngr.create({
      commandeId: myNewCommand.id,
      ingredientId: element,
    });
  });
}

export async function delCommand(req, res) {
  const id = req.params.id;
  const user = await User.destroy({ where: { id: id } });
}
