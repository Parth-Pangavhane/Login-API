const Yup = require("yup");

const formSchema = Yup.object({
    username: Yup.string()
      .required("Username required")
      .min(6, "Username too Short")
      .max(28, "Username too long"),
    password: Yup.string()
      .required("Password required")
      .min(6, "Password too Short")
      .max(28, "PAssword too long"),
  });
  

const validateForm = (req,res) => {
    const formData = req.body;
    formSchema
      .validate(formData)
      .catch((err) => {
          res.status(422).send();
        console.log(err.errors);
      })
      .then((valid) => {
        if (valid) {
            res.send(200).send();
          console.log("Form is good");
        }
      });
}

module.exports = validateForm;