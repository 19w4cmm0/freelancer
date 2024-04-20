const Account = require("../models/account.model")
const Project = require("../models/project.model")

// [POST] /admin/products/create
module.exports.create = async (req, res) => {
    
    const account = await Account.findOne({ token: req.cookies.tokenAcc});

    req.body.id_nha_tuyen_dung = account.id;

    const project = new Project(req.body);
    await project.save();

    res.json({
        code: 400,
        message: "Tạo dự án thành công!"
    });



    // if(req.body.position == ""){
    //     const countProducts = await Product.countDocuments();
    //     req.body.position = countProducts + 1;
    // } else {
    //     req.body.position = parseInt(req.body.position);
    // }
    
    // req.body.createdBy = {
    //     account_id: res.locals.user.id
    // }

    // const product = new Product(req.body);
    // await product.save();

    // res.redirect(`${systemConfig.prefixAdmin}/products`);
};