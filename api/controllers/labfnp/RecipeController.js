module.exports = {

  find: async (req, res) => {
    console.log("=== find ===");
    try {
      const recipes = await Recipe.findAll();
      res.ok({
        data: {
          items: recipes
      }});
    } catch (e) {
      res.serverError({ message: e, data: {}});
    }
  },

  findOne: async (req, res) => {
    console.log("=== findOne ===");
    const { id } = req.params;
    try {
      const recipe = await Recipe.findOneWithScent({id})
      sails.log.info('get recipe =>', recipe);
      res.ok({
        message: 'Get recipe success.',
        data: recipe,
      });
    } catch (e) {
      res.serverError({ message: e, data: {}});
    }
  },

  create: async (req, res) => {
    const data = req.body;
    try {
      const loginedUser = AuthService.getSessionUser(req);
      console.log("loginedUser=>", loginedUser);
      if (loginedUser) {
        data.UserId = loginedUser.id;
      }
      sails.log.info('create recipe controller=>', data);
      const recipe = await RecipeService.create(data);
      res.ok({
        message: 'Create recipe success.',
        data: recipe,
      });
    } catch (e) {
      res.serverError({ message: e.message, data: {}});
    }
  },

  update: async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    try {
      sails.log.info('update recipe controller id=>', id);
      sails.log.info('update recipe controller data=>', data);
      const recipe = await RecipeService.update({
        id: id,
        ...data,
      });
      res.ok({
        message: 'Update recipe success.',
        data: recipe,
      });
    } catch (e) {
      res.serverError({ message: e.message, data: {}});
    }
  },

  destroy: async (req, res) => {
    const { id } = req.params;
    try {
      sails.log.info('delete recipe controller=>', id);
      const recipe = await Recipe.deleteById(id);
      res.ok({
        message: 'Delete recipe success.',
        data: recipe,
      });
    } catch (e) {
      res.serverError({ message: e.message, data: {}});
    }
  }
}