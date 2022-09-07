// Name:- Rishu Raj, College - Lovely Professionl University, Year of Passing - 2023, 9521404513, email - iamrishuydv@gmail.com 

// Basket
var basketObj = [
    {productName: "Leather Wallet", unitPrice: 1100, gstRate: 18, productQuantity: 1},
    {productName: "Umbrella", unitPrice: 900, gstRate: 12, productQuantity: 2},
    {productName: "Cigarette", unitPrice: 200, gstRate: 28, productQuantity: 3},
    {productName: "Honey", unitPrice: 100, gstRate: 0, productQuantity: 4}
];

// Discount threshold
var discountThreshold = 500;
var discountPerc = 5;

function getBillOfSale(){
    let totalProducts = basketObj.length;
    let totalAmountToBePaid = 0;
    let totalDiscount = 0;
    let lastBigGstIndex = null;
    let lastBigGstAmount = 0;

    console.log(`Total number Products in the basket: ${totalProducts}`);
    for (let index = 0; index < totalProducts; index++) {
        const element = basketObj[index];
        
        let thisTotal = (element.unitPrice * element.productQuantity);
        
        // check for discount
        if(element.unitPrice >= discountThreshold){
            
            let discount = discountPerc/100 * thisTotal;
            thisTotal = thisTotal - discount;
            totalDiscount += discount;
        }

        // check for biggest gst paid

        let gstAmount = (element.gstRate/100)*(element.unitPrice * element.productQuantity);
        if(gstAmount > lastBigGstAmount){
            lastBigGstIndex = index;
        }
        totalAmountToBePaid += thisTotal;
    }

    console.log(`TOTAL AMOUNT TO BE PAID: ${totalAmountToBePaid}`);
    console.log(`PRODUCT ON WHICH USER PAID MAX. GST: ${basketObj[lastBigGstIndex].productName}`);

    return totalAmountToBePaid;
}


getBillOfSale();
