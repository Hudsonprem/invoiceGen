import { ToWords } from 'to-words';
import  upperCase  from "lodash/upperCase"
import  map  from "lodash/map"
import  sum  from "lodash/sum"

function percentage(num, per)
{
  return (num/100)*per;
}


function numberToWordConvert(number) {
    let toNumber = Number(number)
    const toWords = new ToWords({
        localeCode: 'en-IN',
        converterOptions: {
          currency: true,
          ignoreDecimal: false,
          ignoreZeroCurrency: false,
          doNotAddOnly: false,
          currencyOptions: { // can be used to override defaults for the selected locale
            name: 'Rupee',
            plural: 'Rupees',
            symbol: '₹',
            fractionalUnit: {
              name: 'Paisa',
              plural: 'Paise',
              symbol: '',
            },
          }
        }
      });
    let words = toWords.convert(toNumber)
    return upperCase(words)
}


function rateCalulator(Quantity, Rate) {
    let TotalRate = Quantity * Rate
    return Number(TotalRate).toFixed(2)
}

function GSTPerCalulator(productsArray, gst) {

    let TotalQuantity = map(productsArray, (product)=>{
            let Quantity = Number(product["Quantity"])
            let Rate = Number(product["Rate"])
            return Number(rateCalulator(Quantity, Rate))
    })
    let Total = sum(TotalQuantity);

    return Number(percentage(Total,gst)).toFixed(2)
}

function roundOff(productsArray, gst1, gst2)
{
    let value1 = GSTPerCalulator(productsArray, gst1)
    let value2 = GSTPerCalulator(productsArray, gst2)
    let Total = sum([Number(value1), Number(value2)]);
    let decimal = Total.toString().split(".")[0]
    let result = Number(Total) - Number(decimal) 
    if(Number(1 - result) === 1)
    {
        return 0
    }else{
        return Number(1 - result).toFixed(2)
    }
}


function totalPair(productsArray) {
    let Unit = [] 
    let TotalPair = map(productsArray, (product)=>{
        let Quantity = Number(product["Quantity"])
        Unit.push(product["Quantity_Unit"])   
        return Quantity
        })
    let Total = sum(TotalPair);
    return `${Number(Total).toFixed(2)}`
}

function sumProduct(productsArray) {
    let TotalQuantity = map(productsArray, (product)=>{
        let Quantity = Number(product["Quantity"])
        let Rate = Number(product["Rate"])
        return rateCalulator(Quantity, Rate)
        })
    let value = sum(TotalQuantity);
    return Number(value).toFixed(2)
}

function sumProductByGroup(productsHSN) {
    // product by HSN/SAC

    let TotalQuantity = map(productsHSN, (element,value)=>
    {
     return  element.value.map((productInfo, idx)=>{
            let Quantity = Number(productInfo["Quantity"])
            let Rate = Number(productInfo["Rate"])
            return Number(rateCalulator(Quantity, Rate))
        })
    })

    let value = TotalQuantity.map((e) => sum(e))
    let sumValue = sum(value)
    return Number(sumValue).toFixed(2)
}

function sumGSTByGroup(productsHSN,gst) {
    // product by HSN/SAC

    let TotalGST = map(productsHSN, (element,value)=>
    {
     return  Number(GSTPerCalulator(element.value, gst))
    })
    return Number(sum(TotalGST))
}

function totalGSTByGroup(productsHSN,gst1, gst2) {

    // product by HSN/SAC

    let TotalGST1 = sumGSTByGroup(productsHSN, gst1)
    let TotalGST2 = sumGSTByGroup(productsHSN, gst2)
    return sum([TotalGST1,TotalGST2])
}

function sumGST(productsArray,gst1,gst2) {
     // GST 1
     let value1 = GSTPerCalulator(productsArray, gst1)

     // GST 2
     let value2 = GSTPerCalulator(productsArray, gst2)
     let Total = sum([Number(value1), Number(value2)]);
     return Number(Total).toFixed(2)
}

function totalAmount(productsArray, gst1, gst2) {
   
    let TotalQuantity = map(productsArray, (product)=>{
        let Quantity = Number(product["Quantity"])
        let Rate = Number(product["Rate"])
        return Number(rateCalulator(Quantity, Rate))
    })
    console.log();
    // Totel Amount 
    let value = sum(TotalQuantity);

    // GST 1
    let value1 = GSTPerCalulator(productsArray, gst1)

    // GST 2
    let value2 = GSTPerCalulator(productsArray, gst2)

    // roundOff
    let value3 = roundOff(productsArray, gst1, gst2)

    let Total = sum([value, Number(value1), Number(value2),Number(value3)]);

    console.log(Total);
    return Number(Total).toFixed(2)
}


export {
    numberToWordConvert,
    rateCalulator,
    GSTPerCalulator,
    roundOff,
    totalAmount,
    totalPair,
    sumProduct,
    sumGST,
    sumProductByGroup,
    sumGSTByGroup,
    totalGSTByGroup
    
}