const Validator = require("fastest-validator");
const models = require("../models");

function save(req, res) {
 const post = {
  title: req.body.title,
  content: req.body.content,
  imageUrl: req.body.image_url,
  categoryId: req.body.category_id,
  userId: 1,
 };
 const schema = {
  title: { type: "string", optional: false, max: "100" },
  content: { type: "string", optional: false, max: "500" },
  categoryId: { type: "number", optional: false },
 };
 const v = new Validator();
 const validationResponse = v.validate(post, schema);
 // if the validation is passed it would return true else it would return an array of error messages
 if (validationResponse !== true) {
  return res.status(400).json({
   message: "Validation failed",
   errors: validationResponse,
  });
 }

 // The create method of this model returns a promise so we use the dot then() method to access our result
 models.Post.create(post)
  .then((result) => {
   res.status(201).json({
    message: "Post created successfully",
    post: result,
   });
  })
  .catch((error) => {
   res.status(500).json({
    message: "Something went wrong",
    error: error,
   });
  });
}
function show(req, res) {
 const id = req.params.id;

 models.Post.findByPk(id)
  .then((result) => {
   if (!result) {
    return res.status(404).json({ message: "Post not found" });
   }
   res.status(200).json(result);
  })
  .catch((error) => {
   res.status(500).json({
    message: "Something went wrong",
   });
  });
}
function index(req, res) {
 models.Post.findAll()
  .then((result) => {
   res.status(200).json(result);
  })
  .catch((error) => {
   res.status(500).json({
    message: "Something went wrong",
   });
  });
}
function update(req, res) {
 const id = req.params.id;
 const userId = 1;
 const updatedPost = {
  title: req.body.title,
  content: req.body.content,
  imageUrl: req.body.image_url,
  categoryId: req.body.category_id,
 };

 const schema = {
  title: { type: "string", optional: false, max: "100" },
  content: { type: "string", optional: false, max: "500" },
  categoryId: { type: "number", optional: false },
 };
 const v = new Validator();
 const validationResponse = v.validate(updatedPost, schema);
 // if the validation is passed it would return true else it would return an array of error messages
 if (validationResponse !== true) {
  return res.status(400).json({
   message: "Validation failed",
   errors: validationResponse,
  });
 }

 models.Post.update(updatedPost, { where: { id: id, userId: userId } })
  .then((result) => {
   res
    .status(200)
    .json({ message: "Post updated successfully", post: updatedPost });
  })
  .catch((error) => {
   res.status(500).json({
    message: "Something went wrong",
    error: error,
   });
  });
}

function destroy(req, res) {
 const id = req.params.id;

 const userId = 1;
 models.Post.destroy({ where: { id: id, userId: userId } })
  .then((result) => {
   res.status(200).json({ message: "Post deleted successfully", post: result });
  })
  .catch((error) => {
   res.status(500).json({
    message: "Something went wrong",
    error: error,
   });
  });
}

module.exports = {
 save,
 show,
 index,
 update,
 destroy,
};
