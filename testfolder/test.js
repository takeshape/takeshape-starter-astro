import ReactProduct from '../components/ReactProduct.js';
    // let products = null;
    // try{
    //     const result = await fetch(
    //             'https://api.takeshape.io/project/6cdbcc52-5697-475b-872e-fcb6fd0e00d0/v3/graphql',
    //             {
    //                 headers: {
    //                     authorization: 'Bearer 3c1de7f9842f47cd98c8360a241a0eaa'
    //                 },
    //                 method: 'POST',
    //                 body: JSON.stringify({            
    //                     query: `query{
    //                         getProductList{
    //                             items{
    //                                 _id
    //                                 name
    //                                 price
    //                             }
    //                         }
    //                     }`
    //                 })
    //             }
    //         );
        
    //     if(result.ok){
    //         const resultJSON = await result.json();
    //         products = resultJSON.data.getProductList.items;
    //     } else {
    //         throw new Error(`${result.status}: ${result.statusText}`);
    //     }
    // } catch(error) {
    //     console.log(error);
    // }