const models = require("../models");
const Vocab = models.vocab;

exports.create = async (req, res) => {
  if (!req.body.word || !req.body.wordType || !req.body.learning_date) {
    res.status(400).send({
      message: "The request is empty.",
    });
    return;
  }

  const vocab = {
    word: req.body.word,
    wordType: req.body.wordType,
    learning_date: req.body.learning_date,
  };

  try {
    const data = await Vocab.create(vocab);
    res.send(data);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Error",
    });
  }
};

exports.delete = async (req, res) => {
  const id = req.params.id;

  try {
    const num = await User.destroy({
      where: { id: id },
    });

    if (num == 1) {
      res.send({
        message: "Vocab was deleted successfully!",
      });
    } else {
      res.send({
        message: `Cannot delete vocab with id=${id}. Maybe User was not found!`,
      });
    }
  } catch (err) {
    res.status(500).send({
      message: "Could not delete User with id=" + id,
    });
  }
};

exports.update = async (req, res) => {
  const id = req.params.id;

  try {
    const num = await Vocab.update(req.body, {
      where: { id: id },
    });

    if (num == 1) {
      res.send({
        message: "vocab was updated successfully.",
      });
    } else {
      res.send({
        message: `Cannot update vocab with id=${id}. Maybe User was not found or req.body is empty!`,
      });
    }
  } catch {
    res.status(500).send({
      message: "Error updating User with id=" + id,
    });
  }
};

exports.findAll = async (req, res) => {
  try {
    const data = await Vocab.findAll();
    res.send(data);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Error",
    });
  }
};

exports.findOne = async (req, res) => {
  const id = req.params.id;

  try {
    const data = await Vocab.findByPk(id);
    res.send(data);
  } catch (err) {
    res.status(500).send({
      message: "Error retrieving vocab with id=" + id,
    });
  }
};

exports.findOneByUsername = async (req, res) => {
  const username = req.params.username;

  try {
    const data = await Vocab.findOne({ where: { username: username } });
    res.send(data);
  } catch (err) {
    res.status(500).send({
      message: "Error retrieving Vocab with username=" + username,
    });
  }
};
